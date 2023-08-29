import type { ReactElement } from 'react'
import React from 'react'
import Image from 'next/image'

import Index from '../../components/layout'

const Page = () => {
  const titleClassName = 'text-blue-500 font-bold text-xl'
  const firstParagraph = 'font-bold text-sm mt-4'
  const contentClassName = 'mt-4'

  return (
    <div className="">
      <div className={titleClassName}>
        Cung cấp nước sạch tốt nhất khu vực Thanh Xuân
      </div>

      <div className={firstParagraph}>
        Trong xã hội phát triển như ngày nay, đi đôi với quá trình đô thị quá là
        vấn nạn ô nhiễm môi trường ngày càng trầm trọng. Trong đó nguồn nước
        sạch của chúng ta cũng đang bị ảnh hưởng nặng nề, vì thế hiện tượng khan
        hiếm nước sạch đang là một vấn nạn đáng báo động. Có rất nhiều các nhà
        cung cấp nước sạch sinh hoạt trên thị trường hiện nay, nhưng bạn có biết
        rất ít trong số đó cung cấp được nguồn nước sạch sinh hoạt đạt đủ chất
        lượng tiêu chuẩn mà bộ y tế đưa ra.
      </div>

      <div className={contentClassName}>
        Với hệ thống máy móc hiện đại tiên tiến nhất hiện nay cùng đội ngũ kĩ sư
        giàu kinh nghiệm, công ty chúng tôi đưa tới khách hàng các dịch vụ về:
        bán nước sạch sử dụng trong kinh doanh, bán nước sinh hoạt, bán nước
        sạch sinh hoạt bình 20 lít.
      </div>
      <div className="flex justify-center my-4">
        <div className="relative w-1/2 aspect-highlight">
          <Image alt="water-truck" src="/xe-1.jpg" layout="fill" />
        </div>
      </div>
      <div className={contentClassName}>
        Đến với dịch vụ cung cấp nước sạch sinh hoạt của chúng tôi là bạn đã có
        một lựa chọn đúng cho cho một sản phẩm thiết yếu trong cuộc sống hằng
        ngày . Bên cạnh hệ thống máy móc tiên tiến, đội ngũ nhân viên nhiệt tình
        chu đáo thì công ty chúng tôi còn có những cam kết đưa tới khách hàng:
      </div>
      <div className={contentClassName}>
        - Nước sạch sản xuất ra đảm bảo chất lượng chỉ tiêu của bộ y tế.
        <br />
        - Quy trình sản xuất đóng chai vận chuyển chuyên nghiệp an toàn.
        <br />
        - Luôn luôn phục vụ kịp thời có mặt ngay khi bạn cần
        <br />- Bảo hàng chất lượng nước sạch sinh hoạt sau bán.
      </div>
      <div className={contentClassName}>
        Chỉ cần nhấc điện thoại lên liên hệ với chúng tôi qua hotline 098 828
        2335 hoặc 035 447 9999, khách hàng sẽ được phục vụ tại nhà, với chất
        lượng tốt nhất và sự nhiệt tình nhất.
      </div>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Index>{page}</Index>
}

export default Page
