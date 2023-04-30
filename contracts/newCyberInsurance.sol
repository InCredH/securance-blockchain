// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract newCyberInsurance {
    
    address payable public companyAddress;//Company who deploys the contract and gets eth in this account of users premium
    address public CrimeDeptPerson; //Verifies the claims of the users

    address[] users; //Stores addresses of the users
    

    //Get all the user addresses
    function getUsers() public view returns(address[] memory) {
        return users;
    }

    struct Policy {
        uint64 claimAmountAllowed; //this is the amount user will select and will be updated over future claims 
        uint64 premium;//Self-explanatory
        bool isPolicyActive;//Self-explanatory
    }

    mapping (address => Policy) public mappingOfUserstoPolicy;//Self-explanatory

    struct Claim {
        uint64 claimAmount;
        string status;//FILED, ACCEPTED OR REJECTED 
    }


    //Address to array of claims and user can just call index-wise
    mapping(address => Claim[]) public claims;
    
    //When the contract is deployed company address and crimeDeptPerson addr will get set by this constructor
    constructor(address payable _companyAddress, address _CrimeDeptPerson) {
        companyAddress = _companyAddress;
        CrimeDeptPerson = _CrimeDeptPerson;
    }


    // Every month user will get notif to pay premium 
    //and when he clicks on payPremium this function will get called
    function payPremium() public payable {
        require(msg.sender.balance >= mappingOfUserstoPolicy[msg.sender].premium, "Balance is less than premium");
        require(msg.value == mappingOfUserstoPolicy[msg.sender].premium, "Incorrect premium amount");
        payable(companyAddress).transfer(msg.value);
    }


    //When user clicks on buy policy in frontend, this fucntion gets called, and it takes input claim amount needed
    //by the user and the premium he has to pay and the 1st month's premium gets deducted from his account
    function buyPolicy(uint64 _ClaimAmountWanted, uint64 _premium) public payable {
        users.push(msg.sender);
        mappingOfUserstoPolicy[msg.sender].claimAmountAllowed = _ClaimAmountWanted;
        mappingOfUserstoPolicy[msg.sender].premium = _premium;
        mappingOfUserstoPolicy[msg.sender].isPolicyActive = true;
        require(msg.sender.balance >= mappingOfUserstoPolicy[msg.sender].premium, "Balance is less than premium");
        require(msg.value == mappingOfUserstoPolicy[msg.sender].premium, "Incorrect premium amount");
        
        payable(companyAddress).transfer(msg.value);
    }


    //User will apply for claim and this function will get called
    function applyForClaim(uint64 _claimAmount) public {
        require(mappingOfUserstoPolicy[msg.sender].isPolicyActive == true, "Policy is not active");
        require(mappingOfUserstoPolicy[msg.sender].claimAmountAllowed >= _claimAmount, "Claim amount exceeds allowed limit");
        claims[msg.sender].push(Claim(_claimAmount, "FILED"));
    }


    //Get all claims of a user
    function getClaimsOfUser(address _user) public view returns (Claim[] memory) {
        return claims[_user];
    }

    //Trenasfer claim from company account to user account
    function transferClaim(address _user, uint64 _claimIndex) public payable {
        require(msg.sender == companyAddress, "Only company can transfer claim amount");
        require(keccak256(bytes(claims[_user][_claimIndex].status)) == keccak256(bytes("ACCEPTED")), "Your claim is rejected");
        payable(_user).transfer(msg.value);
    }


    //Verify the claim of the user, accept or reject, the crimedeptPerson will do this
    function verifyClaim(address _user, bool _verdict, uint64 _claimIndex) public payable{
        require(msg.sender == CrimeDeptPerson, "Only CrimeDeptPerson can verify claims");
        require(keccak256(bytes(claims[_user][_claimIndex].status)) == keccak256(bytes("FILED")), "Claim has already been processed");
        if(_verdict == true) {
            claims[_user][_claimIndex].status = "ACCEPTED";
            //company has to pay to that particular user
            uint64 amount = claims[_user][_claimIndex].claimAmount;
            mappingOfUserstoPolicy[_user].claimAmountAllowed -= amount; 
            if(mappingOfUserstoPolicy[_user].claimAmountAllowed == 0) mappingOfUserstoPolicy[_user].isPolicyActive = false;
            //transferClaim(_user);
        } else {
            claims[_user][_claimIndex].status = "REJECTED";
        }
    } 
}