import { Router } from "express";
import {
  createBlockchain,
  getBlockchain,
  getBlockchains,
  updateBlockchain,
  deleteBlockchain,
} from "../services/blockchain.service.js";
export const blockchainRouter = Router();

blockchainRouter.post("/blockchain", async (req, res) => {
  const blockchain = req.body;
  const id = await createBlockchain(blockchain);
  res.send(id.toString());
});

blockchainRouter.get("/blockchain/:name", async (req, res) => {
  const name = req.params.name;
  const blockchain = await getBlockchain(name);
  res.send(blockchain);
});

blockchainRouter.get("/blockchain", async (req, res) => {
  const blockchains = await getBlockchains();
  res.send(blockchains);
});

blockchainRouter.patch("/blockchain/:name", async (req, res) => {
  const blockchain = req.body;
  const name = req.params.name;
  const updated = await updateBlockchain(name, blockchain);
  res.send(updated);
});

blockchainRouter.delete("/blockchain/:name", async (req, res) => {
  const blockchain = req.body;
  const name = req.params.name;
  const deletedBlockchain = await deleteBlockchain(name, blockchain);
  res.send(deletedBlockchain);
});
