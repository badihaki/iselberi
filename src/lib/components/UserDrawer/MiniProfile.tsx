import { userAtom } from '@/lib/jotai/userAtom'
import { Box, Stack } from '@chakra-ui/react';
import { useAtom } from 'jotai'
import Link from 'next/link';
import React from 'react'

function MiniProfile() {
    const [user] = useAtom(userAtom);
  return (
    <div>
        <Stack>
            <Link href={"/profile"}>
            {user.username}s Profile
            </Link>

            <Box>
                Notifications
            </Box>
        </Stack>
    </div>
  )
}

export default MiniProfile
