import { client } from "_api";
import { IComment } from "components/interfaces";

export default class ProductServices {
  instance = null;

  static addComment(id: string, comment: IComment) {
    return client("/products", { id, comment }, "", { method: "PUT" });
  }
}
