import { IUserRepository } from "../../../domain/repositories/IUserRepository.js";

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string) {
    await this.userRepository.delete(id);
  }
}
