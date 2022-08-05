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

// TODO: createOptionSet = async ()=>{};

export { listOptionSet };
