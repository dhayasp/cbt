const contractAddress = "0xdc8767dd1b1c1a16c9aa653720dc781d1f9f2697";
const contractABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bidAmount",
        type: "uint256",
      },
    ],
    name: "AuctionEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minBid",
        type: "uint256",
      },
    ],
    name: "AuctionStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "make",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "model",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "CarRegistered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
    ],
    name: "endAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bidAmount",
        type: "uint256",
      },
    ],
    name: "NewBid",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
    ],
    name: "placeBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "make",
        type: "string",
      },
      {
        internalType: "string",
        name: "model",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
    ],
    name: "registerCar",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minBid",
        type: "uint256",
      },
    ],
    name: "startCarAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "carAuctions",
    outputs: [
      {
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minBid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "highestBid",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "highestBidder",
        type: "address",
      },
      {
        internalType: "bool",
        name: "ended",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "started",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "cars",
    outputs: [
      {
        internalType: "string",
        name: "make",
        type: "string",
      },
      {
        internalType: "string",
        name: "model",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "registered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
    ],
    name: "getAuctionDetails",
    outputs: [
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minBid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "highestBid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "highestBidder",
        type: "address",
      },
      {
        internalType: "bool",
        name: "ended",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCarCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "carId",
        type: "uint256",
      },
    ],
    name: "getCarDetails",
    outputs: [
      {
        internalType: "string",
        name: "make",
        type: "string",
      },
      {
        internalType: "string",
        name: "model",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

// Ensure Web3 is initialized
if (typeof window.ethereum !== "undefined") {
  // Use window.ethereum as the provider
  web3 = new Web3(window.ethereum);

  // Request account access if needed
  try {
    window.ethereum.request({ method: "eth_requestAccounts" });
  } catch (error) {
    console.error("User denied account access", error);
  }
} else if (typeof window.web3 !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
  console.warn(
    "Using deprecated window.web3. Please upgrade to window.ethereum."
  );
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  console.warn("No Ethereum provider detected. Falling back to localhost.");
}

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Register a new car
document.getElementById("registerCar").addEventListener("click", async () => {
  const make = document.getElementById("make").value;
  const model = document.getElementById("model").value;
  const year = document.getElementById("year").value;

  if (make && model && year) {
    const accounts = await web3.eth.getAccounts();

    const estimatedGas = await contract.methods
      .registerCar(make, model, year)
      .estimateGas({ from: accounts[0] });

    const gasPrice = await web3.eth.getGasPrice();
    const reducedGasPrice = Math.floor(gasPrice * 0.9); // Ensure integer

    contract.methods
      .registerCar(make, model, year)
      .send({
        from: accounts[0],
        gas: estimatedGas,
        gasPrice: reducedGasPrice,
      })
      .then((receipt) => {
        alert("Car registered successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    alert("Be sure to fill all the fields");
  }
});

// Start Auction
document.getElementById("startAuction").addEventListener("click", async () => {
  const carId = document.getElementById("auctionCarId").value;
  const minBid = web3.utils.toWei(
    document.getElementById("minBid").value,
    "ether"
  );
  const accounts = await web3.eth.getAccounts();

  const estimatedGas = await contract.methods
    .startCarAuction(carId, minBid)
    .estimateGas({ from: accounts[0] });

  const gasPrice = await web3.eth.getGasPrice();
  const reducedGasPrice = Math.floor(gasPrice * 0.9);

  contract.methods
    .startCarAuction(carId, minBid)
    .send({
      from: accounts[0],
      gas: estimatedGas,
      gasPrice: reducedGasPrice,
    })
    .then((receipt) => {
      alert(`Auction started for car ID: ${carId}`);
    })
    .catch((error) => {
      console.error(error);
      alert(error);
    });
});

// Place a Bid
document.getElementById("placeBid").addEventListener("click", async () => {
  const carId = document.getElementById("bidCarId").value;
  const bidAmount = web3.utils.toWei(
    document.getElementById("bidAmount").value,
    "ether"
  );
  const accounts = await web3.eth.getAccounts();

  const estimatedGas = await contract.methods
    .placeBid(carId)
    .estimateGas({ from: accounts[0], value: bidAmount });

  const gasPrice = await web3.eth.getGasPrice();
  const reducedGasPrice = Math.floor(gasPrice * 0.9);

  contract.methods
    .placeBid(carId)
    .send({
      from: accounts[0],
      value: bidAmount,
      gas: estimatedGas,
      gasPrice: reducedGasPrice,
    })
    .then((receipt) => {
      alert("Bid placed successfully!");
    })
    .catch((error) => {
      console.error(error);
    });
});

// End Auction
document.getElementById("endAuction").addEventListener("click", async () => {
  const carId = document.getElementById("endCarId").value;
  const accounts = await web3.eth.getAccounts();

  const estimatedGas = await contract.methods
    .endAuction(carId)
    .estimateGas({ from: accounts[0] });

  const gasPrice = await web3.eth.getGasPrice();
  const reducedGasPrice = Math.floor(gasPrice * 0.9);

  contract.methods
    .endAuction(carId)
    .send({
      from: accounts[0],
      gas: estimatedGas,
      gasPrice: reducedGasPrice,
    })
    .then((receipt) => {
      alert(`Auction ended for car ID: ${carId}`);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Get Car and Auction Details of a single car
document.getElementById("getDetails").addEventListener("click", async () => {
  const carId = document.getElementById("detailsCarId").value;

  if (carId.trim()) {
    // Hide the all-car table
    document.getElementById("allCarAuctionDetailsTable").style.display = "none";

    // Fetch Car Details
    let carDetails = await contract.methods
      .getCarDetails(carId)
      .call()
      .catch((error) => {
        console.error(error.message);
        alert(`Car ID: ${carId} is not registered`);
      });

    // Fetch Auction Details
    let auctionDetails = await contract.methods
      .getAuctionDetails(carId)
      .call()
      .catch((error) => {
        console.error(error.message);
        alert(`Auction not yet started for car ID: ${carId}`);
        carDetails = "";
      });

    // If Car details exist, populate the table
    if (carDetails) {
      const table = document.getElementById("carAuctionDetailsTable");
      const tbody = table.querySelector("tbody");

      // Clear existing rows
      tbody.innerHTML = "";

      // If auction details are not available, fill with "N/A"
      auctionDetails = auctionDetails || ["N/A", "N/A", "N/A", "N/A", false];

      // Add a new row with car and auction details
      const row = `
              <tr>
                  <td>${carId}</td>
                  <td>${carDetails[0]}</td>
                  <td>${carDetails[1]}</td>
                  <td>${carDetails[2]}</td>
                  <td>${carDetails[3].slice(0, 5)}....${carDetails[3].slice(
        carDetails[3].length - 4
      )}</td>
                  <td>${auctionDetails[0].slice(
                    0,
                    5
                  )}....${auctionDetails[0].slice(
        auctionDetails[0].length - 4
      )}</td>
                  <td>${
                    auctionDetails[1] !== "N/A"
                      ? web3.utils.fromWei(auctionDetails[1], "ether")
                      : "N/A"
                  }</td>
                  <td>${
                    auctionDetails[2] !== "N/A"
                      ? web3.utils.fromWei(auctionDetails[2], "ether")
                      : "N/A"
                  }</td>
                  <td>${auctionDetails[3].slice(
                    0,
                    5
                  )}....${auctionDetails[3].slice(
        auctionDetails[3].length - 4
      )}</td>
                  <td>${auctionDetails[4] ? "Yes" : "No"}</td>
              </tr>
          `;

      tbody.insertAdjacentHTML("beforeend", row);
      table.style.display = "table"; // Show the table
    }
  } else {
    alert("Enter a valid car ID");
  }
});

// Get all cars and auction details
document.getElementById("getAllDetails").addEventListener("click", async () => {
  // Hide the single-car table when fetching all cars
  document.getElementById("carAuctionDetailsTable").style.display = "none";

  // Fetch total number of cars
  const carCount = await contract.methods.getCarCount().call();
  const table = document.getElementById("allCarAuctionDetailsTable");
  const tbody = table.querySelector("tbody");

  // Clear existing rows
  tbody.innerHTML = "";

  for (let i = 1; i <= carCount; i++) {
    try {
      // Fetch car details for each car
      const carDetails = await contract.methods.getCarDetails(i).call();

      // Default auction info
      let auctionDetails;
      let auctionStatus = "Auction Not Started";
      let auctionInfo = {
        seller: "N/A",
        minBid: "N/A",
        highestBid: "N/A",
        highestBidder: "N/A",
        auctionEnded: false,
      };

      try {
        // Try fetching auction details (in case it exists)
        auctionDetails = await contract.methods.getAuctionDetails(i).call();

        // Check if the auction was started
        if (
          auctionDetails.seller !== "0x0000000000000000000000000000000000000000"
        ) {
          auctionInfo.seller = auctionDetails.seller;
          auctionInfo.minBid = web3.utils.fromWei(
            auctionDetails.minBid,
            "ether"
          );
          auctionInfo.highestBid =
            auctionDetails.highestBid > 0
              ? web3.utils.fromWei(auctionDetails.highestBid, "ether")
              : "No Bids yet";
          auctionInfo.highestBidder =
            auctionDetails.highestBidder !==
            "0x0000000000000000000000000000000000000000"
              ? auctionDetails.highestBidder
              : "0x0000000000000000000000000000000000000000";
          auctionInfo.auctionEnded = auctionDetails.ended;

          // Set auction status based on whether the auction has ended or not
          auctionStatus = auctionDetails.ended
            ? "Auction Completed"
            : "Auction Ongoing";
        }
      } catch (auctionError) {
        console.log(`No auction started for car ID ${i}`);
      }

      // Add each car's details as a row
      const row = `
        <tr>
            <td>${i}</td>
            <td>${carDetails[0]}</td>
            <td>${carDetails[1]}</td>
            <td>${carDetails[2]}</td>
            <td>${carDetails[3].slice(0, 5)}....${carDetails[3].slice(
        carDetails[3].length - 4
      )}</td>
            <td>${
              auctionInfo.seller !== "N/A"
                ? auctionInfo.seller.slice(0, 5) +
                  "...." +
                  auctionInfo.seller.slice(auctionInfo.seller.length - 4)
                : "N/A"
            }</td>
            <td>${
              auctionInfo.minBid !== "N/A" ? auctionInfo.minBid + " ETH" : "N/A"
            }</td>
            <td>${
              auctionInfo.highestBid !== "N/A" &&
              auctionInfo.highestBid !== "No Bids yet"
                ? auctionInfo.highestBid + " ETH"
                : auctionInfo.highestBid
            }</td>
            <td>${
              auctionInfo.highestBidder !== "N/A"
                ? auctionInfo.highestBidder.slice(0, 5) +
                  "...." +
                  auctionInfo.highestBidder.slice(
                    auctionInfo.highestBidder.length - 4
                  )
                : "N/A"
            }</td>
            <td>${auctionStatus}</td>
        </tr>
      `;

      tbody.insertAdjacentHTML("beforeend", row);
    } catch (error) {
      console.error(`Error fetching details for car ID ${i}:`, error);
      const row = `
        <tr>
            <td>${i}</td>
            <td colspan="9">Error fetching details for this car.</td>
        </tr>
      `;
      tbody.insertAdjacentHTML("beforeend", row);
    }
  }

  table.style.display = "table"; // Show the table with all car details
});
