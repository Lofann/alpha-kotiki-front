import SurveyCards from "../types/survey-cards";

//Моковые данные для превью-карточек с опросами
export const surveys: SurveyCards = [
  {
    id: '0',
    name: 'Молоко',
    description: 'Добро пожаловать! Этот опрос призван изучить предпочтения и привычки потребления молока среди населения. Мы заинтересованы в том, как часто вы употребляете молоко, какой вид молока предпочитаете (обычное, обезжиренное, соевое и т. д.), а также в ваших привычках по употреблению молочной продукции в целом. Нам важно понять, какие факторы влияют на ваши предпочтения и восприятие молока.Ваши ответы помогут нам лучше понять предпочтения и потребности наших потребителей и развивать более релевантные продукты и услуги. Спасибо за участие!',
    completionTimeLimit: 25,
    price: 100,
    questions: [
      {
        id: '0',
        name: 'Какое молоко вы чаще всего покупаете?',
        tooltip: '*Выберите один или несколько ответов',
        type: 'DropDownList',
        isRequired: true,
        variables: ['Простоквашино', 'Домик в деревне', 'Кунгурское'],
      },
      {
        id: '1',
        name: 'Вы пробовали молоко фирмы «Первый вкус»?',
        type: 'RadioButton',
        isRequired: true,
        variables: ['Да', 'Нет', 'В нашем городе нет такой марки', 'Впервые слышу'],
      },
      {
        id: '2',
        name: 'Как часто вы пьете молоко?',
        type: 'Checkbox',
        isRequired: true,
        variables: ['Один раз в день', 'Один раз в неделю', 'Не пью молоко в чистом виде'],
      }
    ]
  },
  {
    id: '1',
    name: 'Программирование',
    description: 'Опрос на тему программирования предназначен для понимания уровня знаний и навыков участников в области IT. Ответы помогут определить, какие технологии наиболее востребованы, а также определить области, где участники хотели бы получить дополнительное образование.',
    completionTimeLimit: 15,
    price: 200,
    questions: [
      {
        id: '0',
        name: 'Вопрос 1?',
        tooltip: '*Выберите один или несколько ответов',
        type: 'Checkbox',
        isRequired: true,
        variables: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'],
      },
      {
        id: '1',
        name: 'Вопрос 2?',
        type: 'RadioButton',
        isRequired: true,
        variables: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      }
    ]
  },
  {
    id: '2',
    name: 'Кошки или собаки',
    description: 'Этот опрос направлен на исследование предпочтений людей в выборе домашних животных. Ответы могут дать представление о том, какие характеристики и качества важнее для потенциальных владельцев кошек и собак.',
    completionTimeLimit: 30,
    price: 150,
    questions: [
      {
        id: '0',
        name: 'Вопрос 1?',
        tooltip: '*Выберите один или несколько ответов',
        type: 'Checkbox',
        isRequired: true,
        variables: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'],
      },
      {
        id: '1',
        name: 'Вопрос 2?',
        type: 'RadioButton',
        isRequired: true,
        variables: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      }
    ]
  },
  {
    id: '3',
    name: 'Нумерология',
    description: 'Опрос по нумерологии позволяет узнать мнение людей о связи между числами и человеческими характеристиками. Ответы помогут определить, насколько широко признаются и используются нумерологические концепции в повседневной жизни.',
    completionTimeLimit: 25,
    price: 250,
    questions: [
      {
        id: '0',
        name: 'Вопрос 1?',
        tooltip: '*Выберите один или несколько ответов',
        type: 'Checkbox',
        isRequired: true,
        variables: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'],
      },
      {
        id: '1',
        name: 'Вопрос 2?',
        type: 'RadioButton',
        isRequired: true,
        variables: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      }
    ]
  },
  {
    id: '4',
    name: 'Лучший институт',
    description: 'Этот опрос призван определить мнение людей о лучших учебных заведениях в их городе или стране. Ответы помогут выявить ключевые факторы, которые важен для потенциальных студентов при выборе университета или колледжа.',
    completionTimeLimit: 25,
    price: 400,
    questions: [
      {
        id: '0',
        name: 'Вопрос 1?',
        tooltip: '*Выберите один или несколько ответов',
        type: 'Checkbox',
        isRequired: true,
        variables: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'],
      },
      {
        id: '1',
        name: 'Вопрос 2?',
        type: 'RadioButton',
        isRequired: true,
        variables: ['Ответ 1', 'Ответ 2', 'Ответ 3'],
      }
    ]
  }
]
