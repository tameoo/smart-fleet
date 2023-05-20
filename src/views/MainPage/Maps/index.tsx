import { Container, Typography } from "@mui/material"
import { SectionTitle, SectionWrapper } from "components/ui"
import { SECONDARY_COLOR } from "constants/colors"

const Maps: React.FC = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <SectionTitle marginBottom={2}>Карта SmartFleet</SectionTitle>
        <Typography variant="h6" color={SECONDARY_COLOR}>
          Записывайтесь в удобную для вас СТО или пункт замены масла
        </Typography>

        {/* TODO: add layouts */}
      </Container>
    </SectionWrapper>
  )
}

export { Maps }
