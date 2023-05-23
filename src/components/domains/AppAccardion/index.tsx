import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material"
import { useState } from "react"
import Image from "next/image"
import { MAIN_COLOR, SECONDARY_COLOR } from "constants/colors"

type TAccordionData = {
  id: number
  question: string
  answer: string
}

interface IAppAccordionProps {
  dataSource: TAccordionData[]
}

const AppAccordion: React.FC<IAppAccordionProps> = ({ dataSource }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const handleChange =
    (id: number) => (e: React.SyntheticEvent, newExpanded: boolean) => {
      setExpandedId(newExpanded ? id : null)
    }

  return (
    <Box>
      {dataSource.map(({ id, question, answer }) => (
        <Accordion
          key={id}
          disableGutters
          expanded={expandedId === id}
          onChange={handleChange(id)}
        >
          <AccordionSummary
            expandIcon={
              expandedId !== id ? (
                <Image
                  src="/assets/icons/plus.svg"
                  alt="Икнока плюс"
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src="/assets/icons/minus.svg"
                  alt="Икнока минус"
                  width={24}
                  height={24}
                />
              )
            }
          >
            <Typography
              variant="h5"
              color={MAIN_COLOR}
              fontSize={{ xs: "20px", sm: "28px" }}
            >
              {question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              color={SECONDARY_COLOR}
              fontSize={{ xs: "18px" }}
            >
              {answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}

export { AppAccordion }
