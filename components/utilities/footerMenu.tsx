import { MenuBarType } from '../../types/menu-bar'
import { useRouter } from 'next/router'

type Props = {
  menuItems: MenuBarType[]
}

export default function FooterMenu(props: Props) {
  const router = useRouter()
  const { menuItems } = props

  const handleClickCategory = (path: string) => router.push(path)


  return (
    <div className="py-3 text-center justify-center bg-slate-100">
      <ul className="grid grid-cols-6">
        {menuItems.map((menu: MenuBarType, index: number) => (
          <li
            key={index}
            className="text-left px-1.5 text-base col-span-1 py-2"
          >
            <button
              onClick={() => handleClickCategory(menu.path)}
              className="hover:text-red-700"
            >
              {menu.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
