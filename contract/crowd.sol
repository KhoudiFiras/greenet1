// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GreenCrowdfunding {
    struct Campaign {
        address payable creator;
        uint goal;
        uint deadline;
        uint amountRaised;
        bool isActive;
        bool requiresAssurance;
        address tokenService;
        mapping(address => uint) contributions;
        mapping(address => uint) shares;
        address[] contributors;
    }

    uint public campaignCount;
    mapping(uint => Campaign) public campaigns;

    event CampaignCreated(uint campaignId, address creator, uint goal, uint deadline, bool requiresAssurance);
    event ContributionReceived(uint campaignId, address contributor, uint amount);
    event CampaignFunded(uint campaignId, uint amountRaised);
    event Repayment(uint campaignId, uint amount);
    event Tokenized(uint campaignId, uint totalTokens);

    function createCampaign(uint _goal, uint _duration, bool _requiresAssurance, address _tokenService) external {
        campaignCount++;
        Campaign storage newCampaign = campaigns[campaignCount];
        newCampaign.creator = payable(msg.sender);
        newCampaign.goal = _goal;
        newCampaign.deadline = block.timestamp + _duration;
        newCampaign.amountRaised = 0;
        newCampaign.isActive = true;
        newCampaign.requiresAssurance = _requiresAssurance;
        newCampaign.tokenService = _tokenService;

        emit CampaignCreated(campaignCount, msg.sender, _goal, newCampaign.deadline, _requiresAssurance);
    }

    function contribute(uint _campaignId) external payable {
        Campaign storage campaign = campaigns[_campaignId];
        require(campaign.isActive, "Campaign is not active");
        require(block.timestamp < campaign.deadline, "Campaign has ended");
        require(msg.value > 0, "Contribution must be greater than zero");

        if (campaign.contributions[msg.sender] == 0) {
            campaign.contributors.push(msg.sender);
        }
        campaign.amountRaised += msg.value;
        campaign.contributions[msg.sender] += msg.value;

        emit ContributionReceived(_campaignId, msg.sender, msg.value);

        if (campaign.amountRaised >= campaign.goal) {
            campaign.isActive = false;
            emit CampaignFunded(_campaignId, campaign.amountRaised);
        }
    }

    function repay(uint _campaignId) external {
        Campaign storage campaign = campaigns[_campaignId];
        require(!campaign.isActive, "Campaign is still active");
        require(campaign.creator == msg.sender, "Only creator can repay");
        require(block.timestamp > campaign.deadline, "Deadline has not been exceeded");

        uint totalTokens = campaign.amountRaised;
        emit Tokenized(_campaignId, totalTokens);

        for (uint i = 0; i < campaign.contributors.length; i++) {
            address contributor = campaign.contributors[i];
            uint contributionAmount = campaign.contributions[contributor];
            uint shares = contributionAmount * totalTokens / campaign.amountRaised;
            campaign.shares[contributor] = shares;
        }

        for (uint i = 0; i < campaign.contributors.length; i++) {
            address shareholder = campaign.contributors[i];
            uint sharesOwned = campaign.shares[shareholder];
            uint shareRepayment = sharesOwned * campaign.amountRaised / totalTokens;
            payable(shareholder).transfer(shareRepayment);
        }

        emit Repayment(_campaignId, campaign.amountRaised);
    }

    // Function to retrieve campaign details
    function getCampaign(uint _campaignId) external view returns (
        address payable creator,
        uint goal,
        uint deadline,
        uint amountRaised,
        bool isActive,
        bool requiresAssurance,
        address tokenService
    ) {
        Campaign memory campaign = campaigns[_campaignId];
        return (
            campaign.creator,
            campaign.goal,
            campaign.deadline,
            campaign.amountRaised,
            campaign.isActive,
            campaign.requiresAssurance,
            campaign.tokenService
        );
    }
}
