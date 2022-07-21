import * as ShapeModel from "../models/shape";

const list = async (req: any, res: any) => {
  // console.log("list controller values: ", req);
  const result = await ShapeModel.list(req.query);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const add = async (req: any, res: any) => {
  const result = await ShapeModel.add(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const modify = async (req: any, res: any) => {
  const result = await ShapeModel.modify(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const erase = async (req: any, res: any) => {
  const result = await ShapeModel.erase(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

export { list, add, modify, erase };
