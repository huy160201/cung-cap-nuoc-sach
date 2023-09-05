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
      <div className={titleClassName}>Cung cấp nước sạch, giá rẻ ở Gia Lâm</div>

      <div className={firstParagraph}>
        Hiện nay, các hộ gia đinh tại Hà Nội không phải ai cũng rõ nguồn gốc
        nước sinh hoạt của mình. Các hộ thuê nhà thì gần như là không để ý và
        phó thác cho chủ nhà trọ, còn các hộ gia đình có hộ khẩu Hà Nội thì gửi
        trọn niềm tin vào các công ty nước sạch. Họ chẳng mấy khi, thậm chí là
        chẳng bao giờ quan tâm đến nguồn nước sạch của họ đang sử dụng hàng ngày
        trừ phi nó đã được báo động.
      </div>

      <div className={contentClassName}>
        Nguồn nước sinh hoạt hàng ngày giúp ta duy trì sự sống, nó bảo toàn sức
        khỏe chúng ta vậy mà chúng ta lại thờ ơ với nguồn gốc của nó?
      </div>
      <div className={contentClassName}>
        Vì vậy, vấn đề chúng ta cần quan tâm ở đây là xử lý nước để tạo ra nguồn
        nước sạch dùng cho sinh hoạt như thế nào là đảm bảo. Công ty chúng tôi
        có quy trình xử lý nước thải sinh hoạt bằng công nghệ sinh học được ứng
        dụng để xử lý các chất hữu cơ hoà tan có trong nước thải cũng như một số
        chất ô nhiễm vô cơ khác như H2S, sunfit, ammonia, nitơ… dựa trên cơ sở
        hoạt động của vi sinh vật để phân huỷ chất hữu cơ gây ô nhiễm. Vi sinh
        vật sử dụng chất hữu cơ và một số khoáng chất làm thức ăn để sinh trưởng
        và phát triển.
      </div>
      <div className="flex justify-center my-4">
        <div className="relative w-2/3 md:w-1/2 aspect-highlight">
          <Image alt="water-truck" src="/cau-giay.jpg" layout="fill" />
        </div>
      </div>
      <div className={contentClassName}>
        Với mọi thắc mắc, mọi vấn đề đều được chúng tôi giải đáp rất khoa học
        theo công nghệ trên và đến nay đã được đông đảo người dân tin dùng và ưa
        chuộng. Mọi người, mọi gia đình có thể yên tâm về hệ thống xử lý nước
        sạch dành cho sinh hoạt của công ty!
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
