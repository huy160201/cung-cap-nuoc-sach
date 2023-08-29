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
      <div className={titleClassName}>Cung cấp nước sạch tại Long Biên</div>

      <div className={firstParagraph}>
        Mặc dù mới chớm đầu hè, nhưng nhu cầu dùng điện và nước sạch đã tăng đột
        biến, đặc biệt là nước sinh hoạt. Nhu cầu dùng nước này không chỉ tăng ở
        khu vực thành phố mà còn ở cả những khu vực nông thôn, nơi mà hệ thống
        cấp nước sạch của thành phố chưa cấp tới.
      </div>

      <div className={contentClassName}>
        Chính vì vậy, việc cung cấp nước sao cho vừa đảm bảo vệ sinh chất lượng,
        lại vừa đảm bảo nhanh chóng và rẻ về giá cả thực sự là một bài toán khó.
        Tuy nhiên, với sự có mặt của chúng tôi, Công ty TNHH 1 thành viên Xây
        dựng môi trường đô thị số 1 Hà Nội, quý vị và các bạn hoàn toàn có thể
        yên tâm về lời giải cho bài toán khó ở trên.
      </div>
      <div className="flex justify-center my-4">
        <div className="relative w-1/2 aspect-highlight">
          <Image alt="water-truck" src="/long-bien.jpg" layout="fill" />
        </div>
      </div>
      <div className={contentClassName}>
        Tất cả các thành viên của công ty chúng tôi luôn tận tâm phục vụ mọi quý
        khách hàng trong từng sản phẩm hay dịch vụ của mình. Hiện tại chúng tôi
        đang bán nước sinh hoạt, các loại nước đóng bình, đóng chai dùng để
        uống, và để nấu nướng, tắm giặt… Tất cả các loại nước trên đều đảm bảo
        tuyệt đối tiêu chuẩn nước sạch và vệ sinh theo đúng quy chuẩn kỹ thuật
        quốc gia về chất lượng nước sinh hoạt QCVN02:2009/BYT.
      </div>
      <div className="flex justify-center my-4">
        <div className="relative w-1/2 aspect-highlight">
          <Image alt="water-truck" src="/xe-1.jpg" layout="fill" />
        </div>
      </div>
      <div className={contentClassName}>
        Một khi sử dụng sản phẩm nước sinh hoạt của chúng tôi, quý khách hoàn
        toàn có thể yên tâm về chất lượng cũng như phong cách phục vụ tận tình
        chuyên nghiệp. Chúng tôi tự hào là một trong những đơn vị luôn đi đầu
        trong công nghệ xử lý nước sạch với hệ thống lọc hiện đại nhất.
      </div>
      <div className={contentClassName}>
        Hơn nữa, với mạng lưới đại lý rộng khắp, hệ thống xe bồn nhiều kích cỡ
        cũng như hệ thống các xe tải đa dạng vừa và nhỏ để chuyên trở nước đóng
        bình, chúng tôi sẽ có mặt gần như ngay lập tức nếu như quý vị ở trong
        nội thành, tối đa là 30 phút sau mỗi cuộc gọi cho các khu vực ngoại
        thành Hà Nội.
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
