import styled from "@emotion/styled"
import { BORDER_RADIUS } from "constants/borders"
import { WHITE_COLOR } from "constants/colors"

export const ManagementCardWrapper = styled.div<{ paddingBottom?: number }>`
  position: relative;
  height: 100%;
  padding: 40px;
  padding-bottom: ${({ paddingBottom }) => `${paddingBottom}px`};
  background-color: ${WHITE_COLOR};
  border-radius: ${BORDER_RADIUS};

  @media (max-width: 1024px) {
    padding: 20px;
  }
`

export const ManagementCardImage = styled.div<{ imageHeight?: number }>`
  position: relative;
  height: ${({ imageHeight }) => `${imageHeight}px`};

  @media (max-width: 1024px) {
    height: 200px;
  }

  @media (max-width: 768px) {
    height: 170px;
  }

  & img {
    object-fit: contain;
  }
`
