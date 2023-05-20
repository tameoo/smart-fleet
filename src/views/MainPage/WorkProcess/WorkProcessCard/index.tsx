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
        <Typography variant="h5" marginBottom={2} fontWeight={700}>
          {step}
        </Typography>
      ) : null}
      <Typography variant="h6" marginBottom={1}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        color={type === "company" ? SECONDARY_COLOR : undefined}
      >
        {text}
      </Typography>
    </WorkProcessCardWrapper>
  )
}

export { WorkProcessCard }
