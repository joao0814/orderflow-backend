import { Router } from "express";
import { CreateUserController } from "../../../../modules/users/infra/http/controllers/CreateUserController.js";
import { ListUsersController } from "../../../../modules/users/infra/http/controllers/ListUsersController.js";

const routes = Router();
const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

routes.post("/users", (req, res) => createUserController.handle(req, res));
routes.get("/users", (req, res) => listUsersController.handle(req, res));

export { routes };
