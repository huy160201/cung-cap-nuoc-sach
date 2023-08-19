import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { MenuBarType } from '../../types/menu-bar'
import FooterBar from '../utilities/footerBar'
import FooterMenu from '../utilities/footerMenu'
import HeaderBar from '../utilities/headerBar'
import MenuBar from '../utilities/menuBar'
import MobileHeaderBar from '../utilities/mobileHeaderBar'
import MobileMenuBar from '../utilities/mobileMenuBar'
import MobileNavBar from '../utilities/mobileNavBar'
import SocialHeader from '../utilities/socialHeader'
import Image from 'next/image'
import Carousel from './carousel'
import PhoneContact from './phoneContact'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const menuItems: MenuBarType[] = [
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
      name: 'Dịch vụ',
      path: '/',
      children: []
    },
    {
      id: 3,
      name: 'Liên hệ',
      path: '/contact',
      children: []
    }
  ]
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    if (window.innerWidth < 1024) setIsMobile(true)
  }, [])

  return (
    <>
      <Head>
        <title>Cung cấp nước sạch</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        {!isMobile ? (
          <>
            {/* Social Header Component */}
            <div className="bg-transparent w-screen flex items-center justify-center border-b">
              <div className={'max-w-6xl w-full'}>
                <SocialHeader />
              </div>
            </div>
            {/* Header Logo & Banner Component */}
            <div className="bg-transparent w-screen flex items-center justify-center z-50">
              <div className={'max-w-6xl w-full'}>
                <HeaderBar />
              </div>
            </div>
            {/* Menu Bar Component */}
            <div className="bg-transparent w-screen flex items-center justify-center sticky top-0 bg-red-600 z-50">
              <div className={'max-w-6xl w-full'}>
                <MenuBar menuItems={menuItems} />
              </div>
            </div>
            <div className="bg-transparent w-screen flex items-center justify-center z-50">
              <div className={'max-w-6xl w-full'}>
                <Carousel />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Mobile Header Bar Component */}
            <div className="bg-transparent w-screen flex items-center justify-center sticky top-0 border-b z-50 bg-white z-50">
              <div className={'max-w-6xl w-full'}>
                <MobileHeaderBar menuItems={menuItems} />
              </div>
            </div>
            {/* Mobile Menu Bar Component */}
            <div className="bg-transparent w-screen flex items-center justify-center">
              <div className={'max-w-6xl w-full'}>
                <MobileMenuBar menuItems={menuItems} />
              </div>
            </div>
            <div className="bg-transparent w-screen flex items-center justify-center border-b z-50 bg-white z-50">
              <div className={'max-w-6xl w-full'}>
                <Carousel />
              </div>
            </div>
          </>
        )}
        {/* Index Main Component */}
        {children}
        {/* Footer Menu */}
        <div className="bg-transparent w-screen hidden md:flex items-center justify-center">
          <div className={'max-w-6xl w-full'}>
            <FooterMenu menuItems={menuItems} />
          </div>
        </div>
        {/* Footer Component */}
        <div className="bg-transparent w-screen flex items-center justify-center">
          <div className={'max-w-6xl w-full'}>
            <FooterBar />
          </div>
        </div>
        <PhoneContact />
      </main>
    </>
  )
}
