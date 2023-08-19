import React from 'react'

import {
  Menu,
  News,
  Star,
  Microphone,
  MoviePlay
} from '@styled-icons/boxicons-regular'

const MobileNavBar = () => {
  return (
    <>
      <div className={'grid grid-cols-5 text-gray-500 tracking-tight'}>
        <div
          className={
            'col-span-1 flex flex-col items-center justify-center mt-1 mb-4'
          }
        >
          <Menu className={'h-6'} />
          <p className={'text-0.5xs mt-1 text-center uppercase'}>Chuyên mục</p>
        </div>
        <div
          className={
            'col-span-1 flex flex-col items-center justify-center mt-1 mb-4'
          }
        >
          <News className={'h-6'} />
          <p className={'text-0.5xs mt-1 text-center uppercase'}>Tin mới</p>
        </div>
        <div
          className={
            'col-span-1 flex flex-col items-center justify-center mt-1 mb-4'
          }
        >
          <Star className={'h-6'} />
          <p className={'text-0.5xs mt-1 text-center uppercase'}>E-Magazine</p>
        </div>
        <div
          className={
            'col-span-1 flex flex-col items-center justify-center mt-1 mb-4'
          }
        >
          <MoviePlay className={'h-6'} />
          <p className={'text-0.5xs mt-1 text-center uppercase'}>Truyền hình</p>
        </div>
        <div
          className={
            'col-span-1 flex flex-col items-center justify-center mt-1 mb-4'
          }
        >
          <Microphone className={'h-6'} />
          <p className={'text-0.5xs mt-1 text-center uppercase'}>Báo nói</p>
        </div>
      </div>
    </>
  )
}

export default MobileNavBar
