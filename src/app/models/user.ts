export class User {
  private id: number = null;
  public email = '';
  public username = '';
  private password: {firstPass, secondPass} = null;

  constructor() {}

  public newPassword(pass1: string, pass2: string) {
    this.password = {
      firstPass : pass1,
      secondPass : pass2
    };
  }
}
