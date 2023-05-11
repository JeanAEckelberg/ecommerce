import {User} from "./user";
import {Product} from "./product";

export interface Order {
  order_datetime: string;
  products: Product[];
  user: User;
}
