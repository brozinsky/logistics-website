//Animations

const headerArrow = document.querySelector('.scroll')
const headerSwipe = document.querySelector('.mobile-swipe')
const sections = document.querySelectorAll('section')

//header scroll arrow animation
gsap.from(headerArrow && headerSwipe, 2, { delay: 1.4, opacity: 0, })
gsap.from(headerArrow && headerSwipe, 1.5, { delay: 0, y: '-20px', repeat: -1, yoyo: true, ease: "slow(0.7, 0.7, false)", });


//all sections animation
sections.forEach(section => {
  gsap.fromTo(section.children, { y: '+=100', opacity: 0 },
    {
      y: 0, opacity: 1, stagger: 0.2, duration: 0.8,
      scrollTrigger: {
        trigger: section,
        start: 'top 65%',
        ease: 'power3. out'
      }
    })
})

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

