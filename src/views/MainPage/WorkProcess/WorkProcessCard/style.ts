import styled from "@emotion/styled"
import { BORDER_RADIUS } from "constants/borders"
import { GREEN_COLOR, MAIN_COLOR, WHITE_COLOR } from "constants/colors"

export const WorkProcessCardWrapper = styled.div<{
  type: "client" | "company"
}>`
  height: ${(props) => (props.type === "company" ? "100%" : "auto")};
  padding: 40px;
  border-radius: ${BORDER_RADIUS};
  background-color: ${(props) =>
    props.type === "client" ? GREEN_COLOR : WHITE_COLOR};
  color: ${(props) => (props.type === "client" ? WHITE_COLOR : MAIN_COLOR)};
`
