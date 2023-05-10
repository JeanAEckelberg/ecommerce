import {User} from "./user";

export interface Order {
  order_datetime: Date;
  products: number[];
  user: User;
}
