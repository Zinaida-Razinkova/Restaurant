const btnTop = document.querySelector('.book__scrollup');

btnTop.addEventListener('click', (e) =>   
window.scrollTo({
  behavior: "smooth",
  top,
})
)