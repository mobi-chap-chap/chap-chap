import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./carousel.css"
import { FC } from "react"
import { ChapCarouselProps, Slide } from "../type/components.type"

const ChapCarousel: FC<ChapCarouselProps> = ({ Slides }) => {
  // slick-slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  }

  return (
    <div>
      <Slider {...settings} className="slick-slider">
        {Slides.map((slide: Slide, index: number) => (
          <div key={`slide-${index + 1}`}>
            <img src={slide} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ChapCarousel
