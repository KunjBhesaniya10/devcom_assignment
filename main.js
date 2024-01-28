
// animation functions ----------------------->>>

function fadein() {
    let elements_fadein = document.querySelectorAll(".fadein_animate");
    for (let i = 0; i < elements_fadein.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = elements_fadein[i].getBoundingClientRect().top;
      let elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        elements_fadein[i].classList.add("active");            // when element is at height below specified it will have active class which is final state of element.
      } else {
        elements_fadein[i].classList.remove("active");               // when it is below the specified height it will have other class and not the final state.
      }
    }
  }
  window.addEventListener("scroll", fadein);

function fadein_left() {
    let elements_fadein_left= document.querySelectorAll(".fadein_left_animate");
    for (let i=0; i<elements_fadein_left.length ; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = elements_fadein_left[i].getBoundingClientRect().top;
        let elementVisible = 100;
    
    if(elementTop< windowHeight-elementVisible){
        elements_fadein_left[i].classList.add("actives");
    }
    else {
        elements_fadein_left[i].classList.remove("actives");
    }
}
}
window.addEventListener("scroll",fadein_left);
fadein_left();

// animatin for fade left------------------>
function fadein_right() {
    let elements_fadein_right = document.querySelectorAll(".fadein_right_animate");
    for (let i=0; i<elements_fadein_right.length ; i++) {
        let windowHeight = window.innerHeight;  // height of viewport
        let elementTop = elements_fadein_right[i].getBoundingClientRect().top;  // height of element from top
        let elementVisible = 100;   // dist. from bottom from where u have to stop it.
    
    if(elementTop< windowHeight-elementVisible){
        elements_fadein_right[i].classList.add("actives-1");
    }
    else {
        elements_fadein_right[i].classList.remove("actives-1");
    }
}
}
window.addEventListener("scroll", fadein_right);

function fadein_top() {
    let elements_fadein = document.querySelectorAll(".fadein_top_animate");
    for (let i = 0; i < elements_fadein.length; i++) {
     // let windowHeight = window.innerHeight;
      let elementBottom = elements_fadein[i].getBoundingClientRect().bottom;
      let elementVisible = 100;
      if (elementBottom < elementVisible) {
        elements_fadein[i].classList.remove("actives-2");
      } else {
        elements_fadein[i].classList.add("actives-2");
      }
    }
  }
  window.addEventListener("scroll",fadein_top);

let animate_title = document.querySelectorAll(".titles");
   function animate_titles() {
            for( let i=0; i< animate_title.length; i++) {
                let windowHeight = window.innerHeight;
                let elementTop = elements_fadein[i].getBoundingClientRect().top;
                let elementVisible = 400;
                if(elementTop< windowHeight-elementVisible) {
                    animate_title[i].classList.add("animate-titles")
                }
                else animate_title[i].classList.remove("animate-titles")
            }
   }
   window.addEventListener("scroll",animate_titles);