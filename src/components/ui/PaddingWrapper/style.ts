import styled from "@emotion/styled"

export const Section = styled.section<{ padding: [number, number] }>`
  padding: ${({ padding }) => {
    const [vertical, horizontal] = padding
    return `${vertical}px ${horizontal}`
  }};

  @media (max-width: 560px) {
    padding: 40px 0;
  }
`
