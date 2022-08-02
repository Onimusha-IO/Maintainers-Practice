import * as FlavorModel from "../models/flavor";

const listFlavor = async (req: any, res: any) => {
  const result = await FlavorModel.listFlavor(req.query);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const createFlavor = async (req: any, res: any) => {
  const result = await FlavorModel.createFlavor(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const updateFlavor = async (req: any, res: any) => {
  const result = await FlavorModel.updateFlavor(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const deleteFlavor = async (req: any, res: any) => {
  const result = await FlavorModel.deleteFlavor(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

export { listFlavor, createFlavor, updateFlavor, deleteFlavor };
