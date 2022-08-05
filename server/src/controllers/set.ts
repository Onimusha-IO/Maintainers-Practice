import * as SetModel from "../models/set";

const listOptionSet = async (req: any, res: any) => {
  const result = await SetModel.listOptionSet();
  if (result.succes) {
    res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

export { listOptionSet };
