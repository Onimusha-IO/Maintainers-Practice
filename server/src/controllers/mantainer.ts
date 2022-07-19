import * as MantainerModel from "../models/mantainer";

const list = async (req: any, res: any) => {
  // console.log("list controller values: ", req);
  const result = await MantainerModel.list(req.query);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const add = async (req: any, res: any) => {
  const result = await MantainerModel.add(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const modify = async (req: any, res: any) => {
  const result = await MantainerModel.modify(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const erase = async (req: any, res: any) => {
  const result = await MantainerModel.erase(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

export { list, add, modify, erase };
