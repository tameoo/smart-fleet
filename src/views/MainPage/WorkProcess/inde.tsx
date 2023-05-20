import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { SectionTitle, SectionWrapper } from "components/ui"
import { WorkProcessWrapper } from "./style"
import { GREEN_COLOR, PINK_COLOR } from "constants/colors"
import { WorkProcessCard } from "./WorkProcessCard"
import { workProcess } from "./mock"

const WorkProcess: React.FC = () => {
  return (
    <SectionWrapper padding={[40, 0]}>
      <Container maxWidth="lg">
        <WorkProcessWrapper>
          <SectionTitle>
            Процесс работ по системе{" "}
            <Box color={PINK_COLOR} component="span">
              Smartfleet
            </Box>
          </SectionTitle>

          <Stack gap="20px">
            <Stack direction="row" gap="20px">
              <Typography
                className="client-steps"
                variant="h6"
                color={GREEN_COLOR}
                width="100%"
                marginLeft={2}
              >
                С Вас достаточно всего 3 шага
              </Typography>
              <Typography
                variant="h6"
                className="company-steps"
                width="100%"
                marginLeft={2}
              >
                О работах позаботимся мы
              </Typography>
            </Stack>

            {workProcess.map(({ client, company }, idx) => (
              <Stack key={idx} direction="row" gap="20px">
                <Stack gap="20px" width="50%">
                  {client.map((item, idx) => (
                    <WorkProcessCard key={idx} type="client" {...item} />
                  ))}
                </Stack>

                <Stack gap="20px" width="50%">
                  {company.map((item, idx) => (
                    <WorkProcessCard key={idx} type="company" {...item} />
                  ))}
                </Stack>
              </Stack>
            ))}
          </Stack>
        </WorkProcessWrapper>
      </Container>
    </SectionWrapper>
  )
}

export { WorkProcess }
