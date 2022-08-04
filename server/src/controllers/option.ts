import * as OptionModel from "../models/option";

const listOption = async (req: any, res: any) => {
  const result = await OptionModel.listOption();
  if (result.succes) {
    res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

export { listOption };
