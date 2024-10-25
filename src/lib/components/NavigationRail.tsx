import React from 'react'
import { Link } from '@chakra-ui/next-js'

function NavigationRail() {
  return (
    <div id='nagivation-rail'>
        <ul>
            <Link href="/">
                <li>
                    Home
                </li>
            </Link>
        </ul>
    </div>
  )
}

export default NavigationRail
