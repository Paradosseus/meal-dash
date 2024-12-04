import foodItems from './foodItems';

 
document.addEventListener('DOMContentLoaded', () => {
  console.log(foodItems)
  // Constants and Variables
  const menuButton = document.querySelector('#nav-menu-button');
  const menu = document.querySelector('#nav-menu');
  const closeMenuButton = document.querySelector('#close-menu-button'); 
  const foodItemsContainer = document.querySelector(".todays-food-items-container")
  const category = document.querySelectorAll('.categories-container div');
  const scrollLeft = document.querySelector(".arrow-left");
  const scrollRight = document.querySelector(".arrow-right");
  const scrollStep = 150;

  // Initial Set-up
  foodItemsContainer.scrollLeft = 0;


  // Utility Functions
  function displayFoodItems(category) {
    foodItemsContainer.innerHTML = "";
    
    const filteredItems = category === 'all' ? foodItems : foodItems.filter(item => item.category === category);
  
    filteredItems.forEach(item => {
      const foodItemDiv = document.createElement('div');
      foodItemDiv.classList.add('flex', 'flex-col', 'gap-[24px]', 'min-w-[180px]', 'xl:w-[255px]');
      foodItemDiv.innerHTML = ` 
        <div class="flex flex-col gap-[16px]">
          <img src="./public/images/${item.name}.jpg" alt="${item.name}" class="h-[150px]">
          <h5 class="font-bold text-[#B41E32] text-[14px]">${item.name}</h5>
          <p class="text-[13px]">${item.description}</p>
          <p class="text-[#B41E32]">${item.price}</p>
        </div>
      `;
      foodItemsContainer.appendChild(foodItemDiv);
    })
  }
  
  category.forEach(button => {
    button.addEventListener('click', () => { 
      var currentCategory = document.getElementsByClassName("active");
      currentCategory[0].classList.remove("active");
      button.classList.add("active");
      const category = button.getAttribute('data-category');
      displayFoodItems(category);
    })
  })

  function updateScrollButtons() {
    const maxScrollLeft = foodItemsContainer.scrollWidth - foodItemsContainer.clientWidth;

    if (foodItemsContainer.scrollLeft <= 0) {
      disableButton(scrollLeft, "./public/icons/arrow-left-disabled.svg");
    } else {
      enableButton(scrollLeft, "./public/icons/arrow-left.svg");
    }

    if (foodItemsContainer.scrollLeft >= maxScrollLeft) {
      disableButton(scrollRight, "./public/icons/arrow-right-disabled.svg");
    } else {
      enableButton(scrollRight, "./public/icons/arrow-right.svg");
    }

  }

  function disableButton(button, iconSrc) {
    button.src = iconSrc
    button.classList.remove("cursor-pointer");
    button.classList.add("cursor-not-allowed");
  }

  function enableButton(button, iconSrc) { 
    button.src = iconSrc
    button.classList.remove("cursor-not-allowed");
    button.classList.add("cursor-pointer");
  }

  function scrollContainer(direction) {
    foodItemsContainer.scrollLeft += scrollStep * direction;
  }

  function hideNavMenuOnResize() {
    if(window.innerWidth >= 1140) {
      menu.classList.remove('active');
     }
  }

  // Event Listeners
  scrollLeft.addEventListener("click", () => scrollContainer(-1));
  scrollRight.addEventListener("click", () => scrollContainer(1));

  foodItemsContainer.addEventListener("scroll", updateScrollButtons);

  menuButton.addEventListener('click', () => menu.classList.toggle('active'));
  closeMenuButton.addEventListener('click', () => menu.classList.remove('active'));

  window.addEventListener('resize', hideNavMenuOnResize);

  displayFoodItems('all');
  updateScrollButtons();
  









});