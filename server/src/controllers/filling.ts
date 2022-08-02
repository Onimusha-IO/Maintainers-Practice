import * as FillingModel from "../models/filling";

const listFilling = async (req: any, res: any) => {
  const result = await FillingModel.listFilling(req.query);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const createFilling = async (req: any, res: any) => {
  const result = await FillingModel.createFilling(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const updateFilling = async (req: any, res: any) => {
  const result = await FillingModel.updateFilling(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const deleteFilling = async (req: any, res: any) => {
  const result = await FillingModel.deleteFilling(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

export { listFilling, createFilling, updateFilling, deleteFilling };
