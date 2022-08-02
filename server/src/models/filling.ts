import pool from "../utils/database";

const listFilling = async (values: any) => {
  try {
    const res = await pool.query("select * from filling where enable = true");
    return { succes: true, data: res.rows, error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const createFilling = async (values: any) => {
  const { name } = values;
  try {
    await pool.query("insert into filling(name) values($1)", [name]);
    return { succes: true, data: "Filling added", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const updateFilling = async (values: any) => {
  const { id, name } = values;
  try {
    await pool.query("update filling set name = $1 where id = $2", [name, id]);
    return { succes: true, data: "Filling modified", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const deleteFilling = async (values: any) => {
  const { id } = values;
  try {
    await pool.query("update filling set enable = false where id = $1", [id]);
    return { succes: true, data: "Filling erased", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

export { listFilling, createFilling, updateFilling, deleteFilling };
