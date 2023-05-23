import { Box, Container, Tab, Tabs, Typography } from "@mui/material"
import { SectionTitle, SectionWrapper } from "components/ui"
import { SECONDARY_COLOR } from "constants/colors"
import { MapWrapper } from "./style"
import { useState } from "react"
import { Map } from "./Map"

const Maps: React.FC = () => {
  const [value, setValue] = useState(0)

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const tabProps = (index: number) => {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    }
  }

  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <SectionTitle marginBottom={2}>Карта SmartFleet</SectionTitle>
        <Typography
          variant="h6"
          color={SECONDARY_COLOR}
          marginBottom={5}
          fontSize={{ xs: "15px", sm: "24px", md: "28px" }}
        >
          Записывайтесь в удобную для вас СТО или пункт замены масла
        </Typography>

        <Box>
          <Tabs
            TabIndicatorProps={{
              sx: {
                display: "none",
              },
            }}
            value={value}
            onChange={handleChange}
          >
            <Tab
              label={<Typography variant="body1">Алматы</Typography>}
              {...tabProps(0)}
            />
          </Tabs>

          <Map value={value} index={0}>
            <MapWrapper>
              <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3Ac41d9a17862012b0502d11097bbf585ef03e4b7d5b67d6562dde2035b2faf227&amp;source=constructor" />
            </MapWrapper>
          </Map>
        </Box>
      </Container>
    </SectionWrapper>
  )
}

export { Maps }
