import { Button, Container, Paper, Stack, styled, TextField, Typography } from '@mui/material'

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
  return (
    <Container>
      <DialogContainer>
        <DemoPaper elevation={3}>
          <Stack gap={2}>
            <Typography variant='h4' color='primary'>
              Login
            </Typography>
            <TextField color='primary' variant='outlined' placeholder='email' type='email' />
            <TextField
              color='primary'
              variant='outlined'
              placeholder='password'
              type='password'
              autoComplete='current-password'
            />
            <Button color='primary' variant='contained' size='large'>
              Login
            </Button>
          </Stack>
        </DemoPaper>
      </DialogContainer>
    </Container>
  )
}
