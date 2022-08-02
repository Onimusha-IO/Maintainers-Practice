import * as DoughModel from "../models/dough";

const listDough = async (req: any, res: any) => {
  // console.log("listDough controller values: ", req);
  const result = await DoughModel.listDough(req.query);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const createDough = async (req: any, res: any) => {
  const result = await DoughModel.createDough(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const updateDough = async (req: any, res: any) => {
  const result = await DoughModel.updateDough(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const deleteDough = async (req: any, res: any) => {
  const result = await DoughModel.deleteDough(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

export { listDough, createDough, updateDough, deleteDough };
