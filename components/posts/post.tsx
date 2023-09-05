import Image from 'next/image'
import { useRouter } from 'next/router'

import { Post } from '../../types/post'

type Props = {
  post: Post
}

const Post = (props: Props) => {
  const { post } = props
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(post.url)}
      className="grid grid-cols-10 my-2 border hover:shadow-lg cursor-pointer"
    >
      <div className="relative w-full aspect-square col-span-3 md:col-span-4 md:aspect-highlight">
        <Image alt="water-truck" src={post.thumbNailUrl} layout="fill" />
      </div>
      <div className="col-span-7 pl-2 md:col-span-6">
        <div className="font-bold text-sm md:text-lg md:pt-2">{post.title}</div>
        <div className="line-clamp-3 text-xs my-1 md:text-base md:line-clamp-5 md:my-3">
          {post.shortContent}
        </div>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 aspect-square"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="text-sm">{post.time}</div>
        </div>
      </div>
    </div>
  )
}

export default Post
