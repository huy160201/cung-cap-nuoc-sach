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
      <div className={titleClassName}>Cung cấp nước sạch tại Sóc Sơn</div>

      <div className={firstParagraph}>
        Để phục vụ sinh hoạt hằng nhau cũng như công việc lao động, sản xuất
        không thể thiết đi nguồn nước sạch. Trên thực tế vì lý do nào đó nguồn
        cấp nước bị gặp vấn đề, hay mất nước dài hạn, bạn phải làm sao để có
        nước sạch để sử dụng phục vụ sinh hoạt, sản xuất, lao động không bị ảnh
        hưởng. Địa chỉ công ty bán nước sạch sinh hoạt là đơn vị cứu cánh cho
        các hộ dân, cơ quan trên địa bàn thành phố Hà Nội.
      </div>

      <div className={contentClassName}>
        Người dân thủ đô thường gặp các rắc rối về vấn đề nước sạch như cấp nước
        không liên tục, mất nước, vỡ đường ống nước sông Đà làm cho hơn 70.000
        hộ dân, hộ kinh doanh không có nước sử dụng kéo dài có thể lên đến cả
        nửa tháng. Chúng ta thử nghĩ xem, chỉ cần một nước một vài giờ đã cảm
        bất bí bách lắm rùi, còn những hộ gia đình chịu cảnh mất nước sạch
        thường xuyên chắc sẽ là một thảm hoạ. Nhu cầu mua nước sinh hoạt an toàn
        để bơm vào các bể chứa nước ngầm, bể nước inox, bể nước nhựa để sử dụng
        trong sinh hoạt hằng ngày.
      </div>
      <div className="flex justify-center my-4">
        <div className="relative w-2/3 md:w-1/2 aspect-highlight">
          <Image alt="water-truck" src="/soc-son-1.png" layout="fill" />
        </div>
      </div>
      <div className={contentClassName}>
        Bạn không thể nào sử dụng nguồn nước giếng khoan nhiễm kim loại nặng,
        gây hại cho sức khoẻ của chúng ta. Hay không thể tin tưởng sử dụng nguồn
        nước mưa cũng chứa nhiều ngưỡng nguyên tố có hại cho người sử dụng.
        Nhưng khi liên hệ công ty bán nước sạch sinh hoạt giá rẻ, quý vị cũng
        nên tìm hiểu về đơn vị đó, liệu rằng nguồn nước cung cấp có thực sự an
        toàn. Dịch vụ bán nước sạch sinh hoạt được nhiều đơn vị cung cấp trên
        địa bàn Hà Nội, cung cấp xe chở nước sạch khối lượng lớn đến địa chỉ
        khách hàng nhanh chóng và chính xác.
      </div>
      <div className={contentClassName}>
        Với nhiều lời chào mới hấp dẫn từ các đơn vị không chuyên nghiệp, chúng
        ta cần tìm hiểu kỹ xem công ty họ có uy tín và được cấp giấy phép kiểm
        chứng chất lượng nước sạch cung cấp. Với nhu cầu mua nước sạch sinh hoạt
        một lượng lớn nên việc chuyên chở cần có xe chở nước sạch chuyên dụng
        đảm bảo vệ sinh cũng như an toàn trong quá trình vận chuyển nước sạch
        cho khách hàng.
      </div>
      <div className="flex justify-center my-4">
        <div className="relative w-2/3 md:w-1/2 aspect-highlight">
          <Image alt="water-truck" src="/soc-son-2.png" layout="fill" />
        </div>
      </div>
      <div className={contentClassName}>
        Chúng tôi là công ty chuyên cho thuê xe téc, xe bồn chở nước sạch sinh
        hoạt cho gia đình, hộ kinh doanh hoặc xí nghiệp …với khối lượng nước
        lớn, không giới hạn. Báo giá bán nước sinh hoạt tiết kiệm chi phí cho
        khách hàng và có triết khấu giá cho khách hàng khi mua số lượng lớn.
        Nhiều công ty gặp sự cố về đường nước cần mua nước sạch số lượng lớn,
        chúng tôi có đầy đủ số lượng xe chở nước sạch nhiều trọng tải khác nhau
        để cung cấp nhanh nhất, đầy đủ yêu cầu của khách.
      </div>

      <div className={contentClassName}>
        Còn chần chờ gì nữa nếu như gia đình quý vị và các bạn đang có thắc mắc
        mua nước sạch sinh hoạt ở đâu? Thì hãy gọi ngay cho chúng tôi theo số
        hotline: 098 828 2335 hoặc 035 447 9999.
      </div>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Index>{page}</Index>
}

export default Page
