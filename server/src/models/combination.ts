import pool from "../utils/database";

const listCombination = async () => {
  try {
    const res = await pool.query("select * from combination");
    return { succes: true, data: res.rows, error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

export { listCombination };
