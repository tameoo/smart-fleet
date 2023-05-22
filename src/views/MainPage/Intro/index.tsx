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
  // TODO: image quality
  const renderSlides = slidesContent.map(
    ({ id, title, subtitle, image, button, wrapperStyle }) => (
      <Box key={id} padding="10px">
        <IntroWrapper style={{ ...wrapperStyle }}>
          <Typography
            variant="h4"
            component="h1"
            marginBottom={3}
            style={{ ...title.style }}
            dangerouslySetInnerHTML={{ __html: title.content }}
          />

          <Typography
            variant="body2"
            marginBottom={4}
            style={{ ...subtitle.style }}
            dangerouslySetInnerHTML={{ __html: subtitle.content }}
          />

          <Box marginBottom={5}>
            <Button variant="contained" style={{ ...button.style }}>
              {button.content}
            </Button>
          </Box>

          <Box flex={1} height="100%" position="relative">
            <Image
              src={image.content}
              style={{ objectFit: "contain", ...image.style }}
              alt="Фоновая картика"
              fill
              sizes="(min-width: 768px) 33vw,(min-width: 1024px) 50vw, 100vw"
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
