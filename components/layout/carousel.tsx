import Image from 'next/image'

import { Carousel } from 'react-responsive-carousel'
import { banners } from '../../confict/banner'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Carousels = () => {
  return (
    <div className="w-full">
      <Carousel autoPlay={true} infiniteLoop={true}>
        {banners.map(banner => (
          <div key={banner.id} className={'w-full relative aspect-[3/1]'}>
            <Image
              alt={`water-truck + ${banner.id}`}
              src={banner.imageUrl}
              layout="fill"
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Carousels
