import pool from "../utils/database";

const listCream = async (values: any) => {
  try {
    const res = await pool.query("select * from cream where enable = true");
    return { succes: true, data: res.rows, error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const createCream = async (values: any) => {
  const { name } = values;
  try {
    await pool.query("insert into cream(name) values($1)", [name]);
    return { succes: true, data: "Cream added", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const updateCream = async (values: any) => {
  const { id, name } = values;
  try {
    await pool.query("update cream set name = $1 where id = $2", [name, id]);
    return { succes: true, data: "Cream modified", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const deleteCream = async (values: any) => {
  const { id } = values;
  try {
    await pool.query("update cream set enable = false where id = $1", [id]);
    return { succes: true, data: "Cream erased", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

export { listCream, createCream, updateCream, deleteCream };
