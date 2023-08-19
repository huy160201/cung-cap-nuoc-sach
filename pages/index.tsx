import type { ReactElement } from 'react'
import React, { useState, useEffect } from 'react'
import Index from '../components/layout'
import HomePageContent from '../components/homePage/homePageContent'
import RightSideImage from '../components/layout/rightSideImage'

const IndexPage = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    if (window.innerWidth < 1024) setIsMobile(true)
  }, [])

  return (
    <div className="border-b-4 border-red-600">
      <div className="w-screen flex items-center justify-center">
        <div className={`max-w-6xl w-full ${!isMobile && 'grid'} grid-cols-10`}>
          <div className='col-span-8 border-r mb-6 pr-2'>
            <HomePageContent />
          </div>
          {!isMobile && (
            <div className='col-span-2 pl-2'>
              <RightSideImage />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <Index>{page}</Index>
}

export default IndexPage
