const Ballot = artifacts.require("Ballot");

contract("Ballot", (accounts) => {
    it("The winner is", async () => {
        const ballotInstance = await Ballot.deployed();

        await ballotInstance.giveRightToVote(accounts[1], {from : accounts[0]});
        await ballotInstance.giveRightToVote(accounts[2], {from : accounts[0]});
        await ballotInstance.giveRightToVote(accounts[3], {from : accounts[0]});
        await ballotInstance.giveRightToVote(accounts[4], {from : accounts[0]});
        await ballotInstance.giveRightToVote(accounts[5], {from : accounts[0]});

        await ballotInstance.vote(0, {from : accounts[1]});
        await ballotInstance.vote(0, {from : accounts[2]});
        await ballotInstance.vote(1, {from : accounts[3]});

        await ballotInstance.delegate(accounts[3], {from : accounts[4]});
        await ballotInstance.delegate(accounts[3], {from : accounts[5]});

        const winner = await ballotInstance.winningProposal();
        const winnerNameStr = await ballotInstance.winnerName();
        console.log(web3.utils.hexToString(winnerNameStr))

        assert.equal(winner.valueOf(), 1, "~~~ error ~~~")
    })
})