import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { SectionTitle, SectionWrapper } from "components/ui"
import { ContactWrapper } from "./style"
import { WHITE_COLOR } from "constants/colors"

interface IContactProps {
  variant: "upper" | "lower"
}

const Contact: React.FC<IContactProps> = ({ variant }) => {
  return (
    <SectionWrapper padding={[40, 0]}>
      <Container maxWidth="lg">
        <ContactWrapper id="contacts">
          {variant === "lower" ? (
            <Box textAlign="center">
              <SectionTitle color={WHITE_COLOR}>
                Упрощаем процесс работы автопарка <br /> с помощью цифровизацию
              </SectionTitle>

              <Button
                variant="violet"
                href="https://wa.me/+77753220767"
                target="_blank"
                rel="noreferrer"
              >
                Оставить заявку
              </Button>
            </Box>
          ) : (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box width="50%">
                <SectionTitle color={WHITE_COLOR} marginBottom={1}>
                  Оставьте контакты
                </SectionTitle>

                <Typography variant="h6" color={WHITE_COLOR} fontWeight={400}>
                  Обсудим специфику вашего автопарка и <br /> подберем
                  подходящее решение
                </Typography>
              </Box>

              <Box width="50%" textAlign="center">
                <Button
                  variant="violet"
                  href="https://wa.me/+77753220767"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: "60%",
                  }}
                >
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
