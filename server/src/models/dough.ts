import pool from "../utils/database";

const listDough = async (values: any) => {
  try {
    const res = await pool.query("select * from dough where enable = true");
    return { succes: true, data: res.rows, error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const createDough = async (values: any) => {
  const { name } = values;
  try {
    await pool.query("insert into dough(name) values($1)", [name]);
    return { succes: true, data: "Dough added", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const updateDough = async (values: any) => {
  const { id, name } = values;
  try {
    await pool.query("update dough set name = $1 where id = $2", [name, id]);
    return { succes: true, data: "Dough modified", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const deleteDough = async (values: any) => {
  const { id } = values;
  try {
    await pool.query("update dough set enable = false where id = $1", [id]);
    return { succes: true, data: "Dough erased", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

export { listDough, createDough, updateDough, deleteDough };
