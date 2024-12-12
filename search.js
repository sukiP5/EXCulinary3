document.addEventListener("DOMContentLoaded", function () {
  // Toggle menu
  document.getElementById("menu-toggle").addEventListener("click", () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show"); // Toggle kelas show untuk menampilkan/menyembunyikan menu
  });

  // Filter restoran berdasarkan nama
  document
    .getElementById("search-button")
    .addEventListener("click", function () {
      const query = document.getElementById("search-box").value.toLowerCase();
      const cards = document.querySelectorAll(".card");

      cards.forEach((card) => {
        const name = card.querySelector(".info a").textContent.toLowerCase();
        if (name.includes(query)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });

  // Urutkan restoran berdasarkan rating
  document.getElementById("sort-button").addEventListener("click", function () {
    const container = document.querySelector(".container");
    const cards = Array.from(document.querySelectorAll(".card"));

    cards.sort((a, b) => {
      const ratingA = parseFloat(a.querySelector(".actions span").textContent);
      const ratingB = parseFloat(b.querySelector(".actions span").textContent);
      return ratingB - ratingA; // Urutkan dari tinggi ke rendah
    });

    // Tambahkan kembali kartu dalam urutan yang diurutkan
    cards.forEach((card) => container.appendChild(card));
  });
  document.getElementById("menu-toggle").addEventListener("click", () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show"); // Toggle kelas show untuk menampilkan/menyembunyikan menu
  });
});
