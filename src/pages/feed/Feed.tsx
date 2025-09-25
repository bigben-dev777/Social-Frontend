import Article from '@/components/Article';
import { getFeed } from '@/services';
import { Post } from '@/types/post';
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';

function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [changed, setChanged] = useState(false);

  const loadPosts = async () => {
    try {
      const newPosts = await getFeed();
      setPosts(newPosts);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleChanged = () => {
    setChanged(!changed)
  }

  useEffect(() => {
    loadPosts();
  }, [changed]);

  return (
    <Container>
      {posts.map(post => (
        <Article postData={post} key={post._id} handleToggleChanged={toggleChanged}/>
      ))}
    </Container>
  );
}

export default Feed;
