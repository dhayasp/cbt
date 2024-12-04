// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract CarAuctionNetwork is ReentrancyGuard {
    using Counters for Counters.Counter;

    struct Car {
        string make;
        string model;
        uint256 year;
        address payable owner;
        bool registered;
    }

    struct Auction {
        uint256 carId;
        address payable seller;
        uint256 minBid;
        uint256 highestBid;
        address payable highestBidder;
        bool ended;
        bool started;
    }

    Counters.Counter private _carIdCounter;
    mapping(uint256 => Car) public cars;
    mapping(uint256 => Auction) public carAuctions;

    event CarRegistered(uint256 carId, string make, string model, uint256 year, address owner);
    event AuctionStarted(uint256 carId, uint256 minBid);
    event NewBid(uint256 carId, address bidder, uint256 bidAmount);
    event AuctionEnded(uint256 carId, address winner, uint256 bidAmount);
    
    // Register a car to the auction system
    function registerCar(string memory make, string memory model, uint256 year) public returns (uint256) {
        _carIdCounter.increment();
        uint256 carId = _carIdCounter.current();

        cars[carId] = Car({
            make: make,
            model: model,
            year: year,
            owner: payable(msg.sender),
            registered: true
        });

        emit CarRegistered(carId, make, model, year, msg.sender);
        return carId;
    }

    // Start an auction for a registered car
    function startCarAuction(uint256 carId, uint256 minBid) public {
        Car storage car = cars[carId];
        require(car.registered, "Car not registered");
        require(car.owner == msg.sender, "You do not own this car");
        require(!carAuctions[carId].started, "Auction already started for this car");

        carAuctions[carId] = Auction({
            carId: carId,
            seller: car.owner,
            minBid: minBid,
            highestBid: 0,
            highestBidder: payable(address(0)),
            ended: false,
            started: true
        });

        emit AuctionStarted(carId, minBid);
    }

    // Place a bid for a car auction
    function placeBid(uint256 carId) public payable nonReentrant {
        Auction storage auction = carAuctions[carId];
        require(auction.started, "Auction has not started");
        require(!auction.ended, "Auction has already ended");
        require(msg.value >= auction.minBid, "Bid does not meet minimum bid");
        require(msg.value > auction.highestBid, "Bid must be higher than the current highest bid");

        // Refund the previous highest bidder
        if (auction.highestBidder != address(0)) {
            auction.highestBidder.transfer(auction.highestBid);
        }

        auction.highestBidder = payable(msg.sender);
        auction.highestBid = msg.value;

        emit NewBid(carId, msg.sender, msg.value);
    }

    // End the auction and transfer the car to the highest bidder
    function endAuction(uint256 carId) public nonReentrant {
        Auction storage auction = carAuctions[carId];
        require(auction.started, "Auction has not started");
        require(!auction.ended, "Auction has already ended");
        require(auction.seller == msg.sender, "Only the seller can end the auction");

        auction.ended = true;

        if (auction.highestBidder != address(0)) {
            // Transfer car ownership
            cars[carId].owner = auction.highestBidder;

            // Transfer funds to the seller
            auction.seller.transfer(auction.highestBid);
        }

        emit AuctionEnded(carId, auction.highestBidder, auction.highestBid);
    }

    // Get car details
    function getCarDetails(uint256 carId) public view returns (string memory make, string memory model, uint256 year, address owner) {
        Car storage car = cars[carId];
        require(car.registered, "Car not registered");

        return (car.make, car.model, car.year, car.owner);
    }

    // Get auction details
    function getAuctionDetails(uint256 carId) public view returns (address seller, uint256 minBid, uint256 highestBid, address highestBidder, bool ended) {
        Auction storage auction = carAuctions[carId];
        require(auction.started, "Auction has not started");

        return (auction.seller, auction.minBid, auction.highestBid, auction.highestBidder, auction.ended);
    }

    // Get the total count of registered cars
    function getCarCount() public view returns (uint256) {
        return _carIdCounter.current(); // Return the current count of registered cars
    }

    // Fallback function to handle receiving Ether
    receive() external payable {}
}
