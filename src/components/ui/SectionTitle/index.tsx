import { Typography } from "@mui/material"
import { MAIN_COLOR } from "constants/colors"

interface ISectionTitleProps {
  children: React.ReactNode
  marginBottom?: number
}

const SectionTitle: React.FC<ISectionTitleProps> = ({
  children,
  marginBottom = 5,
}) => {
  return (
    <Typography
      variant="h4"
      marginBottom={marginBottom}
      color={MAIN_COLOR}
      component="h3"
    >
      {children}
    </Typography>
  )
}

export { SectionTitle }
