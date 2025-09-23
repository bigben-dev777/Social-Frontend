import UserData from '@/components/UserData';
import { getExploreUsers } from '@/services';
import { ResponseExploreUser } from '@/types/index';
import { Box, Container, Stack } from '@mui/material';
import { useEffect, useState } from 'react';

function Explore() {
  const [users, setUsers] = useState<ResponseExploreUser[]>([]);
  const [changed, setChanged] = useState(false);

  const handleExploreUsers = async () => {
    try {
      const newUsers = await getExploreUsers();
      setUsers(newUsers);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleChanged = () => {
    if (changed) {
      setChanged(false);
    } else {
      setChanged(true);
    }
  };

  useEffect(() => {
    handleExploreUsers();
  }, [changed]);

  return (
    <Box>
      <Container>
        <Stack
          sx={{
            gap: 3,
            padding: '2rem 1rem'
          }}
        >
          {users.map(user => (
            <UserData key={user._id} userData={user} handleBtnClick={toggleChanged} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Explore;
