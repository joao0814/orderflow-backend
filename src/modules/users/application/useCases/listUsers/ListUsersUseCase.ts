import { IUserRepository } from "../../../domain/repositories/IUserRepository.js";

export class ListUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute() {
    const users = await this.userRepository.findAll();

    return users;
  }
}
