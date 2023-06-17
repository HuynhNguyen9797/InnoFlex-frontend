interface IPost {
  id: string,
  title: string,
  authorId: string,
  content: string
}

export function getPost(offset: number, limit: number){
  return 'posts'
}

export function editPost(id: string, title: string, content: string){
  return 'edited'
}

export function deletePost(id: string) {
  return 'deleted'
}