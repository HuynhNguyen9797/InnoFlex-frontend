import axiosClient from "./axiosClient"

export interface IPost {
  id: string,
  title: string,
  authorId: string,
  content: string,
  authorUserName: string,
  createAt: string
}

export async function getPost(offset: number, limit: number){
  try {
    const result = await axiosClient.get(`/post?offset=${offset}&limit=${limit}`);
    return result
  } catch (error: any) {
    return {
      errorMessage: error.response ? `Error: ${error.response.data}` : 'An unknown error occur'
    }
  }
}

export async function createPost(authorId: string | undefined, authorName: string | undefined, title: string, content: string ){
  try {
    const result = await axiosClient.post('/post', {authorId, authorName, title, content});
    return result
  } catch (error: any) {
    return {
      errorMessage: error.response ? `Error: ${error.response.data}` : 'An unknown error occur'
    }
  }
}

export async function editPost(id: string, title: string, content: string){
  try {
    const result = await axiosClient.patch(`post/${id}`, {title, content});
    return result;
  } catch (error: any) {
    return {
      errorMessage: error.response ? `Error: ${error.response.data}` : 'An unknown error occur'
    }
  }
}

export async function deletePost(id: string) {
  try {
    const result = await axiosClient.delete(`post/${id}`);
    return result;
  } catch (error: any) {
    return {
      errorMessage: error.response ? `Error: ${error.response.data}` : 'An unknown error occur'
    }
  }
}