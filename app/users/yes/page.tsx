import Link from 'next/link'
import React from 'react'

// can call fetch in server components

const page = () => {
  return (
    <div>
        <h1>nested users page</h1>
        <Link href="/users">
          yes
        </Link>
    </div>
  )
}

export default page
