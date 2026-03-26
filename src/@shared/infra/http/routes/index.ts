import { Router } from "express";
import { CreateUserController } from "../../../../modules/users/infra/http/controllers/CreateUserController.js";

const routes = Router();
const createUserController = new CreateUserController();

routes.post("/users", (req, res) => createUserController.handle(req, res));

export { routes };
