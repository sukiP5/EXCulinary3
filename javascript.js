// Contoh kode JavaScript
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
  tombolMenu.click(function () {
    menu.toggle();
  });
  menu.click(function () {
    menu.toggle();
  });
}

$(document).ready(function () {
  var width = $(window).width();
  if (width < 990) {
    klikMenu();
  }
});

// Cek lebar jendela saat di-resize
$(window).resize(function () {
  var width = $(window).width();
  if (width > 989) {
    menu.css("display", "block");
  } else {
    menu.css("display", "none");
  }
  klikMenu();
});
$(document).ready(function () {
  $(window).on("scroll", function () {
    $(".animate").each(function () {
      const scrollTop = $(window).scrollTop();
      const elementOffset = $(this).offset().top;
      const windowHeight = $(window).height();

      if (scrollTop > elementOffset - windowHeight + 100) {
        $(this).addClass("visible");
      }
    });
  });
});
