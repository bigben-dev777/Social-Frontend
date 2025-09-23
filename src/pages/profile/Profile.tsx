import { useEffect, useState } from 'react';
import { Avatar, Box, Container, Divider, Stack, Typography } from '@mui/material';

import { stringAvatar } from '@/util';
import { Post, UserProfile } from '@/types';
import { getUserPosts, getUserProfile } from '@/services';

function Profile() {
  const [profileData, setProfileData] = useState<UserProfile | undefined>(undefined);
  const [posts, setPosts] = useState<Post[]>([]);

  const loadProfile = async () => {
    try {
      const newProfileData = await getUserProfile();
      setProfileData(newProfileData);
    } catch (error) {
      console.error(error);
    }
  };

  const loadUserPost = async () => {
    try {
      const newPosts = await getUserPosts();
      setPosts(newPosts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProfile();
    loadUserPost();
  }, []);

  if (profileData === undefined) {
    return <>Non</>;
  } else {
    return (
      <Box>
        <Container>
          <Stack direction='row'>
            <Stack flex={1} sx={{}}>
              <Avatar
                {...stringAvatar('name')}
                sx={{
                  width: '300px',
                  height: '300px',
                  marginBlock: '2rem'
                }}
              />
              <Typography variant='h4'>{profileData.username}</Typography>
              <Typography variant='body1' color='secondary'>
                {profileData.email}
              </Typography>
            </Stack>
            <Stack flex={2}>
              <Stack>
                <Typography>Followings</Typography>
                <Divider />
                <Stack
                  sx={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    gap: '1rem',
                    minHeight: '50px'
                  }}
                >
                  {profileData.following.map(user => (
                    <Stack
                      key={user._id}
                      sx={{
                        width: '100px',
                        alignItems: 'center',
                        paddingBlock: '2rem'
                      }}
                    >
                      <Avatar {...stringAvatar(user.username)} />
                      <Typography variant='body2'>{user.username}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
              <Stack>
                <Typography>Followers</Typography>
                <Divider />
                <Stack
                  sx={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    gap: '1rem',
                    minHeight: '50px'
                  }}
                >
                  {profileData.followers.map(user => (
                    <Stack
                      key={user._id}
                      sx={{
                        width: '100px',
                        alignItems: 'center',
                        paddingBlock: '2rem'
                      }}
                    >
                      <Avatar {...stringAvatar(user.username)} />
                      <Typography variant='body2'>{user.username}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
              <Stack>
                <Typography>Posts</Typography>
                <Divider />
                {posts.map(post => (
                  <Box key={post._id}>
                    <Typography>{post.content.slice(0, 50) + '...'}</Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    );
  }
}

export default Profile;
