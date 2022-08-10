import * as CombinationModel from "../models/combination";

const listCombination = async (req: any, res: any) => {
  const result = await CombinationModel.listCombination();

  if (result.succes) {
    return res.status(200).json(result.data);
  } else {
    res.status(500).json({ error: result.error });
  }
};

export { listCombination };
