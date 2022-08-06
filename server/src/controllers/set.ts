import * as SetModel from "../models/set";

const listOptionSet = async (req: any, res: any) => {
  const result = await SetModel.listOptionSet();
  if (result.succes) {
    res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const listSet = async (req: any, res: any) => {
  const result = await SetModel.listSet();
  if (result.succes) {
    res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const createSet = async (req: any, res: any) => {
  const result = await SetModel.createSet(req.body);
  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

export { listOptionSet, listSet, createSet };
