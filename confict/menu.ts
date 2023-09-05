import { MenuBarType } from '../types/menu-bar'

export const menuItems: MenuBarType[] = [
  {
    id: 0,
    name: 'Trang chủ',
    path: '/',
    children: []
  },
  {
    id: 1,
    name: 'Giới thiệu',
    path: '/introduce',
    children: []
  },
  {
    id: 2,
    name: 'Khu vực',
    path: '/locations',
    children: [
      {
        id: 21,
        name: 'Cầu Giấy',
        path: '/districts/cau-giay'
      },
      {
        id: 22,
        name: 'Đan Phượng',
        path: '/districts/dan-phuong'
      },
      {
        id: 23,
        name: 'Đống Đa',
        path: '/districts/dong-da'
      },
      {
        id: 24,
        name: 'Gia Lâm',
        path: '/districts/gia-lam'
      },
      {
        id: 25,
        name: 'Hoàng Mai',
        path: '/districts/hoang-mai'
      },
      {
        id: 26,
        name: 'Long Biên',
        path: '/districts/long-bien'
      },
      {
        id: 27,
        name: 'Sóc Sơn',
        path: '/districts/soc-son'
      },
      {
        id: 28,
        name: 'Tây Hồ',
        path: '/districts/tay-ho'
      },
      {
        id: 29,
        name: 'Thanh Xuân',
        path: '/districts/thanh-xuan'
      }
    ]
  },
  {
    id: 3,
    name: 'Liên hệ',
    path: '/contact',
    children: []
  }
]

export const districts = [
  {
    name: 'Cầu giấy',
    url: '/districts/cau-giay'
  },
  {
    name: 'Đan Phượng',
    url: '/districts/dan-phuong'
  },
  {
    name: 'Đống Đa',
    url: '/districts/dong-da'
  },
  {
    name: 'Gia Lâm',
    url: '/districts/gia-lam'
  },
  {
    name: 'Hoàng Mai',
    url: '/districts/hoang-mai'
  },
  {
    name: 'Long Biên',
    url: '/districts/long-bien'
  },
  {
    name: 'Sóc Sơn',
    url: '/districts/soc-son'
  },
  {
    name: 'Tây Hồ',
    url: '/districts/tay-ho'
  },
  {
    name: 'Thanh Xuân',
    url: '/districts/thanh-xuan'
  }
]
