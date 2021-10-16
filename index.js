//javascript - однопоточный язык
//асинхронность достигается функциями с откладыванием
// //любой асинхронный код исполнится ТОЛЬКО!!!! после того как исполнится ВЕСЬ!!!! синхронный,
// //даже если задержка - 0

// setTimeout
// первый аргумент действие, второй - задержка в милисекундах, третий -

// const logMessage = () => {
//   console.log("Лог при вызове колбек-функции серез 3 секунды");
// };
// console.log("до вызова сеттаймаут");
// setTimeout(() => {
//   console.log("внутри колбек для сеттаймаут");
// }, 2000);
// console.log("после вызова сеттаймаут");

//очищаем вызов отложенной функции
// const logger = (time) => {
//   console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
// };
// const timerId = setTimeout(logger, 2000, 2000);
// console.log(timerId);

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//   clearTimeout(timerId);
// }
// function showMessage(msg) {
//   console.log(msg);
// }
// setTimeout(showMessage, 2000, "1 timeout");
// setTimeout(showMessage, 0, "2 timeout");
// setTimeout(showMessage, 1000, "3 timeout");

// console.log("My 1 console");
// console.log("My 1 console");
// console.log("My 1 console");
// console.log("My 1 console");
// console.log("My 1 console");
// console.log("My 1 console");
// console.log("My 1 console");
// console.log("My 1 console");
// console.log("My 1 console");
// console.log("My 1 console");

// const intID = setInterval(
//   (value) => {
//     console.log(value);
//   },
//   5000,
//   "hello"
// );
// console.log("intID", intID);

// const intID2 = setInterval(
//   (value) => {
//     console.log(value);
//   },
//   5000,
//   "hello"
// );
// console.log("intID2", intID2);
// const intID3 = setInterval(
//   (value) => {
//     console.log(value);
//   },
//   5000,
//   "hello"
// );
// console.log("intID3", intID3);
// clearInterval(intID3);

//constructor Date
//class Date

// console.dir(Date);

// const newDate = new Date();
// console.log(newDate);

// const fixDate = new Date("sep 11, 2011");
// console.log(fixDate);

// const numDate = new Date(1990, 6, 11, 16, 30, 33);
// console.log("numDate:", numDate);

// const unixDate = Date.now();
// console.log("unixDate:", unixDate);
// //сколько прошло секунщд с  1990 года 11 июля

// const dateFromMS = new Date(1633540970077);

// console.log("getSate", dateFromMS.getDate());
// console.log("getDay", dateFromMS.getDay());
// console.log("getMonth", dateFromMS.getMonth());
// console.log("getYear", dateFromMS.getFullYear());
// console.log("getHours", dateFromMS.getHours());
// console.log("getSeconds", dateFromMS.getSeconds());
// console.log("getMiliSeconds", dateFromMS.getMilliseconds());

//+++++++++++++++++++++++++++++++++++++++++++++++++
//Promise
//+++++++++++++++++++++++++++++++++++++++++++++++++
// const newPromise = new Promise((resolve, reject) => {
//   resolve("jr");
//   reject("not ok");
// });
// console.log(newPromise);

//но правильнее так!
// const newPromise = new Promise(callback)
// function callback(resolve, reject){
//     resolve('ok')
//     reject('not ok')
// }
// console.log(newPromise)
//либо
// const newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("ok");
//     reject("not ok");
//   }, 5000);
// });
// console.log(newPromise);

// setTimeout(() => {
//   console.log(newPromise);
// }, 5000);

//экземпляр promiseимееет два состояния
//pending - до исполнения
//settleв - исполнился
// а как исполнился - это уже фулфил или реджектид

// let condition = 0;
// const newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     condition ? resolve("ok") : reject("not ok");
//   }, 1000);
// });
// console.log(newPromise);
// setTimeout(() => {
//   console.log(newPromise);
// }, 1000);

//promise имеет три метода then, catch, finally

//если обрабатівать промис только через зен
// newPromise.then(
//   (success) => {
//     console.log("1-then", success);
//   },
//   (error) => {
//     console.log("1-then", error);
//   }
// );

