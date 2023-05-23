import styled from "@emotion/styled"
import { BORDER_RADIUS } from "constants/borders"
import { WHITE_COLOR } from "constants/colors"

export const ManagementCardWrapper = styled.div`
  position: relative;
  height: 100%;
  padding: 40px;
  background-color: ${WHITE_COLOR};
  border-radius: ${BORDER_RADIUS};
  width: 520px;
  height: 500px;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`

export const ManagementCardImage = styled.div`
  position: relative;

  & img {
    object-fit: contain;
  }
`
