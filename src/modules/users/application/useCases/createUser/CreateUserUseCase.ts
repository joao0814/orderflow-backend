import bcrypt from "bcryptjs";
import { IUserRepository } from "../../../domain/repositories/IUserRepository.js";
import { User } from "../../../domain/entities/User.js";

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ name, email, password }: CreateUserRequest) {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const passwordHash = await bcrypt.hash(password, 8);
    const user = User.create({ name, email, password: passwordHash });

    await this.userRepository.create(user);

    return user;
  }
}
