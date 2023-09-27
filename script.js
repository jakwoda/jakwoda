// Get the modal
let modal = document.querySelector("#modalAbout1");
let buttonAbout = document.querySelector('#about');
// When the user clicks anywhere outside of the modal, close it

window.addEventListener("click", closeModal);
function closeModal(event){
if (event.target == modal) {
        modal.display='none'
      }
}

function showModal(){
modal.style.display='block';
}
// buttonAbout.addEventListener("enter", showPicture)

buttonAbout.addEventListener("click", showModal)
