import { Button, Paper, Stack, styled, Typography } from '@mui/material'

import { ResponseExploreUser } from '@/types/user'

const UserDataContainer = styled(Stack)({
  alignItems: 'center',
  padding: '1rem',
  gap: 8
})

export default function UserData({ userData }: { userData: ResponseExploreUser }) {
  const handleFollowUser = async () => {
    
  }

  return (
    <Paper elevation={4}>
      <UserDataContainer>
        <Typography variant='h4'>{userData.username}</Typography>
        <Typography variant='body1'>{userData.email}</Typography>
        <Typography variant='body1'>Followers: {userData.followers.length}</Typography>
        <Typography variant='body1'>Following: {userData.following.length}</Typography>
        <Button variant='contained' color={userData.isFollowing ? 'error' : 'primary'}>
          {userData.isFollowing ? 'UnFollow' : 'Follow'}
        </Button>
      </UserDataContainer>
    </Paper>
  )
}
