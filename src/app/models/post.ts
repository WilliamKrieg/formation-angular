import { User } from './user';

export class Post {
  public id: number = null;
  public title = '';
  public content = '';
  public user: User;

  constructor(object = {} = null) {
    if (object) {
      Object.assign(this, object);
    }
  }
}
