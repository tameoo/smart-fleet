import {
  Container,
  Stack,
  Typography,
  Link as MuiLink,
  Box,
} from "@mui/material"
import { FooterWrapper } from "./style"
import { PaddingWrapper } from "components/ui"
import Image from "next/image"
import Link from "next/link"
import { WHITE_COLOR } from "constants/colors"

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <PaddingWrapper>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap={3}
            marginBottom={10}
          >
            <Image
              src="/assets/icons/secondary-logo.svg"
              alt="Главное лого"
              width={280}
              height={80}
            />

            <Box maxWidth="365px">
              <Typography
                variant="body1"
                color={WHITE_COLOR}
                fontSize={18}
                marginBottom={2}
              >
                <strong>ТОО “SmartFleet”</strong> <br />
                БИН 180540020255 <br />
                Юр. адрес: РК, г.Алматы, Бостандыкский район, ул. Егизбаева
                д.7/7 офис 105
              </Typography>

              <Link href="tel: + 7 707 456 7812" passHref legacyBehavior>
                <MuiLink color={WHITE_COLOR} underline="none">
                  <Typography variant="body1" fontSize={18}>
                    + 7 707 456 78 12
                  </Typography>
                </MuiLink>
              </Link>
              <Link
                href="mailto:  smartfleet.kz@gmail.com"
                passHref
                legacyBehavior
              >
                <MuiLink color={WHITE_COLOR} underline="none">
                  <Typography variant="body1" fontSize={18}>
                    smartfleet.kz@gmail.com
                  </Typography>
                </MuiLink>
              </Link>
            </Box>
          </Stack>

          <Stack direction="row" gap={5}>
            <Typography variant="body1" color={WHITE_COLOR} fontSize={18}>
              2023 (c) Все права защищены
            </Typography>

            {/* TODO: add links */}
            <Link href="/" passHref legacyBehavior>
              <MuiLink color={WHITE_COLOR}>
                <Typography variant="body1" fontSize={18}>
                  Политика конфеденциальности
                </Typography>
              </MuiLink>
            </Link>

            <Link href="/" passHref legacyBehavior>
              <MuiLink color={WHITE_COLOR}>
                <Typography variant="body1" fontSize={18}>
                  Публичная оферта
                </Typography>
              </MuiLink>
            </Link>
          </Stack>
        </PaddingWrapper>
      </Container>
    </FooterWrapper>
  )
}

export { Footer }
