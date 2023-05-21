import { Container } from "@mui/material"
import { AppAccordion } from "components/domains"
import { SectionTitle, SectionWrapper } from "components/ui"

const FAQ: React.FC = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <SectionTitle>Часто задаваемые вопросы</SectionTitle>

        {/* TODO: change datasourse  */}
        <AppAccordion
          dataSource={[
            {
              id: 1,
              question: "Как заключается договор?",
              answer:
                "Договор заключается индивидуально с каждым клиентом в зависимости от моделей авто, после предварительной встречи для согласования условий",
            },
            {
              id: 2,
              question: "Договор подписан. Что после договора?",
              answer:
                "После осуществления всех процедур ознакомления и подписания договора заказчику предоставляется доступ в личный кабинет и все спектры услуг покрываемые сервисами Lenkrad",
            },
            {
              id: 3,
              question: "Насколько сложные работы могут проводиться? ",
              answer:
                "SmartFleet покрывает все имеющиеся спектры услуг по обслуживанию и ремонту автомобилей",
            },
          ]}
        />
      </Container>
    </SectionWrapper>
  )
}

export { FAQ }
