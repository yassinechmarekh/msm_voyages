const form = document.getElementById('booking_form');

const lastname = document.getElementById('lastname');
const firstname = document.getElementById('firstname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const nationality = document.getElementById('nationality');
const placeNumberRadio = document.getElementsByName('place_number');
const number_place = document.getElementById('number_place');
const destination = document.getElementById('destination');


function bookDestination(){
    let placeNumberValue;

    placeNumberRadio.forEach(radio => {
        if (radio.checked) {
            if (radio.value === "plus") {
                placeNumberValue = number_place.value;
            } else {
                placeNumberValue = radio.value;
            }
        }
    });
    const BodyMessage = `
        Nom : ${lastname.value}<br>
        Prénom : ${firstname.value}<br>
        Téléphone : ${phone.value}<br>
        Email : ${email.value}<br>
        Nationnalité : ${nationality.value}<br>
        Nombre de place: ${placeNumberValue}<br>
        Destionation : ${destination.value}<br>
    `;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "yassinechmarekh88@gmail.com",
        Password : "05EC02FB29BA45BE780038FCF7D8A7B0E8C9",
        To : 'yassinechmarekh88@gmail.com',
        From : "yassinechmarekh88@gmail.com",
        Subject : "Réservation - MSM Voyages",
        Body : BodyMessage
    }).then(
      message => {
        if(message){
            Swal.fire({
                title: "Réservation avec succès!",
                text: "Merci de choisir MSM Voyages! Vous receverez un appel de confirmation plus tôt possible.",
                icon: "success",
                confirmButtonColor: "#3880e5"
            });
            close_modal();
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Une erreur a été produite lors de l'envoie du formulaire !",
                footer: '<a href="contact.html">Pourquoi ai-je ce problème?</a>',
                confirmButtonColor: "#3880e5"
            });              
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    bookDestination();
});