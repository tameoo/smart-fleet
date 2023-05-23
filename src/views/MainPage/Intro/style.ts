import styled from "@emotion/styled"
import { BORDER_RADIUS } from "constants/borders"

export const IntroWrapper = styled.div`
  padding: 80px 80px 0px;
  text-align: center;
  border-radius: ${BORDER_RADIUS};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    padding: 40px 40px 0;
  }

  .img-xl {
    @media (max-width: 1200px) {
      display: none;
    }
  }

  .img-lg {
    display: none;
    @media (min-width: 860px) and (max-width:1200px) {
      display: block;
    }​
  }
  
  .img-md {
    display: none;
    @media (min-width: 700px) and (max-width:860px) {
      display: block;
    }​
  }
`
