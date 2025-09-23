import { User } from './user'

export interface AuthState {
  isLoggedIn: boolean
  user: Pick<User, 'username' | 'email' | '_id'> | null
  token: string | null
}
