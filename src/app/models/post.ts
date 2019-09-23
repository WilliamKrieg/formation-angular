import { User } from './user';

export class Post {
  private id: number = null;
  public title = '';
  public content = '';
  public user: User;

  constructor() {}
}
