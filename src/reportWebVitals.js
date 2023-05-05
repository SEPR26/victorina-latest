
// ТУТ ПОХ НЕ ОБРАЩАЙ ВНИМАНИЕ ПОТОМУ ЧТО ЭТО БИБЛИОТЕКА САМА СОЗДАЕТ И ПРОВЕРЯЕТ ПРАВИЛЬНОСТЬ ПИСАННОГО КОДА
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
