import { addPost } from '@/services';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

function CreatePost() {
  const [content, setContent] = useState('');

  const handleSubmitPost = async () => {
    try {
      await addPost(content);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          marginTop: '10vh',
          width: '100%',
          gap: '2rem'
        }}
      >
        <Typography variant='h3' color='secondary' textAlign='right' py='2rem'>
          write your mind...
        </Typography>
        <TextField
          multiline
          fullWidth
          variant='outlined'
          rows={10}
          placeholder='write here what you think...'
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Button
          variant='contained'
          onClick={() => {
            handleSubmitPost();
          }}
        >
          Post
        </Button>
      </Stack>
    </Container>
  );
}

export default CreatePost;
