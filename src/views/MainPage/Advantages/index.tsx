import { Container } from "@mui/material"
import { SectionTitle, SectionWrapper } from "components/ui"
import { AdvantagesWrapper } from "./style"
import { WHITE_COLOR } from "constants/colors"
import { Grid } from "@mui/material"
import { AdvantagesCard } from "./AdvantagesCard"
import { advantages } from "./mock"

const Advantages: React.FC = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <AdvantagesWrapper id="advantages">
          <SectionTitle color={WHITE_COLOR}>
            Преимущества нашего решения
          </SectionTitle>

          <Grid container spacing="20px">
            {advantages.map((item, idx) => (
              <Grid key={idx} item xs={12} md={6}>
                <AdvantagesCard {...item} />
              </Grid>
            ))}
          </Grid>
        </AdvantagesWrapper>
      </Container>
    </SectionWrapper>
  )
}

export { Advantages }
