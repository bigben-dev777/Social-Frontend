export interface User {
  _id: string
  username: string
  email: string
  password: string
}

export type LoginUserInfo = Omit<User, '_id' | 'username'>

export interface UserProfile extends User {
  followers: string[]
  following: string[]
}

export interface ResponseExploreUser extends UserProfile {
  isFollowing: boolean
}
