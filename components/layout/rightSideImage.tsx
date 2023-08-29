import Image from 'next/image'
import { useRouter } from 'next/router'
import { districts } from '../../confict/menu'

const RightSideImage = () => {
  const router = useRouter()

  return (
    <div className="w-full mt-6">
      <div>
        <div className="py-3 mb-2 bg-red-600 text-white flex items-center gap-2 justify-center">
          <div>Trung tâm nước sạch</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        {districts.map((district, id) => (
          <div
            key={id}
            onClick={() => router.push(district.url)}
            className={`${
              router.pathname.includes(district.url) && 'opacity-70'
            } cursor-pointer p-2 bg-red-500 rounded-md text-center text-white border border-white hover:opacity-70 uppercase`}
          >
            {district.name}
          </div>
        ))}
      </div>
      <div className="border-b py-4">
        <div className="relative w-full aspect-post">
          <Image alt="support" src="/support-image.png" layout="fill" />
        </div>
        <div className="text-red-500 flex gap-2 items-center justify-center font-bold mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          <div className="text-sm">098 828 2335 - 035 447 9999</div>
        </div>
      </div>
      <div className="py-4">
        <div className="relative w-full aspect-post">
          <Image alt="cartoon-truck" src="/cartoon-truck.jpg" layout="fill" />
        </div>
        <div className="text-red-500 font-bold w-full text-center text-sm">
          Uy tín - chất lượng - phục vụ 24/7
        </div>
      </div>
    </div>
  )
}

export default RightSideImage
