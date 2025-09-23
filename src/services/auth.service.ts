import axios from 'axios'
import { BASE_URL } from '@/configs'
import { UserProfile, User } from '@/types'
import { setTokenAtLocal } from '@/util'

const authApi = axios.create({ baseURL: `${BASE_URL}/user` })

export const signUp = async (userData: User): Promise<UserProfile> => {
  try {
    const response = await authApi.post('/register', userData)
    console.log(`✔ Success to Sign Up ${userData}`)

    return response.data
  } catch (error) {
    throw new Error(`🚨 Failed to Sign Up. The reason is ${error}`)
  }
}

export const logIn = async (userData: User): Promise<void> => {
  try {
    const response = await authApi.post('/login', userData);
    setTokenAtLocal(response.data.token);
  } catch (error) {
    throw new Error(`🚨 Failed to Log in. Reason: ${error}`)
  }
}