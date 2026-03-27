import { User } from "../entities/User.js";

export interface IUserRepository {
  create(user: User): Promise<void>;
  delete(id: string): Promise<void>;
  update(id: string, data: Partial<User>): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  findAll(): Promise<User[]>;
}
