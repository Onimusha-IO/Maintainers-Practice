import * as ExtraModel from "../models/extra";

const list = async (req: any, res: any) => {
  const result = await ExtraModel.list(req.query);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const add = async (req: any, res: any) => {
  const result = await ExtraModel.add(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const modify = async (req: any, res: any) => {
  const result = await ExtraModel.modify(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const erase = async (req: any, res: any) => {
  const result = await ExtraModel.erase(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

export { list, add, modify, erase };
