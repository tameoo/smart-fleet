import { MainLayout } from "components/layouts"
import Head from "next/head"
import { MainPage } from "views"

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Fleet</title>
      </Head>

      <MainLayout>
        <MainPage />
      </MainLayout>
    </>
  )
}
