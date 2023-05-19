import { Footer, Header } from "components/blocks"

interface IMainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export { MainLayout }
