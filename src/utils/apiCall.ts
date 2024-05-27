export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
}
export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();
  return posts;
};
export const fetchSinglePost = async (
  postId: string | string[]
): Promise<Post> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post: Post = await response.json();
  return post;
};

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  return users;
};
export const fetchSingleUser = async (userId: number): Promise<User> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user: User = await response.json();
  return user;
};
export const fetchComments = async (): Promise<Comment[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments: Comment[] = await response.json();
  return comments;
};
