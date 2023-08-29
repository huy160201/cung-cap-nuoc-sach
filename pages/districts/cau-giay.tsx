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
        Cung cấp nước sạch, giá rẻ ở Cầu Giấy
      </div>

      <div className={firstParagraph}>
        Hiện nay, với sự thay đổi của thời tiết, khí hậu thì nguồn nước đủ để
        phục vụ cho con người sinh hoạt, sản xuất là một điều cực kì cần thiết.
        Tại những thành phố lớn như Hà Nội, nguồn nước sẽ càng trở nên khan hiếm
        hơn bởi nhu cầu của người sử dụng rất lớn. Tại đây tập trung rất nhiều
        các trường đại học, các công ty doanh nghiệp và các cơ quan đầu ngành,
        chính vì vậy số lượng người đổ về Hà Nội để sinh sống và làm việc không
        hề nhỏ.
      </div>

      <div className={contentClassName}>
        Cầu Giấy là một trong những khu vực kinh tế mũi nhọn, đứng trong top
        những quận đang phát triển mạnh tại Hà Nội. Chính vì vậy, lượng người
        đông đúc, kinh tế của người dân sống tại khu vực được cải thiện đáng kể.
        Tuy nhiên, cùng với đó thì nước sạch sinh hoạt là một trong những điều
        đáng báo động tại khu vực này.
      </div>
      <div className={contentClassName}>
        Để có được những nguồn nước sạch sử dụng, các máy lọc nước, các bình
        nước sẽ là một trong những nguồn hỗ trợ được cho người dân cực kì tốt.
        Tuy nhiên, để có được nước sinh hoạt sạch thì máy lọc nước nhỏ, hay các
        bình nước mua ngoài sẽ không thể hỗ trợ được tối đa. Và khi đó, các công
        ty nước sạch được thành lập để giúp khách hàng đáp ứng được những nhu
        cầu cần thiết của cuộc sống.
      </div>
      <div className="flex justify-center my-4">
        <div className="relative w-1/2 aspect-highlight">
          <Image alt="water-truck" src="/cau-giay.jpg" layout="fill" />
        </div>
      </div>
      <div className={contentClassName}>
        Những người dân trên địa bàn quận Cầu Giấy sẽ được sử dụng nước sạch, an
        toàn cho da, sức khỏe khi sử dụng dịch vụ của chúng tôi. Để có thể mua
        nước sinh hoạt sạch đóng bình hay mua khối lượng nước sạch có dung tích
        lớn thông qua những xe chở nước sạch lưu thông hàng ngày trên địa bàn
        quận.
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
