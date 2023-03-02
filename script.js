//-----IF, ELSE IF, ELSE STATEMENT-----
// const iniTanggal = 27;
// if (iniTanggal === 27) {
//   alert("IF STATEMENT");
// } else if (iniTanggal === 20) {
//   alert("ELSE IF STATEMENT");
// } else {
//   alert("ELSE STATEMENT");
// }

//-----NESTING CONDITION-----
// const isiPassword = prompt("Silahkan Isi Password!");
// if (isiPassword.length >= 6) {
//   if (isiPassword.indexOf(" ") === -1) {
//     alert("Password Valid!");
//   } else {
//     alert("Password Tidak Boleh Ada Spasi!");
//   }
// } else {
//   alert("Password Minimal 6 Karakter!");
// }

//-----OPERATOR LOGIC AND, OR, NOT-----
// const iniNamaSaya = "Landensaki";
// const iniUmurSaya = 25;
//---AND---
// if (iniNamaSaya === "Landensaki" && iniUmurSaya === 30) {
//   alert("IF STATEMENT - OPERATOR LOGIC AND");
// } else if (iniNamaSaya === "Skydazmc" && iniUmurSaya === 25) {
//   alert("ELSE IF STATEMENT - OPERATOR LOGIC AND");
// } else {
//   alert("ELSE STATEMENT - OPERATOR LOGIC AND");
// }
//---OR---
// if (iniNamaSaya === "Landensaki" || iniUmurSaya === 30) {
//   alert("IF STATEMENT - OPERATOR LOGIC OR");
// } else if (iniNamaSaya === "Skydazmc" || iniUmurSaya === 25) {
//   alert("ELSE IF STATEMENT - OPERATOR LOGIC OR");
// } else {
//   alert("ELSE STATEMENT - OPERATOR LOGIC OR");
// }
//---NOT---
// if (iniUmurSaya !== 25) {
//   alert("IF STATEMENT - OPERATOR LOGIC NOT");
// } else if (iniUmurSaya !== 27) {
//   alert("ELSE IF STATEMENT - OPERATOR LOGIC NOT");
// } else {
//   alert("ELSE STATEMENT - OPERATOR LOGIC NOT");
// }

//-----SWITCH (ALTERNATIVE) IF, ELSE IF, ELSE STATEMENT-----
// let iniNilai = prompt("Masukkan Nilai Kamu!");
// if (iniNilai == null) {
//   iniNilai = 0;
// }
// alert(`Nilai kamu ${iniNilai}`);
// switch (String(iniNilai)) {
//   case "70":
//     alert("Cukup!");
//     break;
//   case "80":
//     alert("Baik!");
//     break;
//   case "90":
//     alert("Sangat Baik!");
//     break;
//   case "100":
//     alert("Sempurna!");
//     break;
//   default:
//     alert("Sangat Buruk!");
// }

//-----STRUCTURE ARRAY-----
// let iniKosong = [];
// let kumpulanHuruf = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
// let kumpulanAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let iniCampuran = [true, 1, "string", null];
// console.log("----------------------------");
//---MENAMPILKAN SEMUA INDEX DARI TIAP ARRAY---
// console.log(iniKosong);
// console.log(kumpulanHuruf);
// console.log(kumpulanAngka);
// console.log(iniCampuran);
// console.log("----------------------------");
//---MENAMPILKAN INDEX TERTENTU DARI TIAP ARRAY---
// console.log(iniKosong[0]);
// console.log(kumpulanHuruf[0]);
// console.log(kumpulanHuruf[2]);
// console.log(kumpulanAngka[4]);
// console.log(kumpulanAngka[6]);
// console.log(iniCampuran[0]);
// console.log(iniCampuran[3]);
// console.log("----------------------------");
//---MENGUBAH & MENAMBAH INDEX TERTENTU DARI TIAP ARRAY---
// iniKosong[0] = 500;
// iniKosong[2] = 1000;
// iniKosong[8] = 1500;
// console.log(iniKosong[8]);
// kumpulanHuruf[0] = "Z";
// console.log(kumpulanHuruf[0]);
// kumpulanAngka[6] = 100;
// console.log(kumpulanAngka[6]);
// iniCampuran[0] = false;
// console.log(iniCampuran[0]);
// console.log("----------------------------");
//---MENAMPILKAN SEMUA HASIL AKHIR INDEX DARI TIAP ARRAY---
// console.log(iniKosong);
// console.log(kumpulanHuruf);
// console.log(kumpulanAngka);
// console.log(iniCampuran);

