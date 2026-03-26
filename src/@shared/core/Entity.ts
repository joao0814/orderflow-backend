import { UniqueEntityID } from "./UniqueEntityID.js";

export abstract class Entity<Props> {
  protected readonly _id: UniqueEntityID;
  protected props: Props;

  constructor(props: Props, id?: UniqueEntityID) {
    this.props = props;
    this._id = id ?? new UniqueEntityID();
  }

  get id() {
    return this._id;
  }
}
