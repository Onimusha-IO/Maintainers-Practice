import pool from "../utils/database";

const listSize = async (values: any) => {
  try {
    const res = await pool.query("select * from size where enable = true");
    return { succes: true, data: res.rows, error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const createSize = async (values: any) => {
  const { quantity, number } = values;
  try {
    await pool.query("insert into size(number, quantity) values($1, $2)", [
      number,
      quantity,
    ]);
    return { succes: true, data: "Size added", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const updateSize = async (values: any) => {
  const { id, quantity, number } = values;
  try {
    await pool.query("update size set quantity = $1 number = $2 where id = $3", [
      quantity,
      number,
      id,
    ]);
    return { succes: true, data: "Size modified", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const deleteSize = async (values: any) => {
  const { id } = values;
  try {
    await pool.query("update size set enable = false where id = $1", [id]);
    return { succes: true, data: "Size erased", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

export { listSize, createSize, updateSize, deleteSize };
