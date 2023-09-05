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
      <div className={titleClassName}>Cung cấp nước sạch ở quận Đống Đa</div>

      <div className={firstParagraph}>
        Vấn đề nguồn nước đang ngày càng được quan tâm và nhiều người lo lắng về
        nguồn nước mà gia đình họ sử dụng. Cùng với sự phát triển của đô thị,
        các khu công nghiệp thì nguồn nước cũng bị ảnh hưởng cực kì lớn đối với
        cuộc sống.
      </div>

      <div className={contentClassName}>
        Quận Đống Đa nằm ở trung tâm thành phố Hà Nội, nơi phát triển từ khá sớm
        và cũng là nơi tập trung nhiều bệnh viện lớn. Điều này đem đến rất nhiều
        lợi ích cho nhân dân nhưng đây cũng là những mối lo lắng chung dành cho
        tất cả những người dân sinh sống ở khu vực này. Bởi khi càng đông đúc
        thì việc xả rác, rồi các chất thải của bệnh nhân trong các bệnh viện
        cũng là một trong những điều đáng lo lắng về nguồn nước cho những người
        sử dụng ở xung quanh.
      </div>
      <div className={contentClassName}>
        Sử dụng các máy lọc nước, máy xử lý nước trong các hộ gia đình cũng là
        một cách để có được nước sạch sinh hoạt. Tuy nhiên, khi các máy lọc
        không tách được hết các chất không tốt với sức khỏe thì đó cũng chính là
        một trong những việc đáng báo động.
      </div>
      <div className="flex justify-center my-4">
        <div className="relative w-2/3 md:w-1/2 aspect-highlight">
          <Image alt="water-truck" src="/dong-da-1.jpg" layout="fill" />
        </div>
      </div>
      <div className={contentClassName}>
        Với các hoạt động sinh hoạt khác, khách hàng có thể sử dụng các xe chở
        nước sạch. Bởi vì, khi sử dụng xe, dung tích chứa của xe sẽ lớn hơn rất
        nhiều, như vậy có thể sẽ cung cấp được nguồn nước cho khách hàng nước
        sạch sinh hoạt nhiều hơn nhiều hơn.
      </div>
      <div className={contentClassName}>
        Hoạt động mạnh mẽ tại các quận nội thành Hà Nội, Công ty TNHH 1 thành
        viên Xây dựng môi trường đô thị số 1 Hà Nội là một địa chỉ bán nước sạch
        sinh hoạt uy tín, được nhiều hộ gia đình sử dụng. Để được phục vụ một
        cách tốt nhất, khách hàng hãy liên hệ trực tiếp với công ty để được đội
        ngũ kĩ sư nhiệt tình, giàu kinh nghiệm tư vấn cách xử lý nguồn nước tại
        gia đình cũng như cách nhận nước sạch từ công ty một cách nhanh chóng,
        có lợi nhất.
      </div>
      <div className="flex justify-center my-4">
        <div className="relative w-2/3 md:w-1/2 aspect-highlight">
          <Image alt="water-truck" src="/dong-da-2.jpg" layout="fill" />
        </div>
      </div>
      <div className={contentClassName}>
        Mong muốn đem đến cho người dân tại quận Đống Đa những điều tốt nhất để
        phục vụ cho sức khỏe, với việc làm thiết thực nhất là cung cấp nguồn
        nước sạch sinh hoạt để sử dụng, Công ty TNHH 1 thành viên Xây dựng môi
        trường đô thị số 1 Hà Nội không ngừng khám phá, nỗ lực, cập nhật thường
        xuyên các phương pháp cùng thiết bị tiên tiến và hiện đại nhất. Khách
        hàng có thể hoàn toàn yên tâm khi sử dụng một nguồn nước được xử lý lý
        một cách cẩn thận và kĩ càng khi đến với dịch vụ của công ty chúng tôi.
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
