import { createBlockchain } from "../src/services/blockchain.service";

describe("Blockchain Test Suite", () => {
  it("Creates a Blockchain", async () => {
    await createBlockchain({
      name: "Solana",
      language: "Ruse",
      marketCap: 1,
      supportsSmartContracts: true,
    });
  });
});
