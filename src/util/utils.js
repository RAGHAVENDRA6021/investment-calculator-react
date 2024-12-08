export function debounce(callBack, time) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callBack(...args);
    }, time);
  };
}
