import axiosClient from "./axiosClient"

interface IUser {
  id?: string,
  userName: string,
  email: string,
  password?: string
}

export async function createUser(user: IUser){
    try {
      const userCreate = await axiosClient.post('/user', user);
      return userCreate;
    } catch (error: any) {
      return {
        errorMessage: error.response ? `Error: ${error.response.data}` : 'An unknown error occur'
      }
    }
}

export async function login(username: string, password: string){
  try {
    const userCreate = await axiosClient.post('/user/login', {username,password });
    return userCreate;
  } catch (error: any) {
    return {
      errorMessage: error.response ? `Error: ${error.response.data}` : 'An unknown error occur'
    }
  }
}
