import { logIn } from '@/services'
import { Button, Container, Paper, Stack, styled, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { LoginUserInfo } from '@/types'

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: '400px',
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center'
}))

const DialogContainer = styled(Stack)({
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh'
})

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginUser = async () => {
    const newUser: LoginUserInfo = {
      email,
      password
    }
    await logIn(newUser)
  }

  return (
    <Container>
      <DialogContainer>
        <DemoPaper elevation={3}>
          <Stack gap={2}>
            <Typography variant='h4' color='primary'>
              Login
            </Typography>
            <TextField
              color='primary'
              variant='outlined'
              placeholder='email'
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              color='primary'
              variant='outlined'
              placeholder='password'
              type='password'
              autoComplete='current-password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button color='primary' variant='contained' size='large' onClick={() => handleLoginUser()}>
              Login
            </Button>
          </Stack>
        </DemoPaper>
      </DialogContainer>
    </Container>
  )
}
