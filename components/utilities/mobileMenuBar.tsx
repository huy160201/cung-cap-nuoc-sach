import { MenuBarType } from '../../types/menu-bar'
import { useRouter } from 'next/router'

type Props = {
  menuItems: MenuBarType[]
}

function MobileMenuBar(props: Props) {
  const router = useRouter()
  const { menuItems } = props

  const handleClickCategory = (path: string) => router.push(path)

  return (
    <div className="w-full">
      <ul className="flex overflow-x-auto items-center pt-1.5 pl-2">
        <li>
          <button onClick={() => router.push('/')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-slate-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </button>
        </li>
        {menuItems.map((menuItem: MenuBarType) => (
          <li
            className="whitespace-nowrap text-sm font-medium px-2 py-2"
            key={menuItem.id}
          >
            <button onClick={() => handleClickCategory(menuItem.path)}>
              {menuItem.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileMenuBar
