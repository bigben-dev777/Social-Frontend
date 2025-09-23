import { Comment } from '@/types/post';
import { stringAvatar } from '@/util';
import { Avatar, Stack, Typography } from '@mui/material';

function PostComment({ commentData }: { commentData: Comment }) {
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        padding: '1rem .5rem 1rem 0rem'
      }}
    >
      <Avatar {...stringAvatar(commentData.user.username)} sx={{ width: 32, height: 32 }} />
      <Stack
        sx={{
          paddingLeft: '1rem',
          width: '100%'
        }}
      >
        <Typography>{commentData.content}</Typography>
        <Typography textAlign='right' variant='caption'>
          {commentData.createdAt}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default PostComment;
