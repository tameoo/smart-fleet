import { Box } from "@mui/material"

interface MapProps {
  index: number
  value: number
  children: React.ReactNode
}

const Map: React.FC<MapProps> = ({ children, value, index }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index ? <Box marginTop={2}>{children}</Box> : null}
    </div>
  )
}

export { Map }
