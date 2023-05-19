import { Box, Button, Container, Stack } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { HeaderNav } from "./style"

const Header: React.FC = () => {
  return (
    <header>
      <Container maxWidth="lg">
        <Box padding="20px 0">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image
              src="/assets/icons/main-logo.svg"
              alt="Главное лого"
              width={150}
              height={40}
            />
            <HeaderNav>
              {/* TODO: add links */}
              <Stack direction="row" gap={5} component="ul">
                <li>
                  <Link href="/">Преимущества</Link>
                </li>
                <li>
                  <Link href="/">Процессы работ</Link>
                </li>
                <li>
                  <Link href="/">Контакты</Link>
                </li>
              </Stack>
            </HeaderNav>

            <Button
              variant="gray"
              startIcon={
                <Image
                  src="/assets/icons/sign-in.svg"
                  alt="Вход"
                  width={16}
                  height={16}
                />
              }
            >
              Личный кабинет
            </Button>
          </Stack>
        </Box>
      </Container>
    </header>
  )
}

export { Header }
