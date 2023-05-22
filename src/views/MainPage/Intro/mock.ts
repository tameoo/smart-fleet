import {
  MAIN_COLOR,
  PINK_COLOR,
  VIOLET_COLOR,
  WHITE_COLOR,
} from "constants/colors"

type TIntroSlide = {
  id: number
  title: {
    content: string
    style?: React.CSSProperties
  }
  subtitle: {
    content: string
    style?: React.CSSProperties
  }
  button: {
    content: string
    style?: React.CSSProperties
  }
  image: {
    content: string
    style?: React.CSSProperties
  }
  wrapperStyle: React.CSSProperties
}

export const slidesContent: TIntroSlide[] = [
  {
    id: 1,
    title: {
      content:
        "Единое решение для ремонта и обслуживания <br/> корпаративного автопарка любой сложности, <br/> по всему Казахстану",
    },
    subtitle: {
      content:
        "Подберем комплекс технического обслуживания любой сложности <br/> подспецифику вашего автопарка по всему Казахстану",
    },
    button: {
      content: "Подобрать решение",
      style: {
        backgroundColor: MAIN_COLOR,
        color: WHITE_COLOR,
      },
    },
    image: {
      content: "/assets/images/intro.png",
    },
    wrapperStyle: {
      backgroundColor: PINK_COLOR,
      color: WHITE_COLOR,
    },
  },
  {
    id: 2,
    title: {
      content: "Ремонт и обслуживание <br/> корпоративного автопарка",
    },
    subtitle: {
      content:
        "Подберем комплекс технического обслуживания любой сложности <br/> под специфику вашего автопарка по всему Казахстану",
    },
    button: {
      content: "Подключить",
      style: {
        backgroundColor: VIOLET_COLOR,
        color: WHITE_COLOR,
      },
    },
    image: {
      content: "/assets/images/intro.png",
    },
    wrapperStyle: {
      backgroundColor: MAIN_COLOR,
      color: WHITE_COLOR,
    },
  },
]
