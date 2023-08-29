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
      <div className={titleClassName}>Cung cấp nước sạch tại quận Tây Hồ</div>

      <div className={firstParagraph}>
        Đứng trước vấn nạn về thực trạng nguồn nước bị nhiễm bẩn hoặc thiếu an
        toàn sạch sẽ vẫn đang hiển hiện trong cuộc sống của không ít hộ gia đình
        trên địa bàn Hà Nội nói chung và quận Tây Hồ nói riêng, nhu cầu về một
        đơn vị bán nước sạch uy tín trở nên nóng hơn bao giờ hết.
      </div>

      <div className={contentClassName}>
        Lựa chọn hoạt động chuyên nghiệp trong lĩnh vực khai thác, xử lý và cung
        cấp nước sạch sinh hoạt đảm bảo tiêu chuẩn an toàn cho các hộ dân cư tại
        Hà Nội được xem là mục tiêu và định hướng phát triển lâu dài của đơn vị.
        Khách tin tưởng và quyết định mua nước sinh hoạt từ công ty sẽ nhận được
        những cam kết cùng chính sách hỗ trợ tối ưu như sau:
      </div>
      <div className={contentClassName}>
        - Bán nước sinh hoạt đã được kiểm định chặt chẽ về chất lượng tiêu chuẩn
        trước khi cung cấp ra thị trường đến tận tay từng hộ gia đình.
        <br />
        - Cung cấp nước sinh hoạt với mức giá hợp lý, tiết kiệm cho đông đảo
        khách hàng có nhu cầu.
        <br />
        - Hỗ trợ phục vụ giao nhận nước sạch sinh hoạt và thanh toán tận nơi
        theo yêu cầu. <br />- Cam kết bảo đảm chất lượng cho khách hàng đã mua
        nước sạch của công ty. Các sự cố phát sinh mà nguyên do từ phía nguồn
        nước chúng tôi cung cấp sẽ được công ty chịu trách nhiệm xử lý hoàn toàn
        với hậu quả xảy ra.
      </div>
      <div className="flex justify-center my-4">
        <div className="relative w-1/2 aspect-highlight">
          <Image alt="water-truck" src="/tay-ho-1.jpg" layout="fill" />
        </div>
      </div>
      <div className={contentClassName}>
        Để có thể mang đến giải pháp đáng tin cậy cho khách hàng về nhu cầu sử
        dụng nước sạch sinh hoạt, công ty luôn chú trọng đầu tư đến các yếu tố
        như:
      </div>
      <div className={contentClassName}>
        - Đội ngũ chuyên viên, kỹ thuật giàu kinh nghiệm và kiến thức trong khai
        thác xử lý nước.
        <br />
        - Phương pháp xử lý nước sạch sinh hoạt tiên tiến, hiện đại.
        <br />
        - Hệ thống máy móc vật tư hỗ trợ quá trình sản xuất cung ứng nước sạch
        đầy đủ như các loại máy khoan, máy lọc, đường ống dẫn, xe chở nước
        sạch,…
        <br />- Xây dựng phòng kiểm định chất lượng đảm bảo an toàn chất lượng
        cho nguồn nước cung cấp.
      </div>
      <div className="flex justify-center my-4">
        <div className="relative w-1/2 aspect-highlight">
          <Image alt="water-truck" src="/tay-ho-2.jpg" layout="fill" />
        </div>
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
