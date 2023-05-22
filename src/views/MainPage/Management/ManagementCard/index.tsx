import { Box, Typography } from "@mui/material"
import { ManagementCardImage, ManagementCardWrapper } from "./style"
import { MAIN_COLOR, SECONDARY_COLOR } from "constants/colors"
import Image from "next/image"

interface IManagementCardProps {
  title: string
  subtitle: string
  image: string
  paddingBottom?: number
  imageHeight?: number
}

const ManagementCard: React.FC<IManagementCardProps> = ({
  title,
  subtitle,
  image,
  paddingBottom,
  imageHeight = 250,
}) => {
  return (
    <ManagementCardWrapper paddingBottom={paddingBottom}>
      <Box marginBottom={3}>
        <Typography variant="h5" marginBottom={2} color={MAIN_COLOR}>
          {title}
        </Typography>
        <Typography variant="body1" color={SECONDARY_COLOR}>
          {subtitle}
        </Typography>
      </Box>

      <ManagementCardImage imageHeight={imageHeight}>
        <Image
          src={image}
          alt="Картинка преимущества"
          fill
          sizes="(min-width: 768px) 33vw,(min-width: 1024px) 50vw, 100vw"
        />
      </ManagementCardImage>
    </ManagementCardWrapper>
  )
}

export { ManagementCard }
