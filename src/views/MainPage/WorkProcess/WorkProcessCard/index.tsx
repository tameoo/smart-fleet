import { Typography } from "@mui/material"
import { WorkProcessCardWrapper } from "./style"
import { SECONDARY_COLOR } from "constants/colors"

interface IWorkProcessCardProps {
  type: "client" | "company"
  step?: string
  title: string
  text: string
}

const WorkProcessCard: React.FC<IWorkProcessCardProps> = ({
  type,
  step,
  title,
  text,
}) => {
  return (
    <WorkProcessCardWrapper type={type}>
      {step ? (
        <Typography
          variant="h5"
          marginBottom={3}
          fontWeight={700}
          fontSize={{ xs: "24px", sm: "32px" }}
        >
          {step}
        </Typography>
      ) : null}
      <Typography
        variant="h6"
        marginBottom={2}
        lineHeight="120%"
        fontSize={{ xs: "20px", sm: "28px" }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        fontSize={{ xs: "15px", sm: "24px" }}
        lineHeight="120%"
        color={type === "company" ? SECONDARY_COLOR : undefined}
      >
        {text}
      </Typography>
    </WorkProcessCardWrapper>
  )
}

export { WorkProcessCard }
