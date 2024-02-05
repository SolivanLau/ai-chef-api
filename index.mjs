import express from "express";
import { corsInit } from "./middleware/index.mjs";
import { recipeRouter } from "./route/index.mjs";
const app = express();

// Middleware
app.use(corsInit);
app.use(express.json());

// Routes
app.use("/api/v1/recipe", recipeRouter);

// App init
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}/ `);
});
