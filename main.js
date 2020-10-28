const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger-menu');
const links = menu.querySelectorAll("a");

window.onscroll = () => {
  const items = document.querySelectorAll('.menu__item');

  if (this.scrollY <= 10) {
    menu.classList.remove("menu--sticky");
    items.forEach(item => {
      item.classList.remove("menu__item--sticky");
    })

  }
  else {
    menu.classList.add("menu--sticky");
    items.forEach(item => {
      item.classList.add("menu__item--sticky");
    })
  };
};

burger.addEventListener("click", () => {
  menu.classList.toggle("menu--open");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.toggle("menu--open");
  });
});