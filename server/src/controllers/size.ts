import * as SizeModel from "../models/size";

const listSize = async (req: any, res: any) => {
  const result = await SizeModel.listSize(req.query);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const createSize = async (req: any, res: any) => {
  const result = await SizeModel.createSize(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const updateSize = async (req: any, res: any) => {
  const result = await SizeModel.updateSize(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const deleteSize = async (req: any, res: any) => {
  const result = await SizeModel.deleteSize(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

export { listSize, createSize, updateSize, deleteSize };
