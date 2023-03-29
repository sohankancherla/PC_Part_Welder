export class UsersModel {
  constructor(
  public uid: number,
  public username: string,
  public password: string,
  public email: string,
  public isAdmin: boolean
  ) {}
}