//но лучше зен обрабатывать успех а в кетч - ошибки
// newPromise
//   .then((success) => {
//     console.log("1-then", success);
//   })
//   .catch((error) => {
//     console.log("2-catch", error);
//   });

//а когда нам надо исполнить в любом случае, пришел успех или ошибка
//используем
// newPromise
//   .then((success) => {
//     console.log("1-then", success);
//   })
//   .catch((error) => {
//     console.log("2-catch", error);
//   })
//   .finally(() => {
//     console.log("Ты молодец в любом наборе");
//   });
//частенько нам нужно обработать в несколько этапов

// newPromise
//   .then((firstThen) => {
//     console.log("1-then", success);
//   })
//   .then((secondThen) => {
//     console.log("1-then", success);
//   })
//   .then((thirdThen) => {
//     console.log("1-then", success);
//   })
//   .catch((error) => {
//     console.log("2-catch", error);
//   })
//   .finally(() => {
//     console.log("Ты молодец в любом наборе");
//   });

//обработка сразу нескольких промисов

// const prom1 = new Promise((res, rej) => {});
// const prom2 = new Promise((res, rej) => {});
// const prom3 = new Promise((res, rej) => {});

// Promise.all([prom1, prom2, prom3])
//   .then((ok) => {
//     console.log("ok", ok);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

//   Promise.race([prom1, prom2, prom3])
//     .then((ok) => {
//       console.log("ok", ok);
//     })
//     .catch((error) => {
//       console.log("error", error);
//     });

// new Promise((res) => {
//   res(1);
// });

// new Promise((rej) => {
//   rej(0);
// });

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//setTimeout - пример использования
//всплывающее окошко
// const NOTIFICATION_DELAY = 3000;
// let timeoutId = null;

// const refs = {
//   notification: document.querySelector(".js-alert"),
// };
// refs.notification.addEventListener("click", onNotificationClick);
// showNotification();

// function onNotificationClick() {
//   hideNotitfication();
//   clearTimeout(timeoutId);
// }

// function showNotification() {
//   refs.notification.classList.add("js-visible");
//   setTimeout(() => {
//     console.log("you should close the alert window");
//     hideNotitfication();
//   }, NOTIFICATION_DELAY);
// }

// function hideNotitfication() {
//   refs.notification.classList.remove("js-visible");
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//setInterval - пример использования
//надоедалка
// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;

// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS) {
//     console.log("нужно остановить интервал");
//     clearInterval(intervalId);
//     return;
//   }
//   console.log("подпишись на рассылку - " + Date.now());
//   promptCounter += 1;
// }, PROMPT_DELAY);

//через bootstrap
// import BSN from '_bootstrap.native'
//обрати внимание что загружаем отдельно js-bootstrap не через npm

// const refs = {
//   modal: document.querySelector("#subscription-modal"),
//   subscribeBtn = document.querySelector('button[data-subscribe]')
// };
// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;
// let promptCounter = 0;
// let hasSubscribed = false;
// const modal = new BSN.Modal("#subscription-modal");
// openModal();
// refs.modal.addEventListener("hide.bs.modal", () => {
//   openModal();
// });

// function openModal() {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log("it is the largest quantity of noisy window");
//     return;
//   }
//   setTimeout(() => {
//     console.log("Open noisy window");
//     modal.show();
//     promptCounter += 1;
//   }, PROMPT_DELAY);
// }

// function onSubscribeBtnClick() {
//   hasSubscribed = true;
//   modal.hide();
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Data - очень сложно работать в js, лучше юзать date-fns
//1.Создание времени
// const date1 = Date.now();
// // console.log(date.getTime()); //получаем солько прошло секунд от 1 января 1970 гоода

// setTimeout(() => {
//   const date2 = Date.now();

//   console.log("date1", date1);
//   console.log("date2", date2);
//   console.log(date2 - date1);
// }, 3000);

//date.now - не создает новый экземпляр просто возвращает текущее время и дата
//ничего не меняется кроме того что не создается новый обьект

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//timer

const timer = {
  start() {
    const startTime = Date.now();
    setInterval(() => {
      const currentTime = Date.now();
      console.log(currentTime - startTime);
    }, 1000);
  },
};
timer.start();
