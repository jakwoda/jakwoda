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

function copyClipboard() {
  // Get the text fielda
 let copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}