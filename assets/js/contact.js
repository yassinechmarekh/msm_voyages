const form = document.querySelector('.contact_form form');

const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(){
    const BodyMessage = `Nom : ${name.value} <br> Tel : ${phone.value} <br> Email : ${email.value} <br> Subject : ${subject.value} <br> Message : ${message.value} <br>`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "yassinechmarekh88@gmail.com",
        Password : "05EC02FB29BA45BE780038FCF7D8A7B0E8C9",
        To : 'yassinechmarekh88@gmail.com',
        From : "yassinechmarekh88@gmail.com",
        Subject : subject.value,
        Body : BodyMessage
    }).then(
      message => {
        if(message){
            Swal.fire({
                title: "Message Envoyé !",
                text: "Votre message a été envoyé avec succès. Merci de nous avoir contactés !",
                icon: "success",
                confirmButtonColor: "#3880e5"
            });              
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Une erreur a été produite lors de l'envoie du message !",
                footer: '<a href="contact.html">Pourquoi ai-je ce problème?</a>',
                confirmButtonColor: "#3880e5"
            });              
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});