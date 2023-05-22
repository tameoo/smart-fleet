import { Benefits } from "./Benefits"
import { Contact } from "./Contact"
import { Details } from "./Details"
import { FAQ } from "./FAQ"
import { Intro } from "./Intro"
import { Management } from "./Management"
import { Maps } from "./Maps"
import { WorkProcess } from "./WorkProcess"

const MainPage: React.FC = () => {
  return (
    <>
      <Intro />
      <Details />
      <Management />
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
