import { Request, Response } from "express";
import { z } from "zod";
import { UpdateUserUseCase } from "../../../application/useCases/UpdateUser/UpdateUserUseCase.js";
import { Prisma } from "../../../../../../generated/prisma/browser.js";
import { PrismaUserRepository } from "../../database/prisma/PrismaUserRepository.js";

const updateUserSchema = z.object({
  name: z.string().min(3).optional(),
  email: z.email().optional(),
});

export class UpdateUserController {
  async handle(req: Request, resp: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { name, email } = updateUserSchema.parse(req.body);

      const userRepository = new PrismaUserRepository();
      const updateUserUseCase = new UpdateUserUseCase(userRepository);

      if (!id || typeof id !== "string") {
        return resp.status(400).json({ error: "Invalid user ID" });
      }

      await updateUserUseCase.execute({ id, name, email });

      return resp.status(200).json({ message: "User updated successfully!" });
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        return resp.status(400).json({ errors: err.flatten().fieldErrors });
      }
      return resp.status(400).json({
        error: err.message || "An error occurred while updating the user.",
      });
    }
  }
}
