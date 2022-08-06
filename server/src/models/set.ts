import pool from "../utils/database";

const listOptionSet = async () => {
  const tables = ["shape", "dough", "flavor", "size", "cream", "filling", "extra"];
  const option: string[][] = [];
  try {
    for await (const it of tables) {
      const res = await pool.query(`select * from ${it} where enable = true`);
      option.push(res.rows);
    }
    return { succes: true, data: option, error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const listSet = async () => {
  const set = [];
  const tables = [
    "shape_id",
    "dough_id",
    "flavor_id",
    "size_id",
    "cream_id",
    "filling_id",
    "extra_id",
  ];
  try {
    const res = await pool.query("select * from set where enable = true");
    return { succes: true, data: res.rows, error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const createSet = async (values: any) => {
  const { name, shape, dough, flavor, size, cream, filling, extra } = values;
  try {
    const res = await pool.query(
      "insert into set(name,  shape, dough, flavor,size, cream, filling, extra) values($1), ($2), ($3), ($4), ($5), ($6), ($7), ($8) returning *",
      [name, shape, dough, flavor, size, cream, filling, extra]
    );
    return { succes: true, data: res.rows[0], error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

export { listOptionSet, listSet, createSet };
