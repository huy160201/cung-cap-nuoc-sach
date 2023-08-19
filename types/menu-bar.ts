export type Children = {
  id: number
  path: string
  name: string
}

export type MenuBarType = {
  id: number
  name: string
  path: string
  children: Children[]
}

export type MenuResponse = {
  categories: MenuBarType[]
}
