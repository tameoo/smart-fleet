import { Typography } from "@mui/material"
import { MAIN_COLOR } from "constants/colors"

interface ISectionTitleProps {
  children: React.ReactNode
  color?: string
  marginBottom?: number
}

const SectionTitle: React.FC<ISectionTitleProps> = ({
  children,
  color = MAIN_COLOR,
  marginBottom = 5,
}) => {
  return (
    <Typography
      variant="h4"
      marginBottom={marginBottom}
      color={color}
      component="h3"
      fontSize={{ xs: "24px", sm: "32px", md: "38px", lg: "44px" }}
    >
      {children}
    </Typography>
  )
}

export { SectionTitle }
