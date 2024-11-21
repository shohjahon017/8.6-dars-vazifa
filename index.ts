//Topshiriq 1
// const urls = [
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/posts/2",
//   "https://jsonplaceholder.typicode.com/posts/3",
// ];

// function fetchDataSequentially(urls: string[]) {
//   let promise = Promise.resolve();

//   urls.forEach((url) => {
//     promise = promise
//       .then(() => {
//         console.log(`${url}`);
//         return fetch(url).then((response) => response.json());
//       })
//       .then((data) => {
//         console.log("Natija:", data);
//       })
//       .catch((error) => {
//         console.log(`Error ${url}:`, error);
//       });
//   });
// }

// fetchDataSequentially(urls);

//Topshiriq 2
// let promise1 = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve("1-promise bajarildi");
//   }, 3000);
// });

// let promise2 = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve("2-promise bajarildi");
//   }, 2000);
// });

// let promise3 = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve("3-promise bajarildi");
//   }, 1000);
// });

// Promise.all([promise1, promise2, promise3])
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Topshiriq 3
// let promise1 = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve("1-promise bajarildi");
//   }, 3000);
// });

// let promise2 = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve("2-promise bajarildi");
//   }, 2000);
// });

// let promise3 = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     reject("3-promise bajarildi");
//   }, 1000);
// });

// Promise.race([promise1, promise2, promise3])
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Async/await

//Topshiriq 1
// const urls = [
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/posts/2",
//   "https://jsonplaceholder.typicode.com/posts/3",
// ];

// async function fetchDataSequentially() {
//   for (let url of urls) {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log("Xatolik:", error);
//     }
//   }
// }

// fetchDataSequentially();

//Topshiriq 2
// const urls = [
//     "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/posts/2",
//     "https://jsonplaceholder.typicode.com/posts/3",
//   ];

//   async function fetchDataSequentially() {
//     for (let url of urls) {
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//       } catch (error) {
//         console.log("Xatolik:", error);
//       }
//     }
//   }

//   fetchDataSequentially();

//Topshiriq 3
// const url1 = "https://jsonplaceholder.typicode.com/photos";
// const url2 = "https://jsonplaceholder.typicode.com/todos";
// const url3 = "https://jsonplaceholder.typicode.com/comments";

// // interface Data {
// //   id: number;
// //   title: string;
// // }

// // async function fetchFirstSuccessful() {
// //   try {
// //     const urls = [url1, url2, url3];

// //     for (let url of urls) {
// //       try {
// //         const response = await fetch(url);
// //         if (!response.ok) throw new Error("Xatolik yuz berdi.");
// //         const data: Data[] = await response.json();
// //         console.log(data);
// //         return;
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     }

// //     console.log("Barcha so‘rovlar xato bilan tugadi.");
// //   } catch (error) {
// //     console.log("Xatolik:", error);
// //   }
// // }

// fetchFirstSuccessful();

//Generic
// function Data<T>(data: T) {
//   return {
//     status: "success",
//     data,
//   };
// }

// const string = Data("Hello, world!");
// console.log(string);

// const number = Data(42);
// console.log(number);

//2

// function findCommonElements<T>(arr1: T[], arr2: T[]): T[] {
//   return arr1.filter((item) => arr2.includes(item));
// }

// const numbers1 = [1, 2, 3, 4];
// const numbers2 = [3, 4, 5, 6];
// const commonNumbers = findCommonElements(numbers1, numbers2);
// console.log(commonNumbers);

// const strings1 = ["apple", "banana", "cherry"];
// const strings2 = ["banana", "cherry", "date"];
// const commonStrings = findCommonElements(strings1, strings2);
// console.log(commonStrings);
