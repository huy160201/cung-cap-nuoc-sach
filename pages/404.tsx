import type { ReactElement } from 'react'
import React from 'react'

import Index from '../components/layout'

const Page = () => {
  const titleClassName = 'text-blue-500 font-bold text-xl'
  const firstParagraph = 'font-bold text-sm mt-4'

  return (
    <div>
      <div className={titleClassName}>404 - Page not found</div>
      <div className={firstParagraph}>
        Có vẻ như trang bạn đang tìm kiếm hiện không tìm thấy, vui lòng quay lại
        trang chủ tại đây!
      </div>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Index>{page}</Index>
}

export default Page
