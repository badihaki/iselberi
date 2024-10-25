import Link from 'next/link'
import React from 'react'

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
