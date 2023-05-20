import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { SectionWrapper } from "components/ui"
import { ContactWrapper } from "./style"
import { WHITE_COLOR } from "constants/colors"

interface IContactProps {
  variant: "upper" | "lower"
}

const Contact: React.FC<IContactProps> = ({ variant }) => {
  return (
    <SectionWrapper padding={[40, 0]}>
      <Container maxWidth="lg">
        <ContactWrapper>
          {variant === "lower" ? (
            <Box textAlign="center">
              <Typography
                variant="h4"
                marginBottom={5}
                color={WHITE_COLOR}
                fontWeight={500}
              >
                Упрощаем процесс работы автопарка <br /> с помощью цифровизацию
              </Typography>

              {/* TODO: add link */}
              <Button variant="violet" href="">
                Оставить заявку
              </Button>
            </Box>
          ) : (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h4"
                  marginBottom={1}
                  color={WHITE_COLOR}
                  fontWeight={500}
                >
                  Оставьте контакты
                </Typography>

                <Typography variant="h6" color={WHITE_COLOR} fontWeight={400}>
                  Обсудим специфику вашего автопарка и <br /> подберем
                  подходящее решение
                </Typography>
              </Box>

              {/* TODO: add link */}
              <Box width="30%">
                <Button variant="violet" href="" fullWidth>
                  Оставить заявку
                </Button>
              </Box>
            </Stack>
          )}
        </ContactWrapper>
      </Container>
    </SectionWrapper>
  )
}

export { Contact }
