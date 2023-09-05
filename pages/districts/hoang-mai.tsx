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
        Cung cấp nước sạch ở Hoàng Mai - Hà Nội
      </div>

      <div className={firstParagraph}>
        Nước là một trong những nguồn tài nguyên quý giá nhưng không phải là vô
        tận. Cùng với sự phát triển của các khu công nghiệp, sự khai thác các
        nguồn nguyên vật liệu trong lòng đất… thì nguồn nước hiện nay bị ảnh
        hưởng khá mạnh mẽ. Có những nơi không đủ nước sạch để cung cấp cho tiêu
        dùng.
      </div>

      <div className={contentClassName}>
        Quận Hoàng Mai là một quận ở ngoại thành Hà Nội. Dù diện tích rộng,
        nhưng cùng với sự mở rộng và di chuyển của các công ty, nhà máy, khu
        công nghiệp ra vùng ven ngoại thành Hà Nội thì đây chính là những quận
        được lựa chọn đầu tiên. Tuy nhiên, chính vì điều này mà nguồn nước tại
        đó cũng bị ảnh hưởng khá nhiều. Chính vì vậy, để có được nguồn nước sạch
        thì việc mua nước sạch để tiêu dùng là điều không có gì dễ hiểu.
      </div>
      <div className="flex justify-center my-4">
        <div className="relative w-2/3 md:w-1/2 aspect-highlight">
          <Image alt="water-truck" src="/hoang-mai-1.jpg" layout="fill" />
        </div>
      </div>
      <div className={contentClassName}>
        Khi ô nhiễm nguồn nước, nếu không xử lý kịp thời thì ảnh hưởng của nó sẽ
        rất nặng nề. Với sự ra đời của máy lọc nước công nghiệp, thì hiện tượng
        nguồn nước bị ô nhiễm đã giải quyết được vấn đề ít nhiều. Tuy nhiên,
        không phải hộ gia đình nào cũng có đủ tiền để có thể đủ nước để dùng cho
        sinh hoạt. Chính vì vậy, việc mua nước sinh hoạt là một trong những điều
        cực kì cần thiết.
      </div>
      <div className={contentClassName}>
        Đối với quận Hoàng Mai, việc tìm được một địa chỉ bán nước sạch tại
        Hoàng Mai sẽ không quá khó. Tuy nhiên, nguồn nước được mua về sẽ sử dụng
        trực tiếp, dùng để ăn, uống… Chính vì vậy, một địa chỉ bán nước sinh
        hoạt uy tín sẽ đem đến sự yên tâm dành cho người sử dụng.
      </div>
      <div className="flex justify-center my-4">
        <div className="relative w-2/3 md:w-1/2 aspect-highlight">
          <Image alt="water-truck" src="/hoang-mai-2.jpg" layout="fill" />
        </div>
      </div>
      <div className={contentClassName}>
        Công ty TNHH 1 thành viên Xây dựng môi trường đô thị số 1 Hà Nội cung
        cấp nguồn nước cho các hộ gia đình ở quận Hoàng Mai một cách nhanh chóng
        và đảm bảo nhất. Với các xe chở nước sạch, di chuyển linh hoạt trên địa
        bàn quận, cùng các bình nước được đóng cẩn thận, các hộ gia đình không
        những được sử dụng nước sạch để nấu ăn, để uống mà nước sạch sinh hoạt
        dùng cho các hoạt động khác cũng được phục vụ một cách tối đa.
      </div>
      <div className={contentClassName}>
        Nhu cầu sử dụng nước sinh hoạt là vô tận. Và điều này sẽ càng cấp thiết
        hơn khi nguồn nước tự nhiên ở các thành phố lớn như Hà Nội đang ngày
        càng bị ảnh hưởng không hề nhỏ. Và với sự an toàn, hiệu quả, uy tín cùng
        phương pháp xử lý nước tiên tiến nhất, hiện đại nhất mà công ty xây
        dựng, thực hiện và đạt tiêu chuẩn về kĩ thuật quốc gia thì khách hàng có
        thể yên tâm để sử dụng nguồn nước được cung cấp này.
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
