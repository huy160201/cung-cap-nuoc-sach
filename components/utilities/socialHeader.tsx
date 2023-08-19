import React from 'react'

import { Facebook, Twitter, Youtube, Edge } from '@styled-icons/boxicons-logos'

const SocialHeader = () => {
  return (
    <>
      <div className={'flex justify-end items-center text-2xs font-bold py-2'}>
        {/* Hotline */}
        <div className={'ml-4 tracking-tight'}>098 828 2335 - 035 447 9999</div>
        {/* Social Logos */}
        <div className={'ml-2 flex'}>
          <div
            className={
              'bg-gray-200 hover:bg-red-600 ml-2 p-1 border border-gray-400 rounded-full text-red-600 hover:text-gray-50'
            }
          >
            <Edge className={'h-4'} />
          </div>
          <div
            className={
              'bg-gray-200 hover:bg-red-600 ml-2 p-1 border border-gray-400 rounded-full text-red-600 hover:text-gray-50'
            }
          >
            <Youtube className={'h-4'} />
          </div>
          <div
            className={
              'bg-gray-200 hover:bg-red-600 ml-2 p-1 border border-gray-400 rounded-full text-blue-600 hover:text-gray-50'
            }
          >
            <Facebook className={'h-4'} />
          </div>
          <div
            className={
              'bg-gray-200 hover:bg-red-600 ml-2 p-1 border border-gray-400 rounded-full text-blue-400 hover:text-gray-50'
            }
          >
            <Twitter className={'h-4'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SocialHeader
