import { getBlockchainsCollection } from "../gateway/mongo.js";

export const createBlockchain = async (blockchain) => {
  const col = await getBlockchainsCollection();
  const { insertedId } = await col.insertOne(blockchain);
  // TODO: we should validate name is unique
  return insertedId;
};

export const getBlockchain = async (name) => {
  const col = await getBlockchainsCollection();
  const blockchain = await col.findOne({ name });
  // TODO: filter by deletedAt flag so we dont return the deleted blockchains
  return blockchain;
};

export const getBlockchains = async (name) => {
  const col = await getBlockchainsCollection();
  const blockchains = await col.find({}).toArray();
  // TODO: filter by deletedAt flag so we dont return the deleted blockchains
  //  use an if else statement ?
  return blockchains;
};

export const updateBlockchain = async (name, updateObject) => {
  const col = await getBlockchainsCollection();
  //  TODO: update should not allow the name field to be updated
  await col.updateOne({ name }, { $set: updateObject });
};

export const deleteBlockchain = async (name) => {
  await updateBlockchain(name, { deletedAt: new Date() });
};
