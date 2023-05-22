import styled from "@emotion/styled"
import { MAIN_COLOR } from "constants/colors"

export const SliderWrapper = styled.div`
  .slick-dots {
    li button:before,
    li.slick-active button:before {
      color: ${MAIN_COLOR};
      font-size: 12px;
    }
  }
`
