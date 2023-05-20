import { Container, Grid } from "@mui/material"
import { SectionTitle, SectionWrapper } from "components/ui"
import { benefits } from "./mock"
import { BenefitCard } from "./BenefitCard"

const Benefits: React.FC = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <SectionTitle>Работая с нами вы получите:</SectionTitle>

        <Grid container spacing="20px">
          {benefits.map((item, idx) => (
            <Grid key={idx} item xs={12} sm={6}>
              <BenefitCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  )
}

export { Benefits }
