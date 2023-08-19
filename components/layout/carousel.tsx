import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'

const Carousel = () => {
    const banners = [
        {
            id: 1,
            imageUrl: '/water-trucks.jpg'
        },
        {
            id: 2,
            imageUrl: '/white-truck.jpg'
        }
    ]

    return (
        <div className='w-full'>
            <Swiper
                slidesPerView={1}
                autoplay={{
                    delay: 3000
                }}
                loop={true}
                pagination={{
                    dynamicBullets: true
                }}
                modules={[Autoplay, Pagination]}
            >
                {banners.map(banner => (
                    <SwiperSlide key={banner.id} className="mb-6">
                        <div className={'w-full relative aspect-[3/1]'}>
                            <Image
                                src={banner.imageUrl}
                                layout='fill'
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel