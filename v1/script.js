/*
const { hash } = require("crypto");

const web3 = new web3(window.ethereum);
var account;
const CONTRACT_ADDR = "0xd2a5bC10698FD955D1Fe6cb468a17809A08fd005";
const CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "_candidateName",
				"type": "string[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_candidateId",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "candidateCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_candidateId",
				"type": "uint256"
			}
		],
		"name": "getVoteCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasVoted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDR)

document.addEventListener("DOMContentLoaded", function(){
    if(window.ethereum){
        ethereum.request({method:"eth_requestAccounts"}).then((accounts) =>{
            account = accounts[0];
            console.log(account);
            
            
        })
    }
    else{
        console.log("plz install Metamask......");
        
    }
    

    contract.methods.candidateCount().call().then((e) => {
        for(var i=1;i <= e; i++){
            contract.methods.candidates(i).call().then((f) => {
                console.log(f);
                
            document.getElementById(f.id).innerHTML = f.name;
            document.getElementById("candidate"+f.id).innerHTML = f.voteCount;
            })
        }
    })


})

function vote(){
    var candidateId = document.getElementById("candidate").value;

    const transaction = {
        from:account,
        to:CONTRACT_ADDR,
        data:contract.methods.vote(candidateId).encodeABI(),
        gas:320000
    }

    web3.eth.sendTransaction(transaction).on("transactionHash", function() {
        console.log("Transaction Hash",hash);
        
    }).on("error", function(error){
        console.log(error);
        
    })
}
*/



const CONTRACT_ADDRESS = "0xb27A31f1b0AF2946B7F582768f03239b1eC07c2c";
const CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "string[]",
				"name": "_candidateName",
				"type": "string[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_candidateId",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "candidateCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_candidateId",
				"type": "uint256"
			}
		],
		"name": "getVoteCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasVoted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let web3;
let contract;
let account;

document.addEventListener("DOMContentLoaded", async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        account = (await web3.eth.getAccounts())[0];
        contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

        loadCandidates();
    } else {
        alert("Please install MetaMask!");
    }
});

async function loadCandidates() {
    const candidateCount = await contract.methods.candidateCount().call();
    const tableBody = document.getElementById("candidateTable");

    tableBody.innerHTML = ""; // Clear table before loading
    for (let i = 1; i <= candidateCount; i++) {
        const candidate = await contract.methods.candidates(i).call();
        const row = `<tr>
            <td>${candidate.id}</td>
            <td>${candidate.name}</td>
            <td>${candidate.voteCount}</td>
        </tr>`;
        tableBody.innerHTML += row;
    }
    displayWinner();
}

async function vote() {
    const candidateId = document.getElementById("candidateId").value;
    if (!candidateId) {
        alert("Please enter a candidate ID.");
        return;
    }

    try {
        await contract.methods.vote(candidateId).send({ from: account });
        document.getElementById("status").innerText = `Voted successfully for candidate ID ${candidateId}`;
        loadCandidates(); // Reload updated vote counts
    } catch (error) {
        document.getElementById("status").innerText = `Error: ${error.message}`;
    }
}

async function displayWinner() {
    const candidateCount = await contract.methods.candidateCount().call();
    let winner = { id: null, name: "", voteCount: 0 };

    for (let i = 1; i <= candidateCount; i++) {
        const candidate = await contract.methods.candidates(i).call();
        if (parseInt(candidate.voteCount) > winner.voteCount) {
            winner = candidate;
        }
    }

    const winnerMessage = winner.id
        ? `Current Winner: ${winner.name} (ID: ${winner.id}, Votes: ${winner.voteCount})`
        : "No votes yet.";
    document.getElementById("winner").innerText = winnerMessage;
}