//-----PERSONAL EXPERIMENT-----
//---EXPERIMENT 01---
// let nama = [];
// for (let i = 1; i < 3; i++) {
//   nama[i] = prompt("Masukan Nama Ke-" + i);
// }
// let tampilNama = prompt("Tampilkan Nama Ke?");
// alert(nama[tampilNama]);
//---EXPERIMENT 02---
// let id;
// let email = [];
// let password = [];
// for (let i = 0; i <= 2; ) {
//   id = prompt("Masukan ID Register!");
//   email[id] = prompt("Masukan Email Register!");
//   password[id] = prompt("Masukan Password Register!");
//   let pilihan = prompt(
//     "Untuk Login Ketik (Y) || Untuk Register Lagi Ketik (N)"
//   ).toUpperCase();
//   if (pilihan === "N") {
//     i++;
//   } else {
//     id = prompt("Masukan ID Login!");
//     let logEmail = prompt("Masukan Email Login!");
//     let logPassword = prompt("Masukan Password Login!");
//     if (logEmail === email[id] && logPassword === password[id]) {
//       alert("Login Berhasil!");
//     } else {
//       alert("Login Gagal!");
//     }
//   }
// }

// let barbel = [];
// barbel.push(20, 15, 10, 5);
// barbel.push(2.5, 0);
// barbel.pop();
// barbel.shift();
// barbel.unshift(20);

// let array1 = ["intan", "dewo"];
// let array2 = ["mei", "botak"];
// let array3 = array2.concat(array1);

// console.log(array3);

// let bilangan = [100, 199, 2008, 313, 2125];

// console.log(bilangan.join("/"));

// const outfit = ["celana", "baju", "blouse", "tanktop"];
// console.log(outfit);

// const board = [
//   ["O", null, "O"],
//   ["X", "X", "X"],
//   [null, null, "O"],
// ];
// console.log(board[2][0]);

// let email = prompt("Masukan Email!").toLowerCase();
// let password = prompt("Masukan Password!").toLowerCase();

// if (email == "gdwmw@gmail.com" && password == "123456") {
//   alert("Login Berhasil!");
// } else {
//   alert("Login Gagal!");
// }

// const orang = {
//   nama: "Intan Meilani Nugraha",
//   alamat: "Bandung",
//   tanggal: "16-08-2015",
//   lokasi: {
//     kota: "Bandung",
//     kelurahan: "Bandung",
//   },
//   noRumah: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// };

// orang.nama = "Gede Dewo Wahyu M.W";
// orang.kodePos = 40191;

// console.log(orang);

// const koding = [
//   { product: "Sony A6400", price: 1000000, qty: 10 },
//   { product: "Nikon D7200", price: 1000000, qty: 10 },
//   { product: "Nikon D3200", price: 1000000, qty: 10 },
// ];

// console.log(koding[0].product);

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let ukuranSpatu = [3213, 453, 6445, 67, 543, 876, 2432, 654, 654, 4325];
// for (let i = 0; i < ukuranSpatu.length; i++) {
//   console.log("No.", i + 1, ukuranSpatu[i]);
// }

// const nama = ["Dewo", "Intan", "Meilanie"];
// const buah = [
//   ["Apel", "Mangga", "Pepaya"],
//   ["Melon", "Jambu", "Nanas"],
//   ["Pisang", "Ceri", "Markisa"],
// ];
// const abc = "ABC";
// for (let i = 0; i < 3; i++) {
//   console.log(i + 1 + ". ", nama[i], "Suka buah apa?");
//   for (let j = 0; j < abc.length; j++) {
//     console.log("    " + abc[j] + ". " + buah[i][j]);
//   }
// }

// let i = 1;
// while (i <= 10) {
//   let kataLunci = prompt("Masukan kata kunci!").toLowerCase();
//   if (kataLunci === "stop") {
//     break;
//   }
//   i++;
// }
// alert("Berhasil Stop!");

// let maximal = parseInt(prompt("Masukan nilai maksimal!"));
// while (!maximal) {
//   maximal = parseInt(prompt("Masukan nilai maksimal!"));
// }
// const targetNum = Math.floor(Math.random() * maximal) + 1;
// console.log(targetNum);
// let guess = parseInt(prompt("Isi tebakan kamu!"));
// while (guess !== targetNum) {
//   if (guess > targetNum) {
//     guess = parseInt(prompt("Terlalu tinggi!"));
//   } else {
//     guess = parseInt(prompt("Terlalu Rendah!"));
//   }
// }
// alert("Tebakan kamu benar!");
// console.log(targetNum);

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// angka.forEach(function (n) {
//   console.log(n * n);
// });

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const angka = [1, 2, 3, 4, 5, 6, 7, 8];
// const nama = ["Gede", "Dewo", "Wahyu", "Mustika", "Wiwaha"];
// angka.push(9, 10);
// console.log(Math.max(...angka));
// console.log(...angka, ...nama);
// console.log(`${angka} || ${nama}`);

// const orang = { nama: "Gede", umur: `Dewo`, alamat: `Wahyu` };
// const user = { ...orang, id: 27, password: "abcd" };
