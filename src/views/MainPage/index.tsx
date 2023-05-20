import { Benefits } from "./Benefits"
import { Contact } from "./Contact"
import { Maps } from "./Maps"
import { FAQ } from "./FAQ"
import { WorkProcess } from "./WorkProcess/inde"
import { Details } from "./Details"

const MainPage: React.FC = () => {
  return (
    <>
      <Details />
      <Contact variant="upper" />
      <WorkProcess />
      <Benefits />
      <Maps />
      <Contact variant="lower" />
      <FAQ />
    </>
  )
}

export { MainPage }
