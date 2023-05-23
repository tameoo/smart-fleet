import { Typography } from "@mui/material"
import { SECONDARY_COLOR } from "constants/colors"
import Image from "next/image"
import { AdvantageImageWrapper, AdvantagesCardWrapper } from "./style"

interface IAdvantagesCardProps {
  title: string
  text: string
  icon: string
}

const AdvantagesCard: React.FC<IAdvantagesCardProps> = ({
  title,
  text,
  icon,
}) => {
  return (
    <AdvantagesCardWrapper>
      <AdvantageImageWrapper>
        <Image
          src={`/assets/icons/${icon}.svg`}
          alt="Иконка преимущества"
          width={32}
          height={32}
        />
      </AdvantageImageWrapper>

      <Typography
        variant="h6"
        fontSize={{ xs: "20px", md: "28px" }}
        marginBottom={2}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        color={SECONDARY_COLOR}
        fontWeight={400}
        fontSize={{ xs: "20px", md: "24px" }}
      >
        {text}
      </Typography>
    </AdvantagesCardWrapper>
  )
}

export { AdvantagesCard }
