import CreatePost from '@/pages/createPost/CreatePost';
import Feed from '@/pages/feed/Feed';

const PostRoutes = [
  {
    path: '/feed',
    element: <Feed />
  },
  {
    path: '/createPost',
    element: <CreatePost />
  }
];

export default PostRoutes;
