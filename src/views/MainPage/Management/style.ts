import styled from "@emotion/styled"
import { BORDER_RADIUS } from "constants/borders"
import { GRAY_COLOR } from "constants/colors"

export const ManagementWrapper = styled.div`
  padding: 80px 40px;
  background-color: ${GRAY_COLOR};
  border-radius: ${BORDER_RADIUS};

  .slick-list {
    padding-left: 0px !important;
  }
`
