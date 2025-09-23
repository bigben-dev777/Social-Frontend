import axios from 'axios'
import { BASE_URL } from '@/configs'
import { UserProfile, User } from '@/types'
import { getAuthorizedTokenHeader } from '@/util'

const userApi = axios.create({ baseURL: `${BASE_URL}/user` })

export const getExploreUsers = async (): Promise<User[]> => {
  try {
    const response = await userApi.get('/explore', { headers: getAuthorizedTokenHeader() })

    return response.data
  } catch (error) {
    throw new Error(`Failed to fetch explore users. ${error}`)
  }
}

export const getUserById = async (userId: string): Promise<User> => {
  try {
    const response = await userApi.get(`/${userId}`, { headers: getAuthorizedTokenHeader() })

    return response.data
  } catch (error) {
    throw new Error(`Failed to fetch user information for ID: ${userId} . ${error}`)
  }
}

export const getUserProfile = async (): Promise<UserProfile> => {
  try {
    const response = await userApi.get('/profile', { headers: getAuthorizedTokenHeader() })

    return response.data
  } catch (error) {
    throw new Error(`Failed to fetch user profile. ${error}`)
  }
}
