import * as FillingModel from "../models/filling";

const list = async (req: any, res: any) => {
  const result = await FillingModel.list(req.query);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const add = async (req: any, res: any) => {
  const result = await FillingModel.add(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const modify = async (req: any, res: any) => {
  const result = await FillingModel.modify(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const erase = async (req: any, res: any) => {
  const result = await FillingModel.erase(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

export { list, add, modify, erase };
