import pool from "../utils/database";

const listFlavor = async (values: any) => {
  try {
    const res = await pool.query("select * from flavor where enable = true");
    return { succes: true, data: res.rows, error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const createFlavor = async (values: any) => {
  const { name } = values;
  try {
    await pool.query("insert into flavor(name) values($1)", [name]);
    return { succes: true, data: "Flavor added", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const updateFlavor = async (values: any) => {
  const { id, name } = values;
  try {
    await pool.query("update flavor set name = $1 where id = $2", [name, id]);
    return { succes: true, data: "Flavor modified", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const deleteFlavor = async (values: any) => {
  const { id } = values;
  try {
    await pool.query("update flavor set enable = false where id = $1", [id]);
    return { succes: true, data: "Flavor erased", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

export { listFlavor, createFlavor, updateFlavor, deleteFlavor };
