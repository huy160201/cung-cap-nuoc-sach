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
      <div className={titleClassName}>Cung cấp nước sạch ở Đan Phượng</div>

      <div className={firstParagraph}>
        Nước sạch là một trong những nhu cầu quan trọng của đời sống con người.
        Vai trò của nước đã được khẳng định từ rất lâu, chính vì vậy, nhu cầu sử
        dụng nước sạch để cung cấp cho cơ thể là một điều cực kì quan trọng và
        cần thiết.
      </div>

      <div className={contentClassName}>
        Với những bình nước sạch thông thường, nó sẽ chỉ đủ để cung cấp nước
        uống cho những người thân trong gia đình bạn. Còn nếu bạn muốn sử dụng
        nước sạch sinh hoạt thì cần phải có một sự vận chuyển và lưu trữ lớn
        hơn. Khi đóm các xe chở nước sạch sẽ là một sự lựa chọn tốt nhất.
      </div>
      <div className={contentClassName}>
        Hiện tại, trên Hà Nội có khá nhiều các công ty nước sạch đang hoạt động
        trong lĩnh vực mua bán nước sinh hoạt để cung cấp cho các hộ gia đình.
        Tuy nhiên, khi nhu cầu sử dụng nước của con người ngày càng nâng cao,
        thậm chí, với sự cung cấp nước sạch thông thường còn không có đủ để cung
        cấp nguồn nước dành cho người dùng.
      </div>
      <div className="flex justify-center my-4">
        <div className="relative w-1/2 aspect-highlight">
          <Image alt="water-truck" src="/xe-1.jpg" layout="fill" />
        </div>
      </div>
      <div className={contentClassName}>
        Chúng tôi với phương châm đem đến cho khách hàng một sự lựa chọn tốt
        nhất, cùng những tiện lợi tốt hơn bao giờ hết để khách hàng có được
        những nguồn nước sạch đảm bảo dùng cho sinh hoạt. Việc sử dụng xe chở
        nước sạch sinh hoạt là thực sự cần thiết bởi những lý do sau đây:
      </div>
      <div className={contentClassName}>
        - Thứ nhất, với những xe chở nước sạch, dung tích mỗi lần chở lớn. Vì
        vậy, khách hàng sẽ có được một nguồn nước đủ nhiều để sử dụng trong một
        khoảng thời gian.
        <br />
        - Thứ hai, các xe chở nước đảm bảo tiêu chuẩn chất lượng sẽ đem đến cho
        khách hàng một nguồn nước tốt, được kiểm định một cách kĩ càng. Chính vì
        vậy, khách hàng sẽ luôn có được một nguồn nước đảm bảo chất lượng
        <br />- Thứ ba, hiện nay, dịch vụ này phát triển khá mạnh mẽ, chính vì
        vậy, việc sử dụng xe chở nước để bán nước sạch sinh hoạt cho người dân
        là một sự lựa chọn tốt nhất cho cả nhà cung cấp và người tiêu dùng.
      </div>
      <div className="flex justify-center my-4">
        <div className="relative w-1/2 aspect-highlight">
          <Image alt="water-truck" src="/xe-2.jpg" layout="fill" />
        </div>
      </div>
      <div className={contentClassName}>
        Bên cạnh đó, Công ty TNHH 1 thành viên Xây dựng môi trường đô thị số 1
        Hà Nội còn là một trong những công ty có bề dày kinh nghiệm, luôn đặt uy
        tín, chất lượng và khách hàng lên hàng đầu nên việc lựa chọn những giải
        pháp xử lý, phân phối hiện đại nhất, tiên tiến nhất sẽ đem đến những
        điều có lợi nhất dành cho những người sử dụng.
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
