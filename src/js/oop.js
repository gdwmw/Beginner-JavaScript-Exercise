//-----OBJECT LITERAL-----
//PROBLEM : Tidak efektif jika object nya banyak.
// let teman1 = {
//   nama: "Skydazmc",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat energi kamu ${this.energi}!`);
//   },
// };
// console.log(teman1.makan(5));

// let teman2 = {
//   nama: "HobbiTxy",
//   energi: 20,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat energi kamu ${this.energi}!`);
//   },
// };
// console.log(teman2.makan(10));

//-----FUNCTION DECLARATION-----
//PROBLEM : Pemakaian memori besar karna semua isi fungsinya ter clone ulang dan berulah.
// function myData(nama, umur) {
//   let isi = {};
//   isi.nama = nama;
//   isi.umur = umur;

//   isi.tambahUmur = function (isiTambahUmur) {
//     this.umur += isiTambahUmur;
//     console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur}`);
//   };

//   isi.kurangUmur = function (isiKurangUmur) {
//     this.umur -= isiKurangUmur;
//     console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur}`);
//   };
//   return isi;
// }

// myData("Landensaki", 10);
// isi.tambahUmur(5); // ERROR

// let landensaki = myData("Landensaki", 25);
// console.log(landensaki);
// landensaki.tambahUmur(5);
// landensaki.kurangUmur(10);

// let hobbitxy = myData("HobbiTxy", 20);
// console.log(hobbitxy);
// hobbitxy.tambahUmur(5);
// hobbitxy.kurangUmur(10);

//-----CONSTRUCTOR FUNCTION-----
// function myData(nama, umur) {
//   this.nama = nama;
//   this.umur = umur;

//   this.tambahUmur = function (isiTambahUmur) {
//     this.umur += isiTambahUmur;
//     console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur}`);
//   };

//   this.kurangUmur = function (isiKurangUmur) {
//     this.umur -= isiKurangUmur;
//     console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur}`);
//   };
// }

// let landensaki = new myData("Landensaki", 20);
// landensaki.tambahUmur(10);
// landensaki.kurangUmur(5);

// let hobbitxy = new myData("HobbiTxy", 10);
// hobbitxy.tambahUmur(15);
// hobbitxy.kurangUmur(5);

//-----PROTOTYPE-----
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return console.log(`Hallo ${this.nama}, energi kamu ${this.energi}`);
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return console.log(`Hallo ${this.nama}, energi kamu ${this.energi}`);
// };

// let landensaki = new Mahasiswa("Landensaki", 20);
// console.log(landensaki);
// landensaki.tidur(10);

//-----CLASS-----
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }

//   makan(porsi) {
//     this.energi += porsi;
//     return console.log(`Hallo ${this.nama}, energi kamu ${this.energi}`);
//   }

//   tidur(jam) {
//     this.energi += jam * 2;
//     return console.log(`Hallo ${this.nama}, energi kamu ${this.energi}`);
//   }
// }

// let landensaki = new Mahasiswa("Landensaki", 20);
// console.log(landensaki);
// landensaki.tidur(10);

//-----CLOSURE-----
// function init() {
//   let nama = "Landensaki";
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();

// let add = (function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// })();

// for (let i = 1; i <= 10; i++) {
//   console.log(add());
// }

//-----FUNCTION FACTORY-----
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Hallo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// selamatPagi("Landensaki");

// let selamatMalam = ucapkanSalam("Malam");
// selamatPagi("Skydaz");

//----------------------------

// class Kalkulator {
//   constructor() {
//     this.hasil = 0;
//   }

//   tambah(num) {
//     this.hasil += num;
//   }

//   kurang(num) {
//     this.hasil -= num;
//   }

//   kali(num) {
//     this.hasil *= num;
//   }

//   bagi(num) {
//     if (num === 0) {
//       throw new Error("Tidak dapat dibagi dengan nol!");
//     }
//     this.hasil /= num;
//   }

//   hapus() {
//     this.hasil = 0;
//   }

//   dapatkanHasil() {
//     return this.hasil;
//   }
// }

// const kalkulator = new Kalkulator();
// kalkulator.tambah(50);
// kalkulator.bagi(10);
// kalkulator.kali(2);
// kalkulator.bagi(2);
// kalkulator.hapus();

// console.log(kalkulator.dapatkanHasil()); // output: 1.

//----------------------------

// class Catatan {
//   constructor(judul, isi) {
//     this.judul = judul;
//     this.isi = isi;
//     this.tanggalDibuat = new Date();
//     this.tanggalDiperbarui = null;
//   }

