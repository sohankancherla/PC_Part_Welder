import { ComputerModel } from "./model/computer.model";
import { UsersModel } from "./model/users.model";

export class GlobalConstants {
  public static user: UsersModel = new UsersModel(-1, "", "", "", false);
  public static computer: ComputerModel = new ComputerModel(-1, -1);
}
