import { Box, Container, IconButton, Typography } from "@mui/material"
import { AppSlider } from "components/domains"
import { SectionTitle, SectionWrapper } from "components/ui"
import { SECONDARY_COLOR, WHITE_COLOR } from "constants/colors"
import Image from "next/image"
import { CustomArrowProps } from "react-slick"
import { ManagementCard } from "./ManagementCard"
import { ManagementWrapper } from "./style"
import { management } from "./mock"

const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <IconButton
    size="large"
    sx={{
      backgroundColor: WHITE_COLOR,
      position: "absolute",
      top: "-70px",
      right: "50px",
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
      top: "-70px",
      right: "0px",
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

const Management: React.FC = () => {
  const sliderSettings = {
    dots: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <ManagementWrapper>
          <SectionTitle marginBottom={2}>
            Доведите работу вашего автопарка до идеала <br /> вместе с Smart
            Fleet!
          </SectionTitle>
          <Typography
            variant="h6"
            color={SECONDARY_COLOR}
            marginBottom={5}
            fontSize={{ xs: "15px", sm: "24px", md: "28px" }}
          >
            Наша IT платформа позволяет:
          </Typography>

          <AppSlider
            settings={sliderSettings}
            slides={management.map((item, idx) => (
              <Box key={idx}>
                <ManagementCard {...item} />
              </Box>
            ))}
          />
        </ManagementWrapper>
      </Container>
    </SectionWrapper>
  )
}

export { Management }
