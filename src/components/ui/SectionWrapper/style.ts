import styled from "@emotion/styled"

export const Section = styled.section<{ padding: [number, number] }>`
  padding: ${({ padding }) => {
    const [vertical, horizontal] = padding
    return `${vertical}px ${horizontal}px`
  }};

  @media (max-width: 786px) {
    padding: 40px 0;
  }
`
