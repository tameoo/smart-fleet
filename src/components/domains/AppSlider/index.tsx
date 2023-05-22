import React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { SliderWrapper } from "./style"

interface IAppSliderProps {
  slides: any[]
  settings: any
}

const AppSlider: React.FC<IAppSliderProps> = ({ settings, slides }) => {
  return (
    <SliderWrapper>
      <Slider {...settings}>{slides}</Slider>
    </SliderWrapper>
  )
}

export { AppSlider }
