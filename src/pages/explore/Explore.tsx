import { User } from '@/types/index'
import { useEffect, useState } from 'react'

function Explore() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {}, [])

  return <>Explore</>
}

export default Explore
