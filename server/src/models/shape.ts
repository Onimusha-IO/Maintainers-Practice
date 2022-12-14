import pool from "../utils/database";

const listShape = async (values: any) => {
  try {
    const res = await pool.query("select * from shape where enable = true");
    return { succes: true, data: res.rows, error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const createShape = async (values: any) => {
  const { name } = values;
  try {
    await pool.query("insert into shape(name) values($1)", [name]);
    return { succes: true, data: "Shape added", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const updataShape = async (values: any) => {
  const { id, name } = values;
  try {
    await pool.query("update shape set name = $1 where id = $2 ", [name, id]);
    return { succes: true, data: "Shape modified", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const deleteShape = async (values: any) => {
  const { id } = values;
  try {
    await pool.query("update shape set enable = false where id = $1", [id]);
    return { succes: true, data: "Shape erased", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

export { listShape, createShape, updataShape, deleteShape };
