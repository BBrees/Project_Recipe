function myValidation() {
    let x = document.forms["contact"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  const mediaQuery = window.matchMedia("only screen and (max-width: 768px)");

  if (mediaQuery.matches) {
      
    console.log("It matches the phone!");
  } else {
      console.log("it doesn't match the phone!")
  }

const mediaQueryList = window.matchMedia("only screen and (min-width: 768px)");

if (mediaQueryList.matches) {
    
    console.log("It matches!");
} else {
    console.log("it doesn't match!")
}


if (mediaQueryList.matches){

const card = document.querySelector('.card-inner');


card.addEventListener('click', function(){
    card.classList.toggle('is-flipped')

});

}