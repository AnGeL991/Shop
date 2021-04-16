import { client } from "_api";
import { IComment } from "components/interfaces";

export default class ProductServices {
  static addComment(id: string, comment: IComment) {
    return client("/products", { id, comment }, "", { method: "PUT" });
  }
}
