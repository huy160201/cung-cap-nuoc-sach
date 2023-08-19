import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const HeaderBar = () => {
  const router = useRouter()

  return (
    <>
      <div className={'grid grid-cols-8 gap-x-6'}>
        <div
          className={
            'col-span-2 relative w-full aspect-logo my-2 cursor-pointer'
          }
          onClick={() => router.push('/')}
        >
          <Image alt="logo" src="/logo.png" layout="fill" />
        </div>
        <div className={'col-span-5 col-start-4 relative w-full my-2'}>
          <Image alt="banner" src="/long-truck.jpg" layout={'fill'} />
        </div>
      </div>
    </>
  )
}

export default HeaderBar
