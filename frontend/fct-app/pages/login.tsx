import React from 'react'
import Main from './main'
import Link from 'next/link'

const login = () => {
  return (
    <>
       <div>このページはログイン専用ページです。</div>
       <Link href = "/main" legacyBehavior>
          <a>mainページへはこちらから</a>
       </Link>
    </>
    
  )
}

export default login