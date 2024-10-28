import { Button } from '@/components/ui/button';
import { DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerFooter, DrawerHeader, DrawerRoot, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import React from 'react'

function NavRail() {
  return (
    <DrawerRoot size={'xs'}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button variant={'outline'} size={"md"} backgroundColor={'slateblue'} margin={4} padding={2} fontSize={22}>
          Navigation
        </Button>
      </DrawerTrigger>
      <DrawerContent offset={4} rounded="md">
        <DrawerCloseTrigger />
        <DrawerHeader>
          <DrawerTitle />
        </DrawerHeader>
        <DrawerBody />
        <DrawerFooter />
      </DrawerContent>
    </DrawerRoot>
  )
}

export default NavRail;