//   perbaruiIsi(isi) {
//     this.isi = isi;
//     this.tanggalDiperbarui = new Date();
//   }

//   dapatkanJudul() {
//     return this.judul;
//   }

//   dapatkanIsi() {
//     return this.isi;
//   }

//   dapatkanTanggalDibuat() {
//     return this.tanggalDibuat;
//   }

//   dapatkanTanggalDiperbarui() {
//     return this.tanggalDiperbarui;
//   }
// }

// class KumpulanCatatan {
//   constructor() {
//     this.kumpulan = [];
//   }

//   tambahCatatan(catatan) {
//     this.kumpulan.push(catatan);
//   }

//   hapusCatatan(judul) {
//     this.kumpulan = this.kumpulan.filter(
//       (catatan) => catatan.dapatkanJudul() !== judul
//     );
//   }

//   dapatkanCatatan(judul) {
//     return this.kumpulan.find((catatan) => catatan.dapatkanJudul() === judul);
//   }

//   dapatkanSemuaCatatan() {
//     return this.kumpulan;
//   }
// }

// const kumpulanCatatan = new KumpulanCatatan();

// const catatan1 = new Catatan(
//   "Belajar JavaScript",
//   "Belajar pemrograman JavaScript di Dicoding"
// );
// const catatan2 = new Catatan(
//   "Belajar React",
//   "Belajar membuat aplikasi web dengan React di Dicoding"
// );
// const catatan3 = new Catatan(
//   "Belajar Node.js",
//   "Belajar membuat aplikasi server dengan Node.js di Dicoding"
// );

// kumpulanCatatan.tambahCatatan(catatan1);
// kumpulanCatatan.tambahCatatan(catatan2);
// kumpulanCatatan.tambahCatatan(catatan3);

// console.log(kumpulanCatatan.dapatkanSemuaCatatan()); // output: [Catatan {...}, Catatan {...}, Catatan {...}]

// kumpulanCatatan.hapusCatatan("Belajar React");

// console.log(kumpulanCatatan.dapatkanSemuaCatatan()); // output: [Catatan {...}, Catatan {...}]

//----------------------------

// class Buku {
//   constructor(judul, pengarang, penerbit, tahunTerbit, harga) {
//     this.judul = judul;
//     this.pengarang = pengarang;
//     this.penerbit = penerbit;
//     this.tahunTerbit = tahunTerbit;
//     this.harga = harga;
//   }

//   dapatkanJudul() {
//     return this.judul;
//   }

//   dapatkanPengarang() {
//     return this.pengarang;
//   }

//   dapatkanPenerbit() {
//     return this.penerbit;
//   }

//   dapatkanTahunTerbit() {
//     return this.tahunTerbit;
//   }

//   dapatkanHarga() {
//     return this.harga;
//   }
// }

// class TokoBuku {
//   constructor() {
//     this.katalog = [];
//   }

//   tambahBuku(buku) {
//     this.katalog.push(buku);
//   }

//   hapusBuku(judul) {
//     this.katalog = this.katalog.filter(
//       (buku) => buku.dapatkanJudul() !== judul
//     );
//   }

//   dapatkanBuku(judul) {
//     return this.katalog.find((buku) => buku.dapatkanJudul() === judul);
//   }

//   dapatkanSemuaBuku() {
//     return this.katalog;
//   }

//   dapatkanTotalHarga() {
//     return this.katalog.reduce(
//       (total, buku) => total + buku.dapatkanHarga(),
//       0
//     );
//   }
// }

// const tokoBuku = new TokoBuku();

// const buku1 = new Buku(
//   "Laskar Pelangi",
//   "Andrea Hirata",
//   "Bentang Pustaka",
//   2005,
//   90000
// );
// const buku2 = new Buku(
//   "Negeri 5 Menara",
//   "Ahmad Fuadi",
//   "Gramedia Pustaka Utama",
//   2009,
//   75000
// );
// const buku3 = new Buku(
//   "Ayat-Ayat Cinta",
//   "Habiburrahman El Shirazy",
//   "Republika",
//   2004,
//   65000
// );

// tokoBuku.tambahBuku(buku1);
// tokoBuku.tambahBuku(buku2);
// tokoBuku.tambahBuku(buku3);

// console.log(tokoBuku.dapatkanSemuaBuku()); // output: [Buku {...}, Buku {...}, Buku {...}]

// console.log(tokoBuku.dapatkanTotalHarga()); // output: 230000

// tokoBuku.hapusBuku("Negeri 5 Menara");

// console.log(tokoBuku.dapatkanSemuaBuku()); // output: [Buku {...}, Buku {...}]
