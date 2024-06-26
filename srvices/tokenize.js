// Import required Hedera SDK classes
const {
    Client,
    AccountId,
    PrivateKey,
    TokenCreateTransaction,
    TokenType,
    TokenSupplyType,
    Hbar
} = require("@hashgraph/sdk");

// Configure your Hedera testnet client
const operatorId = AccountId.fromString(process.env.OPERATOR_ID);
const operatorKey = PrivateKey.fromString(process.env.OPERATOR_KEY);
const client = Client.forTestnet().setOperator(operatorId, operatorKey);

// Function to create a new token
async function createToken(tokenName, tokenSymbol, initialSupply, treasuryAccountId, treasuryPrivateKey) {
    // Create the transaction
    const transaction = new TokenCreateTransaction()
        .setTokenName(tokenName)
        .setTokenSymbol(tokenSymbol)
        .setTokenType(TokenType.FungibleCommon)
        .setDecimals(0) // set to 0 for no decimals, modify as needed
        .setInitialSupply(initialSupply)
        .setTreasuryAccountId(treasuryAccountId)
        .setSupplyType(TokenSupplyType.Infinite)
        .setAdminKey(operatorKey.publicKey)
        .setFreezeKey(operatorKey.publicKey)
        .setWipeKey(operatorKey.publicKey)
        .setKycKey(operatorKey.publicKey)
        .setSupplyKey(operatorKey.publicKey)
        .setFreezeDefault(false)
        .setMaxTransactionFee(new Hbar(30)); // Set the max transaction fee

    // Sign with the treasury account private key
    const signTx = await transaction.freezeWith(client).sign(treasuryPrivateKey);

    // Sign with the operator key
    const signTxWithOperator = await signTx.sign(operatorKey);

    // Submit the transaction to a Hedera network
    const txResponse = await signTxWithOperator.execute(client);

    // Request the receipt of the transaction
    const receipt = await txResponse.getReceipt(client);

    // Get the token ID from the receipt
    const tokenId = receipt.tokenId;

    console.log(`Created new token with ID: ${tokenId}`);
    return tokenId;
}

// Main function to execute the token creation
async function main() {
    const tokenName = "GreenToken";
    const tokenSymbol = "GT";
    const initialSupply = 1000000;
    const treasuryAccountId = operatorId; // using the operator as the treasury for this example
    const treasuryPrivateKey = operatorKey; // using the operator key for simplicity

    const tokenId = await createToken(tokenName, tokenSymbol, initialSupply, treasuryAccountId, treasuryPrivateKey);
    console.log(`Token ID: ${tokenId}`);
}

// Execute the main function
main().catch(err => {
    console.error(err);
});
