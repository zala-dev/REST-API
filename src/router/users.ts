import express from "express";

import { isAuthenticated } from "../middleware";
import { getAllUsers } from "../controllers/users";

export default (router: express.Router) => {
  router.get("/users", isAuthenticated, getAllUsers);
};
