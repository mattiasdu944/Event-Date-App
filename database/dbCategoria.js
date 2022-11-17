import { db } from "./db";

export const getAllCategories = async () => {
    const [categoria] = await db.query('SELECT descripcion from categoria');
    return categoria;
}