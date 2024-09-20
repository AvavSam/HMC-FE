// Fungsi untuk memesan makanan
function pesanMakanan(namaMakanan, waktuPembuatan) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${namaMakanan} sudah siap!`);
    }, waktuPembuatan);
  });
}

// Fungsi untuk mengantar makanan
function antarMakanan(namaMakanan, waktuAntar) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve(`${namaMakanan} sudah diantar!`);
      } else {
        reject(`${namaMakanan} gagal diantar.`);
      }
    }, waktuAntar);
  });
}

// Memesan dan mengantarkan dua makanan secara bersamaan
function prosesPesanDanAntarAllSettled(namaMakanan1, waktuPembuatan1, waktuAntar1, namaMakanan2, waktuPembuatan2, waktuAntar2) {
  const makanan1 = pesanMakanan(namaMakanan1, waktuPembuatan1).then((pesan) => {
    console.log(pesan);
    return antarMakanan(namaMakanan1, waktuAntar1);
  });

  const makanan2 = pesanMakanan(namaMakanan2, waktuPembuatan2).then((pesan) => {
    console.log(pesan);
    return antarMakanan(namaMakanan2, waktuAntar2);
  });

  Promise.allSettled([makanan1, makanan2]).then((results) => {
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log(`Sukses: ${result.value}`);
      } else {
        console.error(`Gagal: ${result.reason}`);
      }
    });
  });
}

// Contoh penggunaan allSettled
prosesPesanDanAntarAllSettled("Pizza", 2000, 1000, "Burger", 3000, 1500);
