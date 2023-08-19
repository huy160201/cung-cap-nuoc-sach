import { Menu, Transition } from '@headlessui/react'
import { useState } from 'react'
import { MenuBarType, Children } from '../../types/menu-bar'
import { useRouter } from 'next/router'

type Props = {
  menuItems: MenuBarType[]
}

function MenuBar(props: Props) {
  const router = useRouter()
  const { menuItems } = props
  const [enabled, setEnabled] = useState(false)

  const handleClickCategory = (path: string) => {
    router.push(path)
  }

  return (
    <div className="flex inline item-center justify-between">
      <div className="inline-flex">
        <div
          className="px-2 bg-red-700 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white h-4 w-4 my-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </div>

        {menuItems.map((menuItem: MenuBarType, index: number) => (
          <Menu
            as="div"
            key={index}
            className="relative inline-block text-left w-fit group"
          >
            <div className="">
              <Menu.Button
                className="uppercase tracking-tight group-hover:delay-1500 justify-center px-4 py-2 text-sm text-white group-hover:bg-red-700"
                onClick={() => handleClickCategory(menuItem.path)}
              >
                {menuItem.name}
              </Menu.Button>
            </div>
          </Menu>
        ))}
      </div>

      <div className="px-2 bg-[#BF081D] group relative group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white my-2 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <div
          className={`${
            enabled ? 'block' : 'hidden'
          } absolute border right-0 group-hover:block`}
        >
          <form className="flex inline">
            <input
              onFocus={() => setEnabled(true)}
              onBlur={() => setEnabled(false)}
              type="text"
              placeholder="Nhập từ khóa"
              className="py-1.5 px-2"
            />
            <input
              type="submit"
              value="Tìm kiếm"
              className="text-white bg-[#BF081D] py-1.5 px-2 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default MenuBar
