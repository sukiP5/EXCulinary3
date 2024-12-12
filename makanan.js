document.addEventListener("DOMContentLoaded", function () {
  // Toggle menu
  document.getElementById("menu-toggle").addEventListener("click", () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show"); // Toggle kelas show untuk menampilkan/menyembunyikan menu
  });

  // Fungsi untuk memfilter restoran berdasarkan nama
  function filterRestaurants() {
    const query = document.getElementById("search-box").value.toLowerCase();
    const cards = Array.from(document.querySelectorAll(".restaurant-card"));
    let exactMatches = []; // Array untuk menyimpan kartu yang cocok dengan seluruh kata kunci
    let partialMatches = []; // Array untuk menyimpan kartu yang cocok dengan sebagian kata kunci

    cards.forEach((card) => {
      const name = card
        .querySelector(".restaurant-info h3")
        .textContent.toLowerCase();

      // Cek apakah nama restoran cocok dengan query
      if (name === query) {
        exactMatches.push(card); // Tambahkan ke exactMatches jika cocok
      } else if (name.includes(query)) {
        partialMatches.push(card); // Tambahkan ke partialMatches jika hanya sebagian yang cocok
      }
    });

    // Sembunyikan semua kartu terlebih dahulu
    cards.forEach((card) => (card.style.display = "none"));

    // Tampilkan kartu yang cocok
    if (exactMatches.length > 0) {
      exactMatches.forEach((card) => {
        card.style.display = "block"; // Tampilkan kartu yang cocok
      });
    }

    if (partialMatches.length > 0) {
      partialMatches.forEach((card) => {
        card.style.display = "block"; // Tampilkan kartu yang cocok
      });
    }

    // Jika tidak ada kartu yang cocok, Anda bisa menampilkan pesan atau melakukan tindakan lain
    if (exactMatches.length === 0 && partialMatches.length === 0) {
      console.log("Tidak ada restoran yang cocok dengan pencarian."); // Contoh tindakan
    }
  }

  // Event listener untuk tombol pencarian
  document
    .getElementById("search-button")
    .addEventListener("click", filterRestaurants);

  // Event listener untuk menekan tombol Enter
  document
    .getElementById("search-box")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        filterRestaurants(); // Panggil fungsi pencarian saat Enter ditekan
      }
    });
});
