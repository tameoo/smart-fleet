import { Section } from "./style"

interface ISectionWrapperProps {
  children: React.ReactNode
  padding?: [number, number]
}

const SectionWrapper: React.FC<ISectionWrapperProps> = ({
  children,
  padding = [80, 0],
}) => {
  return <Section padding={padding}>{children}</Section>
}

export { SectionWrapper }
