export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
}

export type Auth = Pick<User, '_id' | 'username'>;

export type LoginUserInfo = Omit<User, '_id' | 'username'>;

export interface UserProfile extends User {
  followers: Auth[];
  following: Auth[];
}

export interface ResponseExploreUser extends UserProfile {
  isFollowing: boolean;
}
