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

//-----METHOD ARRAY-----
// let barbel = [];
// barbel.push(20, 15, 10, 5);
// console.log(barbel);
// console.log("----------------------------");
// barbel.push(2.5, 0);
// console.log(barbel);
// console.log("----------------------------");
// barbel.pop();
// console.log(barbel);
// console.log("----------------------------");
// barbel.shift();
// console.log(barbel);
// console.log("----------------------------");
// barbel.unshift(50);
// console.log(barbel);
// console.log("----------------------------");
// let array1 = ["intan", "dewo"];
// console.log(array1);
// let array2 = ["mei", "botak"];
// console.log(array2);
// let array3 = array2.concat(array1);
// console.log(array3);
// console.log("----------------------------");
// let bilangan = [100, 199, 2008, 313, 2125];
// console.log(bilangan.join("/"));
// const outfit = ["celana", "baju", "blouse", "tanktop"];
// console.log(outfit.join(" - "));

//-----MULTIDIMENSIONAL ARRAY-----
// const board = [
//   ["O", null, "X"],
//   ["X", "O", "X"],
//   [null, null, "O"],
// ];
// console.log(board[0]);
// console.log(board[1]);
// console.log(board[2]);
// console.log("----------------------------");
// console.log(board[0][2]);
// console.log(board[1][0]);
// console.log(board[2][1]);

//-----OBJECT DATA STRUCTURES-----
// const orang = {
//   nama: "Skydazmc",
//   alamat: "Bandung",
//   tanggal: "16-08-2015",
// };
// console.log(orang);
// console.log(orang.nama);
// console.log(orang.alamat);
// console.log(orang.tanggal);
// console.log("----------------------------");
// orang.nama = "Landensaki";
// orang.alamat = "Bali";
// orang.tanggal = "03-03-2023";
// orang.kodePos = 40191;
// console.log(orang);

//-----MULTIDIMENSIONAL OBJECT-----
// const board = {
//   A1: { B1: "O", B2: null, B3: "X" },
//   A2: { B1: "x", B2: "O", B3: "X" },
//   A3: { B1: null, B2: null, B3: "O" },
// };
// console.log(board.A1);
// console.log(board.A2);
// console.log(board.A3);
// console.log("----------------------------");
// console.log(board.A1.B3);
// console.log(board.A2.B1);
// console.log(board.A3.B2);

//-----ARRAY + OBJECT-----
// const camera = [
//   { product: "Sony A6400", price: 9000000, qty: 10 },
//   { product: "Nikon D7200", price: 6000000, qty: 30 },
//   { product: "Nikon D3200", price: 5000000, qty: 5 },
// ];
// console.log(camera[0]);
// console.log(camera[1]);
// console.log(camera[2]);
// console.log("----------------------------");
// console.log(camera[0].product);
// console.log(camera[1].price);
// console.log(camera[2].qty);

//-----OBJECT + ARRAY-----
// const camera = {
//   array1: ["Sony A6400", 9000000, 10],
//   array2: ["Nikon D7200", 6000000, 30],
//   array3: ["Nikon D3200", 5000000, 5],
// };
// console.log(camera.array1);
// console.log(camera.array2);
// console.log(camera.array3);
// console.log("----------------------------");
// console.log(camera.array1[0]);
// console.log(camera.array2[1]);
// console.log(camera.array3[2]);

//-----LOOPING-----
//---FOR---
// for (let i = 1; i <= 10; i++) {
//   console.log(`LOOPING FOR ${i}`);
// }
//---WHILE---
// let i = 1;
// while (i <= 10) {
//   console.log(`LOOPING WHILE ${i}`);
//   i++;
// }
//---FOR OF---{
// const number = [1, 2, 3];
// for (let letNumber of number) {
//   console.log(`LOOPING FOR OF ${letNumber}`);
// }
//---FOR IN---
// const number = { SATU: 1, DUA: 2, TIGA: 3 };
// for (let letNumber in number) {
//   console.log(`LOOPING FOR IN ${letNumber} : ${number[letNumber]}`);
// }

//-----PERSONAL EXPERIMENT-----
//---EXPERIMENT 01---
//TAMPILKAN INDEX PADA ARRAY
// let nama = [];
// for (let i = 1; i < 3; i++) {
//   nama[i] = prompt("Masukan Nama Ke-" + i);
// }
// let tampilNama = prompt("Tampilkan Nama Ke?");
// alert(nama[tampilNama]);
//---EXPERIMENT 02---
//REGISTRASI
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
//---EXPERIMENT 03---
//SOAL PILIHAN GANDA
// const nama = ["Landensaki", "Skydazmc", "HobbiTxy"];
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
//---EXPERIMENT 04---
//KATA KUNCI UNTUK STOP LOOPING
// let i = 1;
// while (i <= 10) {
//   let kataLunci = prompt("Masukan kata kunci!").toLowerCase();
//   if (kataLunci === "stop") {
//     break;
//   }
//   i++;
// }
// alert("Berhasil Stop!");
//---EXPERIMENT 05---
//TEBAK ANGKA
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

//-----FUNCTION-----
// function lemparDadu1() {
//   console.log(Math.floor(Math.random() * 6) + 1);
// }
// lemparDadu1();
// console.log("----------------------------");
//---FUNCTION PARAMETER---
// function lemparDadu2(a, b) {
//   console.log(Math.floor(Math.random() * a) + b);
// }
// lemparDadu2(15, 20);
// console.log("----------------------------");
//---FUNCTION DEFAULT VALUE---
// function lemparDadu3(a, b = 11) {
//   console.log(Math.floor(Math.random() * a) + b);
// }
// lemparDadu3(10);
// lemparDadu3(10, 30);

