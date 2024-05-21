/* The code starts by selecting all the elements with the class arrow and movie-list and storing them in the variables arrows
and movieLists respectively. These elements are likely used for navigating through the list of movies */

const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");


/* Adding event listeners to the arrows: For each arrow element, the code calculates the number of movie items in the corresponding movie
list and sets a click counter to zero. An event listener is added to each arrow that listens for a click event */

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;

  /* Calculating the translation distance: When an arrow is clicked, the code calculates the distance to translate the movie list 
  based on the window width and a ratio of 270. This distance is subtracted from the current translation value of the movie list, if it exists */

/* The window.innerWidth property is used to get the width of the current browser window. This value is then divided by 270 and the result is rounded
down to the nearest whole number using the Math.floor() method. This value is stored in the ratio variable */
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270); 
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
    /* The code then checks if the value of itemNumber minus (4 plus the value of clickCounter) plus (4 minus ratio) is greater than or equal to 0.
    If this condition is true, the style.transform property of the element at index i of the movieLists array is updated to translate the element's
    position in the X-axis by a certain amount. If the condition is false, the style.transform property of the element at index i of the movieLists
    array is set to "translateX(0)", and the clickCounter variable is reset to 0. */
  });


  /* The code then logs the value of Math.floor(window.innerWidth / 270) to the console */
  console.log(Math.floor(window.innerWidth / 270));
});




//TOGGLE part
/* The second part of the code is used to toggle the "active" class on a group of elements when the element with the class name "toggle-ball" is clicked.
The elements that will have the "active" class toggled are selected using the querySelectorAll() method and stored in the items variable.
When the "toggle-ball" element is clicked,the "active" class will be added to each element in the items array using the forEach() method.
If the "toggle-ball" element is clicked again, the "active" class will be removed from each element in the items array. The "toggle-ball" element will
also have the "active" class toggled when it is clicked. */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
