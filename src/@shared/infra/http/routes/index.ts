import { Router } from "express";
import { CreateUserController } from "../../../../modules/users/infra/http/controllers/CreateUserController.js";
import { ListUsersController } from "../../../../modules/users/infra/http/controllers/ListUsersController.js";
import { DeleteUserController } from "../../../../modules/users/infra/http/controllers/DeleteUserController.js";
import { UpdateUserController } from "../../../../modules/users/infra/http/controllers/UpdateUserController.js";

const routes = Router();
const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();

routes.post("/users", (req, res) => createUserController.handle(req, res));
routes.get("/users", (req, res) => listUsersController.handle(req, res));
routes.delete("/users/:id", async (req, res) =>
  deleteUserController.handle(req, res),
);
routes.put("/users/:id", async (req, res) =>
  updateUserController.handle(req, res),
);

export { routes };
