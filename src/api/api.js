
// ТУТ ХРАНЯТСЯ ДАННЫЕ ТЕСТОВ

const answers = [
  { q_id: 1, answer: "b" },             // ТУТ ХРАНЯТСЯ ПРАВИЛЬНЫЕ ОТВЕТЫ ТЕСТОВ
  { q_id: 2, answer: "a" },             // ТУТ ХРАНЯТСЯ ПРАВИЛЬНЫЕ ОТВЕТЫ ТЕСТОВ
  { q_id: 3, answer: "a" },             // ТУТ ХРАНЯТСЯ ПРАВИЛЬНЫЕ ОТВЕТЫ ТЕСТОВ
  { q_id: 4, answer: "c" },             // ТУТ ХРАНЯТСЯ ПРАВИЛЬНЫЕ ОТВЕТЫ ТЕСТОВ
  { q_id: 5, answer: "b" },             // ТУТ ХРАНЯТСЯ ПРАВИЛЬНЫЕ ОТВЕТЫ ТЕСТОВ
  { q_id: 6, answer: "a" },             // ТУТ ХРАНЯТСЯ ПРАВИЛЬНЫЕ ОТВЕТЫ ТЕСТОВ
];

const questions = [                     // ТУТ ХРАНЯТСЯ ВОПРОСЫ ИХ МОЖНО МЕНЯТЬ НА СВОЕ УСМОТРЕНИЕ
  {
    id: 1,
    question: "Вычислите 14 + 15",
    options: [
      { answer: "a", description: "29" },
      { answer: "b", description: "39" },
      { answer: "c", description: "35" },
    ],
  },
  {
    id: 2,
    question: "Когда началась вторая мировая война ?",
    options: [
      { answer: "a", description: "1 сентября 1939" },
      { answer: "b", description: "22 июня 1941" },
      { answer: "c", description: "16 ноября 1939" },
    ],
  },
  {
    id: 3,
    question: "Какого рода слово 'дерево'?",
    options: [
      { answer: "a", description: "Среднего рода" },
      { answer: "b", description: "Мужского рода" },
      { answer: "c", description: "Женского рода" },
    ],
  },
  {
    id: 4,
    question: "Столица Узбекистана",
    options: [
      { answer: "a", description: "Самарканд" },
      { answer: "b", description: "Джиззах" },
      { answer: "c", description: "Ташкент" },
    ],
  },
  {
    id: 5,
    question: "Что такое JavaScript",
    options: [
      { answer: "a", description: "Язык разметки" },
      { answer: "b", description: "Язык программирования" },
      { answer: "c", description: "Искусственный  интелект" },
    ],
  },
  {
    id: 6,
    question: "test6",
    options: [
      { answer: "a", description: "answer a" },
      { answer: "b", description: "answer b" },
      { answer: "c", description: "answer c" },
    ],
  },
];

export const api = {
  getQuestions: (limit) => {
    return questions.slice(0, limit);
  },
  getAnswers: (questions) => {
    return answers.filter((ans) => questions.some(({ id }) => id === ans.q_id));
  },
};
