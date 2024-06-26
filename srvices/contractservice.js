const { Client, AccountId, PrivateKey, Hbar } = require("@hashgraph/sdk");

// Configure Hedera network
const operatorAccountId = AccountId.fromString("your_operator_account_id");
const operatorPrivateKey = PrivateKey.fromString("your_operator_private_key");
const client = Client.forTestnet(); // or Client.forMainnet() for mainnet
client.setOperator(operatorAccountId, operatorPrivateKey);

// Contract ID and ABI (replace with your deployed contract details)
const contractId = "your_contract_id";
const contractAbi = "your_contract_abi"; // ABI if available, otherwise adjust method calls manually

// Function to create a new campaign
async function createCampaign(goal, duration, requiresAssurance, tokenService) {
    const contractCall = await client.getContract({ contractId });
    const response = await contractCall.call(
        "createCampaign",
        [goal, duration, requiresAssurance, tokenService]
    );

    // Handle response as needed
    console.log("Create Campaign Response:", response);
}

// Function to contribute to a campaign
async function contributeToCampaign(campaignId, amount) {
    const contractCall = await client.getContract({ contractId });
    const response = await contractCall.call(
        "contribute",
        [campaignId],
        { hbarAmount: Hbar.fromTinybars(amount) }
    );

    // Handle response as needed
    console.log("Contribute Response:", response);
}

// Function to repay contributors after the campaign
async function repayCampaign(campaignId) {
    const contractCall = await client.getContract({ contractId });
    const response = await contractCall.call(
        "repay",
        [campaignId]
    );

    // Handle response as needed
    console.log("Repay Campaign Response:", response);
}

// Example usage
async function main() {
    try {
        await createCampaign(100, 3600 * 24 * 30, true, "0xTokenServiceAddress");
        await contributeToCampaign(1, 1000); // Amount in tinybars (1 hbar = 100000000 tinybars)
        await repayCampaign(1);
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
