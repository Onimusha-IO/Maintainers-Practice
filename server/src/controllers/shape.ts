import * as ShapeModel from "../models/shape";

const listShape = async (req: any, res: any) => {
  // console.log("list controller values: ", req);
  const result = await ShapeModel.listShape(req.query);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const createShape = async (req: any, res: any) => {
  const result = await ShapeModel.createShape(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const updataShape = async (req: any, res: any) => {
  const result = await ShapeModel.updataShape(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

const deleteShape = async (req: any, res: any) => {
  const result = await ShapeModel.deleteShape(req.body);

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

export { listShape, createShape, updataShape, deleteShape };
