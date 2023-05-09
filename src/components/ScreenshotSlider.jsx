import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function ScreenshotSlider({ screenshots, trailer }) {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  }

  return (
    <Slider {...sliderSettings}>
      {trailer && (
        <div>
          <video src={trailer} controls></video>
        </div>
      )}
      {screenshots.map((screenshot, index) => (
        <div key={index}>
          <img src={screenshot} alt={`Screenshot ${index + 1}`} />
        </div>
      ))}
    </Slider>
  )
}
