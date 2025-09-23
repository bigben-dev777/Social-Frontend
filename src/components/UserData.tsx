import { Button, Paper, Stack, styled, Typography } from '@mui/material'

import { ResponseExploreUser } from '@/types/user'

const UserDataContainer = styled(Stack)({
  alignItems: 'center'
})

export default function UserData({ userData }: { userData: ResponseExploreUser }) {
  return (
    <Paper elevation={4}>
      <UserDataContainer>
        <Typography>{userData.username}</Typography>
        <Typography>{userData.email}</Typography>
        <Typography>{userData.followers.length}</Typography>
        <Typography>{userData.following.length}</Typography>
        <Button variant='contained' color={userData.isFollowing ? 'primary' : 'error'}>
          Follow
        </Button>
      </UserDataContainer>
    </Paper>
  )
}