//-----SCOPE VARIABEL (VAR)-----
//---FUNCTION---
// var funVarScope = 1; //SUCCESS
// function testScope() {
//   //var funVarScope = 1; //UNCAUGHT
//   funVarScope = 2;
// }
// testScope();
// console.log(funVarScope);
// console.log("----------------------------");
//---IF---
// var tinggi = 10;
// var funVarScope = 1; //SUCCESS
// if (tinggi === 10) {
//   //var funVarScope = 1; //SUCCESS
//   funVarScope = 2;
// }
// console.log(funVarScope);
// console.log("----------------------------");
//---FOR---
// var funVarScope = 1; //SUCCESS
// for (let i = 1; i <= 5; i++) {
//   //var funVarScope = 1; //SUCCESS
//   funVarScope = i;
// }
// console.log(funVarScope);

//-----SCOPE VARIABEL (LET)-----
//---FUNCTION---
// let funLetScope = 1; //SUCCESS
// function testScope() {
//   //let funLetScope = 1; //UNCAUGHT
//   funLetScope = 2;
// }
// testScope();
// console.log(funLetScope);
// console.log("----------------------------");
//---IF---
// let tinggi = 10;
// let funLetScope = 1; //SUCCESS
// if (tinggi === 10) {
//   //let funLetScope = 1; //UNCAUGHT
//   funLetScope = 2;
// }
// console.log(funLetScope);
// console.log("----------------------------");
//---FOR---
// let funLetScope = 1; //SUCCESS
// for (let i = 1; i <= 5; i++) {
//   //let funLetScope = 1; //UNCAUGHT
//   funLetScope = i;
// }
// console.log(funLetScope);

//-----SCOPE VARIABEL (CONST)-----
//---FUNCTION---
// const funConScope = 1; //SUCCESS
// function testScope() {
//   //const funConScope = 1; //UNCAUGHT
// }
// testScope();
// console.log(funConScope);
// console.log("----------------------------");
//---IF---
// const tinggi = 10;
// const funConScope = 1; //SUCCESS
// if (tinggi === 10) {
//   //const funConScope = 1; //UNCAUGHT
// }
// console.log(funConScope);
// console.log("----------------------------");
//---FOR---
// const funConScope = 1; //SUCCESS
// for (let i = 1; i <= 5; i++) {
//   //const funConScope = 1; //UNCAUGHT
// }
// console.log(funConScope);

//-----LEXICAL SCOPE-----
// function funcLuar() {
//   const nilaiLuar = "Ini Luar!";
//   function funcDalam() {
//     let nilaiDalam = `Di dalam mengambil ${nilaiLuar}`;
//     console.log(nilaiDalam);
//   }
//   funcDalam();
// }
// funcLuar();

//-----FUNCTION EXPRESSIONS-----
// function lemparDadu4(a, b) {
//   let dadu = Math.floor(Math.random() * a) + b;
//   return dadu;
// }
// let hasil = lemparDadu4(10, 8);
// console.log(hasil); //SUCCESS
// console.log("----------------------------");
// function lemparDadu4(a, b) {
//   let dadu = Math.floor(Math.random() * a) + b;
// }
// let hasil = lemparDadu4(10, 8);
// console.log(hasil); //UNDEFINED

//-----FUNCTION AS ARGUMENT-----
// function duaKali(func) {
//   func();
//   func();
// }
// function lemparDadu() {
//   const nilai = Math.floor(Math.random() * 6) + 1;
//   console.log(nilai);
// }
// duaKali(lemparDadu);

//-----FUNCTION RETURN VALUE FUNCTION-----
// function hasilnyaAdalahFunction() {
//   const rand = Math.random();
//   if (rand > 0.1) {
//     return function () {
//       console.log("Selamat, angkanya lebih besar!");
//     };
//   } else {
//     return function () {
//       console.log("Maaf, mungkin bisa coba lagi!");
//     };
//   }
// }
// const hasil = hasilnyaAdalahFunction();
// console.log(hasil());

//-----CREATE METHOD-----
// const myMethod = {
//   pertambahan: function (a, b) {
//     return a + b;
//   },
//   pengurangan: function (a, b) {
//     return a - b;
//   },
//   perkalian: function (a, b) {
//     return a * b;
//   },
//   pembagian: function (a, b) {
//     return a / b;
//   },
// };
// console.log(myMethod.pertambahan(10, 10));
// console.log(myMethod.pengurangan(10, 10));
// console.log(myMethod.perkalian(10, 10));
// console.log(myMethod.pembagian(10, 10));

//-----THIS-----
// const saya = {
//   nama: "Landensaki",
//   umur: 17,
//   hobi: "makan",
//   kitaKenalan: function () {
//     return `Hallo perkenalkan nama saya ${this.nama}, hobi saya ${this.hobi} dan saya berumur ${this.umur} tahun.`;
//   },
// };
// console.log(saya.kitaKenalan());

//-----TRY AND CATCH-----
// console.log(saya.kitaKenalan()); //BLOCKED
// try {
//   saya.kitaKenalan();
// } catch {
//   console.log("Terjadi kesalahan");
// }
// console.log(
//   "try and catch tidak akan membelok proses saat terjadi kesalahan/error."
// );
// console.log("----------------------------");
// function tryCatch(isi) {
//   try {
//     console.log(isi.toUpperCase());
//   } catch (error) {
//     console.log(error);
//     console.log("Terjadi kesalahan");
//   }
// }
// tryCatch("string");
// tryCatch(1);

//-----FOREACH METHOD-----

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
