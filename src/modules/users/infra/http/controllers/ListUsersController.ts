import { Request, Response } from "express";
import { PrismaUserRepository } from "../../database/prisma/PrismaUserRepository.js";
import { ListUsersUseCase } from "../../../application/useCases/listUsers/ListUsersUseCase.js";

export class ListUsersController {
  async handle(req: Request, resp: Response): Promise<Response> {
    const userRepository = new PrismaUserRepository();
    const listUsersUseCase = new ListUsersUseCase(userRepository);

    const users = await listUsersUseCase.execute();

    const usersDTO = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
    return resp.json(usersDTO);
  }
}
