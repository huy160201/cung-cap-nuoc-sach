import type { ReactElement } from 'react'
import React from 'react'
import Image from 'next/image'

import Index from '../components/layout'

const Page = () => {
  const titleClassName = 'text-blue-500 font-bold text-xl py-4'
  const firstParagraph = 'font-bold text-sm mt-4'

  return (
    <div className="border-b-4 border-red-600">
      <div className="mb-6 pr-2">
        <div className="mr-4 my-4">
          <div className={titleClassName}>Giới thiệu</div>
          <div className={firstParagraph}>
            Với mong muốn mang đến giải pháp về nước sinh hoạt và nước sạch dùng
            trong kinh doanh sản xuất cho mọi người trước vấn nạn ô nhiễm nguồn
            nước đáng báo động hiện nay. Công ty luôn cố gắng phát triển với
            định hướng mục tiêu cung cấp đầy đủ, cung cấp chất lượng, cung cấp
            an toàn và cung cấp nhanh chóng cho từng cá nhân, hộ gia đình cũng
            như các tập thể kinh doanh có nhu cầu sử dụng nước sạch.
          </div>
          <div className="flex justify-center my-4">
            <div className="relative w-1/2 aspect-highlight">
              <Image alt="water-truck" src="/xe-1.jpg" layout="fill" />
            </div>
          </div>
          <div className={titleClassName}>Trách nhiệm với dịch vụ </div>
          <div>
            Để có thể đem đến cho khách hàng dịch vụ tốt nhất, chúng tôi luôn
            chú trọng vào các nhân tố mang tính quyết định như:
          </div>
          <div>
            - Cơ sở hạ tầng phục vụ hoạt động khai thác xử lý và phân phối nước
            sạch sinh hoạt: máy lọc nước, xe chở nước sạch,…
          </div>
          <div>
            - Phương pháp tiên tiến với công nghệ hiện đại trong hoạt động xử lý
            nước đảm bảo tiêu chuẩn.
          </div>
          <div>- Tuyển dụng và đào tạo nhân viên ưu tú cho đơn vị.</div>
          <div>
            Xây dựng quy trình giám sát quản lý hoạt động kinh doanh một cách
            khoa học, hiệu quả.
          </div>
          <div className={titleClassName}>Cam kết với khách hàng </div>
          <div>
            - Chất lượng nước sạch sinh hoạt tiêu chuẩn, đảm bảo an toàn cho mọi
            hoạt động sử dụng từ ăn uống, tắm giặt đến sản xuất kinh doanh.
          </div>
          <div>- Cung cấp đủ khối lượng theo yêu cầu của khách hàng.</div>
          <div>- Bán nước sạch sinh hoạt với giá hợp lý nhất.</div>
          <div>- Giao nhận, vận chuyển nước nhanh chóng.</div>
          <div>- Bảo hành chất lượng nước sạch sinh hoạt.</div>
          <br />

          <div className="font-semibold text-sm">
            <div>
              Được chung tay góp sức giữ gìn sức khỏe và an toàn chất lượng cho
              mọi hoạt động liên quan đến nước trong đời sống luôn là vinh dự
              của đơn vị.
            </div>
            <div>
              Kính chúc quý khách hàng luôn mạnh khỏe, an khang và thành công
              bền vững.
            </div>
            <div>Trân trọng cám ơn !</div>
          </div>
        </div>
      </div>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Index>{page}</Index>
}

export default Page
