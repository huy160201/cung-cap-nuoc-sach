export type HomePage = {
  categories: CategoryHomePage[]
  highlights: HighlightHomePage[]
  latest: LatestHomePage[]
  mostView: MostViewHomePage[]
  posts: PostHomePage[]
}

export type CategoryHomePage = {
  allowDisplay: number
  allowDisplayHomeBox: number
  allowDisplayHomeBoxPriority: number
  allowDisplayPriority: number
  createdAt: string
  id: number
  isActive: number
  name: string
  parentId: number
  type: string
  updatedAt: string
  children: CategoryChildHomePage[]
}

export type CategoryChildHomePage = {
  allowDisplay: number
  allowDisplayHomeBox: number
  allowDisplayHomeBoxPriority: number
  allowDisplayPriority: number
  createdAt: string
  id: number
  isActive: number
  name: string
  parentId: number
  type: string
  updatedAt: string
}

export type HighlightHomePage = {
  author: string
  description: string
  id: number
  imageUrl: string
  mainCategoryId: number
  publishedAt: string
  subTitle: string
  title: string
  type: number
}

export type LatestHomePage = {
  id: number
  title: string
  type: number
}

export type MostViewHomePage = {
  id: number
  publishedAt: string
  title: string
  type: number
  viewCount: number
}

export type PostHomePage = {
  author: string | null
  description: string | null
  id: number
  imageUrl: string | null
  mainCategoryId: number
  publishedAt: string
  subTitle: string | null
  title: string
  type: number
}
