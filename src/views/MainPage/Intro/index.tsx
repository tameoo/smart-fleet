import { Box, Button, Container, IconButton, Typography } from "@mui/material"
import { AppSlider } from "components/domains"
import { SectionWrapper } from "components/ui"
import Image from "next/image"
import { IntroWrapper } from "./style"
import { slidesContent } from "./mock"
import { CustomArrowProps } from "react-slick"
import { WHITE_COLOR } from "constants/colors"

const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <IconButton
    size="large"
    sx={{
      backgroundColor: WHITE_COLOR,
      position: "absolute",
      top: "50%",
      translate: "transformY(-50%)",
      left: "20px",
      zIndex: 1000,
      "&:hover": {
        backgroundColor: WHITE_COLOR,
      },
    }}
    onClick={onClick}
  >
    <Image
      src="/assets/icons/chevron-left.svg"
      alt="Иконка слайдера"
      width={16}
      height={16}
    />
  </IconButton>
)

const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <IconButton
    size="large"
    sx={{
      backgroundColor: WHITE_COLOR,
      position: "absolute",
      top: "50%",
      translate: "transformY(-50%)",
      right: "20px",
      zIndex: 1000,
      "&:hover": {
        backgroundColor: WHITE_COLOR,
      },
    }}
    onClick={onClick}
  >
    <Image
      src="/assets/icons/chevron-right.svg"
      alt="Иконка слайдера"
      width={16}
      height={16}
    />
  </IconButton>
)

const Intro: React.FC = () => {
  const renderSlides = slidesContent.map(
    ({ id, title, subtitle, image, imageWrapper, button, wrapperStyle }) => (
      <Box
        key={id}
        padding="10px"
        height={{ sm: "580px", md: "660px", lg: "700px" }}
      >
        <IntroWrapper style={{ ...wrapperStyle }}>
          <Box>
            <Typography
              variant="h4"
              fontSize={{ sm: "24px", md: "32px", lg: "44px" }}
              component="h1"
              marginBottom={3}
              style={{ ...title.style }}
              dangerouslySetInnerHTML={{ __html: title.content }}
            />

            <Typography
              variant="body2"
              marginBottom={4}
              fontSize={{ sm: "18px", lg: "24px" }}
              style={{ ...subtitle.style }}
              dangerouslySetInnerHTML={{ __html: subtitle.content }}
            />

            <Box>
              <Button variant="contained" style={{ ...button.style }}>
                {button.content}
              </Button>
            </Box>
          </Box>

          <Box position="relative" className="img-xl">
            <Image
              src="/assets/images/intro-project.png"
              style={{ objectFit: "contain" }}
              alt="Фоновая картика"
              width={1100}
              height={200}
              priority
            />
          </Box>

          <Box position="relative" className="img-lg">
            <Image
              src="/assets/images/intro-project-md.png"
              style={{ objectFit: "contain" }}
              alt="Фоновая картика"
              width={784}
              height={220}
              priority
            />
          </Box>

          <Box position="relative" className="img-md">
            <Image
              src="/assets/images/intro-project-md.png"
              style={{ objectFit: "contain" }}
              alt="Фоновая картика"
              width={580}
              height={200}
              priority
            />
          </Box>
        </IntroWrapper>
      </Box>
    )
  )

  const sliderSettings = {
    dots: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <SectionWrapper padding={[20, 0]}>
      <Container maxWidth="lg">
        <AppSlider settings={sliderSettings} slides={renderSlides} />
      </Container>
    </SectionWrapper>
  )
}

export { Intro }
