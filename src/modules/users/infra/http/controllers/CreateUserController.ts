import { Request, Response } from "express";
import { z } from "zod";
import { CreateUserUseCase } from "../../../application/useCases/createUser/CreateUserUseCase.js";
import { PrismaUserRepository } from "../../database/prisma/PrismaUserRepository.js";

const createUserSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.email("Formato de e-mail inválido"),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
});

export class CreateUserController {
  async handle(req: Request, resp: Response): Promise<Response> {
    try {
      const { name, email, password } = createUserSchema.parse(req.body);

      const userRepository = new PrismaUserRepository();
      const createUserUseCase = new CreateUserUseCase(userRepository);

      const user = await createUserUseCase.execute({ name, email, password });

      return resp
        .status(201)
        .json({ id: user.id, name: user.name, email: user.email });
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        return resp.status(400).json({
          message: "Erro de validação",
          errors: err.flatten().fieldErrors,
        });
      }

      return resp.status(400).json({ error: err.message });
    }
  }
}
