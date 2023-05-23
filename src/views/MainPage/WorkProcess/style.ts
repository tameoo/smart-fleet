import styled from "@emotion/styled"
import { GRAY_COLOR, GREEN_COLOR, MAIN_COLOR } from "constants/colors"
import { BORDER_RADIUS } from "constants/borders"

export const WorkProcessWrapper = styled.div`
  padding: 80px 40px;
  background-color: ${GRAY_COLOR};
  border-radius: ${BORDER_RADIUS};

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  }

  .grid-inner-container {
    display: grid;
    grid-template-rows: 320px;
    grid-auto-rows: 350px;
    gap: 20px;

    @media (max-width: 1024px) {
      grid-template-rows: 1fr;
      grid-auto-rows: 1fr;
    }
  }
`
