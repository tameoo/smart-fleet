import { Box, Stack, Typography } from "@mui/material"
import { BenefitCardWrapper } from "./style"
import Image from "next/image"
import { WHITE_COLOR } from "constants/colors"

interface IBenefitCardProps {
  title: string
  withIcons?: boolean
  content: string[]
}

const BenefitCard: React.FC<IBenefitCardProps> = ({
  title,
  content,
  withIcons = false,
}) => {
  return (
    <BenefitCardWrapper>
      <Typography variant="h6" marginBottom={3} color={WHITE_COLOR}>
        {title}
      </Typography>

      <ul>
        {content.map((text, idx) => {
          return (
            <Stack
              key={idx}
              direction="row"
              alignItems="center"
              gap={1}
              marginBottom={2}
              component="li"
            >
              {withIcons ? (
                <Image
                  src="/assets/icons/done-outlined.svg"
                  alt="Иконка выполнено"
                  width={24}
                  height={24}
                />
              ) : null}

              <Typography variant="body1" color={WHITE_COLOR} fontWeight={400}>
                {text}
              </Typography>
            </Stack>
          )
        })}
      </ul>
    </BenefitCardWrapper>
  )
}

export { BenefitCard }
