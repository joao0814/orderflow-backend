import { prisma } from "../../../../../@shared/infra/database/prisma.js";
import { User } from "../../../domain/entities/User.js";
import { IUserRepository } from "../../../domain/repositories/IUserRepository.js";

export class PrismaUserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) return null;

    return User.create(
      {
        name: user.name,
        email: user.email,
        password: user.password,
      },
      user.id,
    );
  }

  async create(user: User): Promise<void> {
    await prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) return null;

    return User.create(
      {
        name: user.name,
        email: user.email,
        password: user.password,
      },
      user.id,
    );
  }
}
