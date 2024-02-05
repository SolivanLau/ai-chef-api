import express from "express";
import { generateRecipe } from "../controller/index.mjs";
const recipeRouter = express.Router();

recipeRouter.route("/").get(generateRecipe);

export default recipeRouter;
