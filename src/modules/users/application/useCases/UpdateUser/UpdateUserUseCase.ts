import { User } from "../../../domain/entities/User.js";
import { IUserRepository } from "../../../domain/repositories/IUserRepository.js";

export interface UpdateUserRequest {
  id: string;
  name?: string | undefined;
  email?: string | undefined;
}

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ id, name, email }: UpdateUserRequest) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    if (email && email !== user.email) {
      const emailInUse = await this.userRepository.findByEmail(email);
      if (emailInUse) {
        throw new Error("Email already in use in another user!");
      }
    }

    const dataToUpdate: { name?: string; email?: string } = {};

    if (name !== undefined) dataToUpdate.name = name;
    if (email !== undefined) dataToUpdate.email = email;

    if (Object.keys(dataToUpdate).length === 0) {
      throw new Error("At least one field (name or email) must be provided");
    }

    await this.userRepository.update(id, dataToUpdate);
  }
}
