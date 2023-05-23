import styled from "@emotion/styled"
import { BORDER_RADIUS } from "constants/borders"

export const AdvantagesCardWrapper = styled.div`
  background-color: #fafafa;
  border-radius: ${BORDER_RADIUS};
  padding: 40px;
  height: 100%;
`

export const AdvantageImageWrapper = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 8px 15px rgba(0, 16, 61, 0.05);
  border-radius: 12px;
  margin-bottom: 24px;
`
