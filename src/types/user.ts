export interface User {
  _id: string
  username: string
  email: string
  password: string
}

export interface UserProfile extends User {
  followers: string[]
  following: string[]
}

export interface ResponseExploreUser extends UserProfile {
  isFollowing: boolean
}
