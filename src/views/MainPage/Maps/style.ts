import styled from "@emotion/styled"
import { BORDER_RADIUS } from "constants/borders"

export const MapWrapper = styled.div`
  height: 560px;

  iframe {
    border: none;
    border-radius: ${BORDER_RADIUS};
    width: 100%;
    height: 100%;
  }
`
