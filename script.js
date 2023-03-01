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

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

angka.forEach(function (n) {
  console.log(n * n);
});
