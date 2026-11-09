const btnScrollToTop = document.getElementById("btnScrollToTop");

// Menampilkan tombol jika scroll down > 500px
window.onscroll = function() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollToTop.style.display = "block";
  } else {
    btnScrollToTop.style.display = "none";
  }
};

// Kembali ke posisi paling atas saat tombol diklik
btnScrollToTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});