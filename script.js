/*var introtitle = document.getElementsByClassName("intro-title")
var educationcontant = document.getElementsByClassName("education-contant")

function opentab (tabname){
    for(introtitle of introtitle){
        introtitle.classList.remove("active-title ");
    }

    for(educationcontant of educationcontant){
        educationcontant.classList.remove("introduction");
    }
    event.currentTarget.classList.add("active-title")
}
*/
var introtitles = document.getElementsByClassName("intro-title");
var educationcontants = document.getElementsByClassName("education-contant");


function opentab(tabname) {
    for (var i = 0; i < introtitles.length; i++) {
        introtitles[i].classList.remove("active-title");
    }

    for (var j = 0; j < educationcontants.length; j++) {
        educationcontants[j].classList.remove("introduction");
    }

    event.currentTarget.classList.add("active-title");
    document.getElementById(tabname).classList.add("introduction")
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzDEngobZQBNDrwRCYgAplXG6N2W1HSJ5Y_KZ6XaXISL6C76FtsMM0e5s7VO5OdnSn3Iw/exec'
  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
              msg.innerHTML = "Message sent successfully"
              setTimeout(function(){
                msg.innerHTML = ""
              },5000)
              form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


