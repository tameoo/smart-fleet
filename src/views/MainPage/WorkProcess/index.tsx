import { Container, Grid, Stack, Typography } from "@mui/material"
import { SectionTitle, SectionWrapper } from "components/ui"
import { GREEN_COLOR } from "constants/colors"
import { WorkProcessCard } from "./WorkProcessCard"
import { workProcess } from "./mock"
import { WorkProcessWrapper } from "./style"

const WorkProcess: React.FC = () => {
  return (
    <SectionWrapper padding={[40, 0]}>
      <Container maxWidth="lg">
        <WorkProcessWrapper id="workprocess">
          <SectionTitle>Процесс работ по системе Smartfleet</SectionTitle>

          <Stack gap="20px">
            <Stack direction="row" gap="20px">
              <Typography
                variant="h6"
                color={GREEN_COLOR}
                width="100%"
                fontSize={{ xs: "17px", md: "28px" }}
              >
                С Вас достаточно всего 3 шага
              </Typography>
              <Typography
                variant="h6"
                width="100%"
                fontSize={{ xs: "17px", md: "28px" }}
              >
                О работах позаботимся мы
              </Typography>
            </Stack>

            <div className="grid-container">
              {workProcess.map((process, idx) => (
                <div key={idx} className="grid-inner-container">
                  {process.map((item, idx) => (
                    <WorkProcessCard
                      key={idx}
                      type={item.step ? "client" : "company"}
                      {...item}
                    />
                  ))}
                </div>
              ))}
            </div>
          </Stack>
        </WorkProcessWrapper>
      </Container>
    </SectionWrapper>
  )
}

export { WorkProcess }
