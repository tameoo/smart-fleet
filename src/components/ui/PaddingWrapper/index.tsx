import { Section } from "./style"

interface IPaddingWrapperProps {
  children: React.ReactNode
  padding?: [number, number]
}

const PaddingWrapper: React.FC<IPaddingWrapperProps> = ({
  children,
  padding = [80, 0],
}) => {
  return <Section padding={padding}>{children}</Section>
}

export { PaddingWrapper }
