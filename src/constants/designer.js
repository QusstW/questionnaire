const designer = [
  {
    type: "designer",
    question: "В какой программе делаешь макеты?",
    answers: [
      { answer: "Figma", value: 15 },
      { answer: "Photoshop", value: -10 },
      { answer: "В такой, о которой вы не слышали", value: 0 },
    ],
    number: 1,
    isLast: false,
  },
  {
    type: "designer",
    question: "Любишь играться со шрифтами?",
    answers: [
      { answer: "Я живу этим", value: 20 },
      { answer: "Если очень попросите", value: 10 },
      { answer: "Я сам/сама создаю шрифты", value: 30 },
      { answer: "Нет, в игры не играю", value: -5 },
    ],
    number: 2,
    isLast: false,
  },
  {
    type: "designer",
    question: "А белый цвет сможешь белее сделать?",
    answers: [
      {
        answer: "Я же говорил(а), что этого заказчика забанить надо",
        value: 15,
      },
      {
        answer: "Пусть заказчик приедет и на Ретине посмотрит ещё разок",
        value: 5,
      },
      { answer: "Конечно сделаю, если #fff недостаточно", value: -10 },
    ],
    number: 3,
    isLast: false,
  },
  {
    type: "designer",
    question: "Последний вопрос: в какую стороны расти планируешь?",
    answers: [
      { answer: "До арт-дира, естественно", value: 20 },
      {
        answer: "В какую-то одну сферу хочу, но пока не знаю какую",
        value: 10,
      },
      { answer: "Пока расту в ширину", value: 5 },
    ],
    number: 4,
    isLast: false,
  },
  {
    type: "designer",
    question: "Кстати, а оценку задач ты как даёшь?",
    answers: [
      { answer: "По часам", value: 1.5 },
      { answer: "По дням", value: 1.2 },
      { answer: "По наитию", value: 0.7 },
    ],
    number: 5,
    isLast: true,
  },
];

export default designer;
