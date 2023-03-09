//-----CALL BACK VERSION-----
// const requestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 1000) + 500;
//   setTimeout(() => {
//     if (delay > 1000) {
//       failure("Error: Connection Timeout!");
//     } else {
//       success(`Success: ${url} (${delay}ms)`);
//     }
//   }, delay);
// };

// requestCallback(
//   "google.com",
//   function (a) {
//     console.log(a);
//     requestCallback(
//       "google.com",
//       function (a) {
//         console.log(a);
//         requestCallback(
//           "google.com",
//           function (a) {
//             console.log(a);
//             requestCallback(
//               "google.com",
//               function (a) {
//                 console.log(a);
//               },
//               function (b) {
//                 console.log(b);
//               }
//             );
//           },
//           function (b) {
//             console.log(b);
//           }
//         );
//       },
//       function (b) {
//         console.log(b);
//       }
//     );
//   },
//   function (b) {
//     console.log(b);
//   }
// );
//-----END OF CALL BACK VERSION-----

//-----PROMISE VERSION-----
const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 1000) + 500;
    setTimeout(() => {
      if (delay >= 1000) {
        reject("Error: Connection Timeout!");
      } else {
        resolve(`Success: ${url} (${delay}ms)`);
      }
    }, delay);
  });
};

requestPromise("google.com")
  .then((res) => {
    console.log(res);
    requestPromise("google.com")
      .then((res) => {
        console.log(res);
        requestPromise("google.com")
          .then((res) => {
            console.log(res);
            requestPromise("google.com")
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
//-----END OF PROMISE VERSION-----
