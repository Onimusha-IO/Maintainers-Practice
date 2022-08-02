import * as ExtraModel from "../models/extra";

const listExtra = async (req: any, res: any) => {
  const result = await ExtraModel.listExtra(req.query);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const createExtra = async (req: any, res: any) => {
  const result = await ExtraModel.createExtra(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const updateExtra = async (req: any, res: any) => {
  const result = await ExtraModel.updateExtra(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const deleteExtra = async (req: any, res: any) => {
  const result = await ExtraModel.deleteExtra(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

export { listExtra, createExtra, updateExtra, deleteExtra };
