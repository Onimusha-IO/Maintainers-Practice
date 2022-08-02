import pool from "../utils/database";

const listExtra = async (values: any) => {
  try {
    const res = await pool.query("select * from extra where enable = true");
    return { succes: true, data: res.rows, error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const createExtra = async (values: any) => {
  const { name } = values;
  try {
    await pool.query("insert into extra(name) values($1)", [name]);
    return { succes: true, data: "Extra added", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const updateExtra = async (values: any) => {
  const { id, name } = values;
  try {
    await pool.query("update extra set name = $1 where id = $2", [name, id]);
    return { succes: true, data: "Extra modified", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const deleteExtra = async (values: any) => {
  const { id } = values;
  try {
    await pool.query("update extra set enable = false where id = $1", [id]);
    return { succes: true, data: "Extra erased", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

export { listExtra, createExtra, updateExtra, deleteExtra };
