import pool from "../utils/database";

const listOption = async () => {
  const tables = ["shape", "dough", "flavor", "size", "cream", "filling", "extra"];
  const option: string[][] = [];
  try {
    for await (const it of tables) {
      if (it === "size") {
        const res = await pool.query(
          `select quantity from ${it} where enable = true`
        );
        option.push(res.rows);
      } else {
        const res = await pool.query(`select name from ${it} where enable = true`);
        option.push(res.rows);
      }
    }
    return { succes: true, data: option, error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

export { listOption };
