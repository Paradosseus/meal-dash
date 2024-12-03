document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('#nav-menu-button');
  const menu = document.querySelector('#nav-menu');
  const closeMenuButton = document.querySelector('#close-menu-button'); 

  const foodItemsContainer = document.querySelector(".todays-food-items-container")
  const scrollLeft = document.querySelector(".arrow-left");
  const scrollRight = document.querySelector(".arrow-right");

  const scrollStep = 150;
  foodItemsContainer.scrollLeft = 0;

  foodItemsContainer.addEventListener("scroll", () => {
    if(foodItemsContainer.scrollLeft <= 0) {
      scrollLeft.src = "./public/icons/arrow-left-disabled.svg";
      scrollLeft.classList.remove("cursor-pointer");
      scrollLeft.classList.add("cursor-not-allowed");
    }else {
      scrollLeft.src = "./public/icons/arrow-left.svg";
      scrollLeft.classList.remove("cursor-not-allowed");
      scrollLeft.classList.add("cursor-pointer");
    }

    const maxScrollLeft = foodItemsContainer.scrollWidth - foodItemsContainer.clientWidth;

    if(foodItemsContainer.scrollLeft == maxScrollLeft) {
      scrollRight.src = "./public/icons/arrow-right-disabled.svg";
      scrollRight.classList.remove("cursor-pointer");
      scrollRight.classList.add("cursor-not-allowed");
    } else {
      scrollRight.src = "./public/icons/arrow-right.svg";
      scrollRight.classList.add("cursor-pointer");
      scrollRight.classList.remove("cursor-not-allowed");
    }
  })

  scrollLeft.addEventListener("click", () => {
    foodItemsContainer.scrollLeft -= scrollStep;
    console.log(foodItemsContainer.scrollLeft)
  });

  scrollRight.addEventListener("click", () => {
    foodItemsContainer.scrollLeft += scrollStep;
    console.log(foodItemsContainer.scrollLeft)
  });

  function hideNavMenuOnResize() {
    if(window.innerWidth >= 1140) {
      menu.classList.remove('active');
     }
  }

  



  window.addEventListener('resize', hideNavMenuOnResize);

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
    console.log('open')
  });

  closeMenuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
    console.log('close');
  })



});