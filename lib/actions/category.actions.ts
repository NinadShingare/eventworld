"use server"

import { CreateCategoryParams } from "@/types"
import { handleError } from "../utils"
import { connect } from "http2"
import { connectToDatabase } from "../database"
import Category from "../database/models/category.model"

export const createCategory = async ({ categoryName } : CreateCategoryParams ) =>{
    try {
        await connectToDatabase();
        const newCategory = await Category.create({name: categoryName});

        const catObject= JSON.parse(JSON.stringify(newCategory));
        return catObject
    } catch (error) {
        handleError(error)
    }
}

export const getAllCategories = async () =>{
    try {
        await connectToDatabase();
        const categories = await Category.find();

        const catObject= JSON.parse(JSON.stringify(categories));
        return catObject
    } catch (error) {
        handleError(error)
    }
}