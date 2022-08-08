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
  console.log("create set: ", values);
  const { name, shape, dough, flavor, size, cream, filling, extra } = values;
  try {
    const res = await pool.query(
`      insert into set(
        name, shape_id, dough_id, flavor_id, 
        size_id, cream_id, filling_id, extra_id
        ) 
        values
        ($1, array[$2], array[$3], array[$4], array[$5], 
        array[$6], array[$7], array[$8]) 
        returning *`,
      [name, shape, dough, flavor, size, cream, filling, extra]
    );
    return { succes: true, data: res.rows[0], error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

export { listOptionSet, listSet, createSet };
