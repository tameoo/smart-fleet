import styled from "@emotion/styled"
import { MAIN_COLOR, SECONDARY_COLOR } from "constants/colors"

export const HeaderNav = styled.nav`
  a {
    font-size: 15px;
    line-height: 20px;
    color: ${SECONDARY_COLOR};
    transition: 0.3s color;

    &:hover {
      color: ${MAIN_COLOR};
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`
