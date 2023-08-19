import type { ReactElement } from 'react'
import React, {useState, useEffect} from 'react'

import Index from '../components/layout'

const Page = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const titleClassName = 'text-blue-500 font-bold text-xl'

    useEffect(() => {
        if (window.innerWidth < 1024) setIsMobile(true)
    }, [])

    return (
        <div className="border-b-4 border-red-600 pb-8">
            <div className="w-screen flex items-center justify-center">
                <div className="max-w-6xl w-full">
                    <div className={`${!isMobile && 'flex'}`}>
                        <div className="m-4">
                            <div className={titleClassName}>Công ty TNHH Một thành viên xây dựng môi trường đô
                                thị số 1 Hà Nội</div><br/>
                            <div className='leading-7'>
                                <b>Tên đầy đủ: </b> <span>Công ty TNHH Một thành viên xây dựng môi trường đô
                                    thị số 1 Hà Nội</span><br />
                                <b>Điện thoại: </b> <span>098 828 2335 - 035 447 9999</span><br />
                                <b>Địa chỉ liên hệ:</b> <span>Thôn Hữu Cước - Xã Liên Hồng - Huyện Đan Phượng - Hà Nội</span>
                            </div>
                        </div>
                        <div className={`${isMobile && 'flex w-full justify-center'}`}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7597900997316!2d105.70091322412077!3d21.12214078456694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134ff5bad2fa18d%3A0xa885edd17766604e!2zSOG7r3UgQ8aw4bubYywgTGnDqm4gSOG7k25nLCDEkGFuIFBoxrDhu6NuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1692411143017!5m2!1svi!2s"
                                width={!isMobile ? '500' : '350'}
                                height={!isMobile ? '400' : '250'}
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return <Index>{page}</Index>
}

export default Page
