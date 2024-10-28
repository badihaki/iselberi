import LogIn from '@/lib/components/Auth/LogIn'
import SignUp from '@/lib/components/Auth/SignUp'
import React from 'react'

function Auth() {
  return (
    <div className='ml-24 mr-6 p-2 bg-stone-300 bg-opacity-10'>
      Auth
      <SignUp />
      <LogIn />
    </div>
  )
}

export default Auth
