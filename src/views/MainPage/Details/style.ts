import styled from "@emotion/styled"
import { BORDER_RADIUS } from "constants/borders"
import { WHITE_COLOR } from "constants/colors"

export const DetailWrapper = styled.div<{ width: string }>`
  position: relative;
  padding: 30px 12px 30px;
  width: ${(props) => (props.width ? props.width : "auto")};
  margin-bottom: 8px;
  background-color: ${WHITE_COLOR};
  border-bottom-right-radius: ${BORDER_RADIUS};

  &:before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(to top, #e2e3e8, #fafafb);
    border-bottom-right-radius: ${BORDER_RADIUS};
  }
`
