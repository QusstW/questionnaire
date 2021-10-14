const frontend = [
  {
    type: "frontend",
    question: "Начнём с простого, div от span отличишь?",
    answers: [
      {
        answer: "Естественно, первый для контейнеров, второй для текста",
        value: 15,
      },
      { answer: "Код пишут компьютеры, пусть они и отличают", value: 10 },
      { answer: "Думаю, что да", value: -5 },
    ],
    number: 1,
    isLast: false,
  },
  {
    type: "frontend",
    question: "Окей, а с JS у тебя как?",
    answers: [
      {
        answer: "Я как-то больше по JQuery",
        value: -30,
      },
      { answer: "Норм, прошёл курс", value: 5 },
      { answer: "На чистом JS уже не первый год пишу", value: 20 },
    ],
    number: 2,
    isLast: false,
  },
  {
    type: "frontend",
    question: "Насколько ты любишь PHP?",
    answers: [],
    number: 3,
    isLast: false,
  },
  {
    type: "frontend",
    question: "Сколько дней в неделю планируешь ходить в офис?",
    answers: [
      {
        answer: "Я хочу работать удалённо",
        value: -20,
      },
      { answer: "3-4 дня в неделю будет норм", value: 5 },
      { answer: "Я перееду в ваш офис, крепитесь", value: 20 },
    ],
    number: 4,
    isLast: false,
  },
  {
    type: "frontend",
    question: "Кстати, а оценку задач ты как даёшь?",
    answers: [
      {
        answer: "По часам",
        value: 1.8,
      },
      { answer: "По дням", value: 1.3 },
      { answer: "По наитию", value: 0.6 },
    ],
    number: 5,
    isLast: true,
  },
];
export default frontend;
