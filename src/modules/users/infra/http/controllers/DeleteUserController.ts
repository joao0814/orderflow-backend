import { Request, Response } from "express";
import { DeleteUserUseCase } from "../../../application/useCases/DeleteUSer/DeleteUserUseCase.js";
import { PrismaUserRepository } from "../../database/prisma/PrismaUserRepository.js";

export class DeleteUserController {
  async handle(req: Request, resp: Response): Promise<Response> {
    const { id } = req.params;

    if (!id || typeof id !== "string") {
      return resp.status(400).json({ error: "Invalid user ID" });
    }

    const userRepository = new PrismaUserRepository();
    const deleteUserUseCase = new DeleteUserUseCase(userRepository);

    await deleteUserUseCase.execute(id);

    return resp.status(204).send();
  }
}
