class Kalkulator {
  constructor() {
    this.hasil = 0;
  }

  tambah(num) {
    this.hasil += num;
  }

  kurang(num) {
    this.hasil -= num;
  }

  kali(num) {
    this.hasil *= num;
  }

  bagi(num) {
    if (num === 0) {
      throw new Error("Tidak dapat dibagi dengan nol!");
    }
    this.hasil /= num;
  }

  hapus() {
    this.hasil = 0;
  }

  dapatkanHasil() {
    return this.hasil;
  }
}

const kalkulator = new Kalkulator();

kalkulator.tambah(50);
kalkulator.bagi(10);
kalkulator.kali(2);
kalkulator.bagi(2);
kalkulator.hapus();

console.log(kalkulator.dapatkanHasil()); // output: 1.

//----------------------------

class Catatan {
  constructor(judul, isi) {
    this.judul = judul;
    this.isi = isi;
    this.tanggalDibuat = new Date();
    this.tanggalDiperbarui = null;
  }

  perbaruiIsi(isi) {
    this.isi = isi;
    this.tanggalDiperbarui = new Date();
  }

  dapatkanJudul() {
    return this.judul;
  }

  dapatkanIsi() {
    return this.isi;
  }

  dapatkanTanggalDibuat() {
    return this.tanggalDibuat;
  }

  dapatkanTanggalDiperbarui() {
    return this.tanggalDiperbarui;
  }
}

class KumpulanCatatan {
  constructor() {
    this.kumpulan = [];
  }

  tambahCatatan(catatan) {
    this.kumpulan.push(catatan);
  }

  hapusCatatan(judul) {
    this.kumpulan = this.kumpulan.filter(
      (catatan) => catatan.dapatkanJudul() !== judul
    );
  }

  dapatkanCatatan(judul) {
    return this.kumpulan.find((catatan) => catatan.dapatkanJudul() === judul);
  }

  dapatkanSemuaCatatan() {
    return this.kumpulan;
  }
}

const kumpulanCatatan = new KumpulanCatatan();

const catatan1 = new Catatan(
  "Belajar JavaScript",
  "Belajar pemrograman JavaScript di Dicoding"
);
const catatan2 = new Catatan(
  "Belajar React",
  "Belajar membuat aplikasi web dengan React di Dicoding"
);
const catatan3 = new Catatan(
  "Belajar Node.js",
  "Belajar membuat aplikasi server dengan Node.js di Dicoding"
);

kumpulanCatatan.tambahCatatan(catatan1);
kumpulanCatatan.tambahCatatan(catatan2);
kumpulanCatatan.tambahCatatan(catatan3);

console.log(kumpulanCatatan.dapatkanSemuaCatatan()); // output: [Catatan {...}, Catatan {...}, Catatan {...}]

kumpulanCatatan.hapusCatatan("Belajar React");

console.log(kumpulanCatatan.dapatkanSemuaCatatan()); // output: [Catatan {...}, Catatan {...}]

//----------------------------

class Buku {
  constructor(judul, pengarang, penerbit, tahunTerbit, harga) {
    this.judul = judul;
    this.pengarang = pengarang;
    this.penerbit = penerbit;
    this.tahunTerbit = tahunTerbit;
    this.harga = harga;
  }

  dapatkanJudul() {
    return this.judul;
  }

  dapatkanPengarang() {
    return this.pengarang;
  }

  dapatkanPenerbit() {
    return this.penerbit;
  }

  dapatkanTahunTerbit() {
    return this.tahunTerbit;
  }

  dapatkanHarga() {
    return this.harga;
  }
}

class TokoBuku {
  constructor() {
    this.katalog = [];
  }

  tambahBuku(buku) {
    this.katalog.push(buku);
  }

  hapusBuku(judul) {
    this.katalog = this.katalog.filter(
      (buku) => buku.dapatkanJudul() !== judul
    );
  }

  dapatkanBuku(judul) {
    return this.katalog.find((buku) => buku.dapatkanJudul() === judul);
  }

  dapatkanSemuaBuku() {
    return this.katalog;
  }

  dapatkanTotalHarga() {
    return this.katalog.reduce(
      (total, buku) => total + buku.dapatkanHarga(),
      0
    );
  }
}

const tokoBuku = new TokoBuku();

const buku1 = new Buku(
  "Laskar Pelangi",
  "Andrea Hirata",
  "Bentang Pustaka",
  2005,
  90000
);
const buku2 = new Buku(
  "Negeri 5 Menara",
  "Ahmad Fuadi",
  "Gramedia Pustaka Utama",
  2009,
  75000
);
const buku3 = new Buku(
  "Ayat-Ayat Cinta",
  "Habiburrahman El Shirazy",
  "Republika",
  2004,
  65000
);

tokoBuku.tambahBuku(buku1);
tokoBuku.tambahBuku(buku2);
tokoBuku.tambahBuku(buku3);

console.log(tokoBuku.dapatkanSemuaBuku()); // output: [Buku {...}, Buku {...}, Buku {...}]

console.log(tokoBuku.dapatkanTotalHarga()); // output: 230000

tokoBuku.hapusBuku("Negeri 5 Menara");

console.log(tokoBuku.dapatkanSemuaBuku()); // output: [Buku {...}, Buku {...}]
