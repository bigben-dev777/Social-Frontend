import { Auth } from './user';

export interface Comment {
  _id: string;
  user: Auth;
  content: string;
  createdAt: string;
}

export interface Post {
  _id: string;
  user: Auth;
  content: string;
  likes: string[];
  comments: Comment[];
  createdAt: string;
}

export type InitPost = Pick<Post, 'user' | 'content'>;
