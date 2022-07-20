import pool from "../utils/database";

const list = async (values: any) => {
  const { table } = values;
  console.log("list model values: ", values);
  try {
    const res = await pool.query(`select * from ${table}`);
    return { succes: true, data: res.rows, error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const add = async (values: any) => {
  console.log("add values: ", values);
  const { name, table } = values;
  try {
    const res = await pool.query(`insert into ${table}(name) values($1)`, [name]);
    return { succes: true, data: "Dough added", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const modify = async (values: any) => {
  console.log("modify values: ", values);
  const { id, name, table } = values;
  try {
    const res = await pool.query(`update ${table} set name = $1 where id = $2 `, [name, id]);
    return { succes: true, data: "Dough modified", error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

const erase = async (values: any) => {
  console.log("erase values: ", values);
  const { id, table } = values;
  try {
    const res = await pool.query(`update ${table} set enable = false where id = $1`, [id]);
    return { succes: true, data: `${table} erased`, error: null };
  } catch (error) {
    return { succes: false, data: null, error: (error as Error).message };
  }
};

export { list, add, modify, erase };
