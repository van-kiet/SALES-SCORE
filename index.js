var button = document.getElementById("button__sidebar");
var sidebar = document.getElementById("sidebar");
var iconOpen = document.getElementById("icon__open");
var iconClose = document.getElementById("icon__close");
var isCheck = false;

button.addEventListener("click", function () {
  if (!isCheck) {
    sidebar.style.display = "block";
    iconOpen.style.display = "none";
    iconClose.style.display = "block ";
    isCheck = true;
    if (window.innerWidth < 992) {
      sidebar.style.left = "0";
      sidebar.style.animation = " moveRightSmallScreen  0.3s ease-out";
    } else {
      sidebar.style.left = "134px";
      sidebar.style.animation = " moveRight 0.3s ease-out";
    }
  } else {
    iconOpen.style.display = "block";
    iconClose.style.display = "none";
    sidebar.style.left = "-250px";
    if (window.innerWidth < 992) {
      sidebar.style.animation = " moveLeftSmallScreen  0.3s ease-out";
    } else {
      sidebar.style.animation = " moveLeft 0.3s ease-out";
    }
    isCheck = false;
  }
});
function handleResize() {
  console.log(isCheck);
  if (window.innerWidth < 992 && isCheck === true) {
    sidebar.style.left = "0";
  } else if (isCheck === true) {
    sidebar.style.left = "134px";
  }
}

window.addEventListener("resize", handleResize);
