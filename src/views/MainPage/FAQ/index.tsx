import { Container } from "@mui/material"
import { AppAccordion } from "components/domains"
import { SectionTitle, SectionWrapper } from "components/ui"
import { faqs } from "./mock"

const FAQ: React.FC = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <SectionTitle>Часто задаваемые вопросы</SectionTitle>

        <AppAccordion dataSource={faqs} />
      </Container>
    </SectionWrapper>
  )
}

export { FAQ }
