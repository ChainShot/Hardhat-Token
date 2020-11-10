const { assert } = require("chai");

describe("WOOFToken", function() {
  let token;
  let club;
  let deployer;
  let supply = "1000";
  beforeEach(async () => {
    deployer = ethers.provider.getSigner(0);

    const WOOFToken = await ethers.getContractFactory("WOOFToken");
    token = await WOOFToken.deploy(ethers.utils.parseEther(supply));
    await token.deployed();

    const Club = await ethers.getContractFactory("Club");
    club = await Club.deploy();
    await club.deployed();
  });

  it("should give the initial balance to the deployer", async function() {
    assert(await token.balanceOf(deployer.getAddress()), supply);
  });

  describe('the deployer sends some tokens', () => {
    let recipient;
    beforeEach(async () => {
      recipient = ethers.provider.getSigner(1);
      token.transfer(recipient.getAddress(), "10");
    });

    it('should update the recipients balance', async () => {
      assert(await token.balanceOf(recipient.getAddress()), "10");
    });

    it('should update the deployers balance', async () => {
      assert(await token.balanceOf(deployer.getAddress()), "990");
    });
  });

  describe('joining without approving', () => {
    it('should not allow it', async () => {
      let ex;
      try {
        await club.join(token.address);
      }
      catch(_ex) {
        ex = _ex;
      }
      assert(ex);
    });
  });

  describe('joining after approving', () => {
    it('should allow it', async () => {
      await token.approve(club.address, ethers.utils.parseEther("10"));
      await club.join(token.address);
      assert(await club.isMember(deployer.getAddress()));
    });
  });
});
