import Image from 'next/image'

const HomePageContent = () => {
  const titleClassName = 'text-blue-500 font-bold text-xl'
  const firstParagraph = 'font-bold text-sm mt-4'
  const contentClassName = 'mt-4'

  return (
    <div className="mr-4 my-4">
      <div className={titleClassName}>
        Địa chỉ nước sạch an toàn nhất Hà Nội
      </div>
      <div className={firstParagraph}>
        Hiện nay, nhiều gia đình vẫn không tin cậy ở nguồn nước mình đang sử
        dụng. Bởi nó có rất nhiều hiện tượng lạ như nước nấu lên rồi vẫn có mùi
        ngang, lắng cặn nhiều. Thậm chí được xử lý bởi các thiết bị lọc nước rất
        tiến tiến nhưng vẫn người dân cũng không tìm được độ tinh khiết, trong
        mát của vị nước ngọt thiên nhiên. Chính điều này, nhiều gia đình lo ngại
        về chất lượng nước nhà mình đang sử dụng. Họ vẫn băn khoăn về nguồn nước
        sử dụng cho nhà mình.
      </div>
      <div className={contentClassName}>
        Để có thể có nguồn nước sạch sử dụng, nhiều gia đình đã bỏ ra số tiền
        khá lớn để đầu tư mua máy lọc nước hay thậm chí mua bình nước của những
        hãng uy tín trên thị trường nhưng biện pháp này chỉ mang tính chất tạm
        thời và quá tốn kém.
      </div>
      <div className="flex justify-center my-4">
        <div className="relative w-2/3 md:w-1/2 aspect-highlight">
          <Image alt="water-truck" src="/xe-1.jpg" layout="fill" />
        </div>
      </div>
      <div className={contentClassName}>
        Do vậy, việc tìm nguồn nước sạch vẫn luôn là bài toán chung của xã hội
        và của mọi gia đình. Làm sao để giải quyết được vấn đề này một cách
        triệt để thì các cấp nhà nước vẫn phải đang tìm cách hợp tác để chuyển
        giao những công nghệ hiện đại để xây dựng mạng lưới nước sạch trong
        tương lai. Nhưng còn trước mắt, nhân dân vẫn phải tự tìm nguồn cung cấp
        nước sạch theo cách riêng của mình, hoặc theo sự hiểu biết riêng của
        từng người.
      </div>
      <div className={contentClassName}>
        Hiểu được nỗi lo, trăn trở đó của người dân, Công ty TNHH Cung cấp nước
        sạch đã ra đời nhằm hỗ trợ mong mỏi này của người dân. Với tiêu chí “sức
        khỏe con người là sức mạnh của chúng tôi”, công ty bán nước sạch với giá
        rẻ nhất thị trường nhằm đảm bảo ai cũng có khả nước mua nước dùng. Nhưng
        không vì thế mà công ty bỏ qua các khâu đảm bảo an toàn vệ sinh, các máy
        lọc nước, các bình nước sẽ là một trong những nguồn hỗ trợ được cho
        người dân cực kì tốt.
      </div>
      <div className="flex justify-center my-4">
        <div className="relative w-2/3 md:w-1/2 aspect-highlight">
          <Image alt="water-truck" src="/xe-2.jpg" layout="fill" />
        </div>
      </div>
      <div className={contentClassName}>
        Tuy nhiên, để có được nước sinh hoạt sạch thì máy lọc nước nhỏ, hay các
        bình nước mua ngoài sẽ không thể hỗ trợ được tối đa. Theo đó, công ty
        nước sạch được thành lập để giúp khách hàng đáp ứng được những nhu cầu
        cần thiết của cuộc sống.
      </div>
      <div className={contentClassName}>
        <div className="font-semibold">
          Hãy đặt niềm tin ở chúng tôi, chúng tôi sẽ mang đến giá trị cuộc sống
          cho bạn!
        </div>
      </div>
    </div>
  )
}

export default HomePageContent
