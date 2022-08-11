import pool from "../utils/database";

const listCombination = async () => {
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
    let combinations: any = [];
    const res = await pool.query("select * from combination");
    for await (const row of res.rows) {
      console.log("row: ", row);
      const set: any = {};
      for await (const tabs of tables) {
        console.log("table: ", tabs);
        if (tabs.replace("_id", "") === "size") {
          console.log("selecting quantity...");
          const name = await pool.query(
            `select quantity from ${tabs.replace("_id", "")} where id = '${
              row[tabs]
            }'`
          );
          set[tabs] = name.rows[0];
          combinations.push(set);
        } else {
          console.log("selecting name...");
          const name = await pool.query(
            `select name from ${tabs.replace("_id", "")} where id = '${row[tabs]}'`
          );
          set[tabs] = name.rows[0];
          combinations.push(set);
        }
      }
    }
    combinations = [...new Set(combinations)];
    console.log("combinations: ", combinations);
    return { succes: true, data: combinations, error: null };
  } catch (error) {
    console.log(error);
    return { succes: false, data: null, error: (error as Error).message };
  }
};

export { listCombination };
