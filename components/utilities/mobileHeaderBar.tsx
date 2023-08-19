import { Switch, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { MenuBarType } from '../../types/menu-bar'
import { useRouter } from 'next/router'

type Props = {
  menuItems: MenuBarType[]
}

const MobileHeaderBar = (props: Props) => {
  const router = useRouter()
  const { menuItems } = props
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const handleClickCategory = (path: string) => {
    router.push(path)
    setMenuOpen(false)
  }


  return (
    <div>
      <div className="flex items-end justify-between border-b">
        {/* Logo */}
        <div
          className="relative h-12 aspect-logo"
          onClick={() => router.push('/')}
        >
          <Image src='/logo.png' layout="fill" />
        </div>
        <div>
          {/* Button menu */}
          <div>
            <Switch
              checked={menuOpen}
              onChange={setMenuOpen}
              className="text-sm font-medium"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-slate-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-slate-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </Switch>
          </div>
        </div>
      </div>

      {/* Menu */}
      <Transition
        show={menuOpen}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 scale-50"
        enterTo="opacity-100 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <div className={`${menuOpen ? 'block' : 'hidden'} h-screen`}>
          <div>
            <p className="text-xl text-center font-semibold pt-3">DANH MỤC</p>

            <div className="py-3 text-center justify-center border-b">
              <ul className="grid grid-cols-2">
                {menuItems.map((menu: MenuBarType) => (
                  <li
                    key={menu.id}
                    className="text-center px-1.5 text-2lg col-span-1 py-2 uppercase"
                  >
                    <button onClick={() => handleClickCategory(menu.path)}>
                      {menu.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-between my-3 items-center px-2">
            <p>
              Hotline: <b>098.828.2335 | 035.447.9999</b>
            </p>
          </div>

          <div className="text-slate-600 px-2">
            Giám đốc: Trịnh Văn Bảo
            <br /><br />
            Trụ sở : Thôn Hữu Cước - Xã Liên Hồng - Huyện Đan Phượng - Hà Nội.
            <br /><br />
            © Bản quyền thuộc về Công ty TNHH 1 thành viên Xây dựng môi trường đô thị số 1 Hà Nội.
            <br /><br />
            Ghi rõ nguồn khi sử dụng thông tin trang này.
            <br />
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default MobileHeaderBar
