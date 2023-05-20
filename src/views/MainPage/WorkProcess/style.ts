import styled from "@emotion/styled"
import { GRAY_COLOR, GREEN_COLOR, MAIN_COLOR } from "constants/colors"
import { BORDER_RADIUS } from "constants/borders"

export const WorkProcessWrapper = styled.div`
  padding: 80px 40px;
  background-color: ${GRAY_COLOR};
  border-radius: ${BORDER_RADIUS};

  .client-steps {
    &:before {
      background-color: ${GREEN_COLOR};
    }
  }

  .company-steps {
    &:before {
      background-color: ${MAIN_COLOR};
    }
  }

  .client-steps,
  .company-steps {
    position: relative;

    &:before {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      top: 50%;
      transform: translateY(-50%);
      left: -15px;
    }
  }
`
