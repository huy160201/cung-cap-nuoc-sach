import React from 'react'

const FooterBar = () => {
  return (
    <>
      <div className="bg-red-600 lg:bg-gray-200 px-4 pt-10 grid-cols-2 grid gap-x-8">
        <div
          className={
            'text-gray-50 lg:text-gray-500 text-xs col-span-2 lg:col-span-1 order-3 lg:order-2 mb-5'
          }
        >
          <div className="mb-2">
            &copy; Bản quyền thuộc về Công ty TNHH 1 thành viên Xây dựng môi
            trường đô thị số 1 Hà Nội.
          </div>
          <div className="mb-2">
            Ghi rõ nguồn “Công ty TNHH 1 thành viên Xây dựng môi trường đô thị
            số 1 Hà Nội” khi sử dụng thông tin trang này.
          </div>
        </div>
        <div
          className={
            'text-gray-50 lg:text-gray-900 text-xs col-span-2 lg:col-span-1 order-2 lg:order-3 lg:mb-5 lg:text-right text-left'
          }
        >
          <div className="mb-2">
            <span className="font-bold lg:font-normal">Trụ sở: </span>
            <span>
              Thôn Hữu Cước - Xã Liên Hồng - Huyện Đan Phượng - Hà Nội
            </span>
          </div>
          <div className="mb-2">
            <span className="font-bold lg:font-normal">Điện thoại: </span>
            <span>098.828.2335 | 035.447.9999</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterBar
