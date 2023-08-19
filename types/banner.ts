type Banner = {
  id: number
  categoryId: number
  name: string
  imageBanner: string
  link: string
  bannerStyle: string
  bannerType: string
}

export type Banners = {
  cENTER: Banner[]
  hEADER: Banner[]
  mOVELEFT: Banner[]
  mOVERIGHT: Banner[]
  rIGHT: Banner[]
}
