import * as CreamModel from "../models/cream";

const listCream = async (req: any, res: any) => {
  const result = await CreamModel.listCream(req.query);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const createCream = async (req: any, res: any) => {
  const result = await CreamModel.createCream(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const updateCream = async (req: any, res: any) => {
  const result = await CreamModel.updateCream(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const deleteCream = async (req: any, res: any) => {
  const result = await CreamModel.deleteCream(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

export { listCream, createCream, updateCream, deleteCream };
