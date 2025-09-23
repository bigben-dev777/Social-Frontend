import Article from '@/components/Article';
import { getFeed } from '@/services';
import { Post } from '@/types/post';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';

function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);

  const loadPosts = async () => {
    try {
      const newPosts = await getFeed();
      setPosts(newPosts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <Stack>
      {posts.map(post => (
        <Article postData={post} key={post._id} />
      ))}
    </Stack>
  );
}

export default Feed;
