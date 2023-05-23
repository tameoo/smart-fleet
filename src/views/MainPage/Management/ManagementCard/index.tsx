import { Box, Typography } from "@mui/material"
import { ManagementCardImage, ManagementCardWrapper } from "./style"
import { MAIN_COLOR, SECONDARY_COLOR } from "constants/colors"
import Image from "next/image"

interface IManagementCardProps {
  title: string
  subtitle: string
  image: string
  imageWrapper: React.CSSProperties
}

const ManagementCard: React.FC<IManagementCardProps> = ({
  title,
  subtitle,
  image,
  imageWrapper,
}) => {
  return (
    <ManagementCardWrapper>
      <Typography
        variant="h5"
        marginBottom={2}
        color={MAIN_COLOR}
        fontSize={{ xs: "20px", sm: "28px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color={SECONDARY_COLOR}
        fontSize={{ xs: "15px", sm: "18px" }}
      >
        {subtitle}
      </Typography>

      <ManagementCardImage style={{ ...imageWrapper }}>
        <Image src={image} alt="Картинка преимущества" fill />
      </ManagementCardImage>
    </ManagementCardWrapper>
  )
}

export { ManagementCard }
