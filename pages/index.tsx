import type { ReactElement } from 'react'
import React from 'react'

import HomePageContent from '../components/homePage/homePageContent'
import Index from '../components/layout'

const IndexPage = () => {
  return (
    <div className="border-b-4 border-red-600">
      <HomePageContent />
    </div>
  )
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <Index>{page}</Index>
}

export default IndexPage
