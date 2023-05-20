import { Box, Container, Stack, Typography } from "@mui/material"
import { SectionWrapper } from "components/ui"
import { BORDER_RADIUS } from "constants/borders"
import { GRAY_COLOR, PINK_COLOR, SECONDARY_COLOR } from "constants/colors"
import Image from "next/image"
import { details } from "./mock"
import { DetailWrapper } from "./style"

const Details: React.FC = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Stack direction="row" gap="20px">
          <Box
            width="50%"
            bgcolor={GRAY_COLOR}
            borderRadius={BORDER_RADIUS}
            padding={5}
            height="fit-content"
          >
            <Typography variant="h5" component="h2">
              SmartFleet - &nbsp;
              <Box color={PINK_COLOR} component="span">
                платформа для оптимизации ресурсов и работы автопарков
              </Box>
              &nbsp; с контролем ремонта, автоматизацией документооборота и
              анализом данных
            </Typography>
          </Box>

          <Box width="50%">
            {details.map(({ icon, title, text, width }, idx) => (
              <DetailWrapper key={idx} width={width}>
                <Stack direction="row" justifyContent="space-between" gap={5}>
                  <Stack direction="row" alignItems="center" gap={2}>
                    <Image
                      src={`/assets/icons/${icon}.svg`}
                      alt="Картинка"
                      width={24}
                      height={24}
                    />
                    <Typography variant="h4">{title}</Typography>
                  </Stack>

                  <Typography variant="body1" color={SECONDARY_COLOR}>
                    {text}
                  </Typography>
                </Stack>
              </DetailWrapper>
            ))}
          </Box>
        </Stack>
      </Container>
    </SectionWrapper>
  )
}

export { Details }
