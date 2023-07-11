const emailField = document.getElementById("emailAddress");
emailField.focus({
  preventScroll: true,
});
const buyIcon = document.querySelector('.fa-solid.fa-cart-shopping.buy-icon');
buyIcon.addEventListener('click', function() {
  window.location.href = 'shop.html';
});
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    items: document.getElementById("items").value,
    location: document.getElementById("location").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_ayo8yvk";
  const templateID = "template_urki1we";
    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("items").value = "";
        document.getElementById("location").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Order Placed Successfully!!")

    })
    .catch(err=>console.log(err));
}
function sendOrder() {
  var params = {
    eventName: document.getElementById("eventName").value,
    days: document.getElementById("days").value,
    requirements: document.getElementById("requirements").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_jvjfi8e";
  const templateID = "template_4rirudh";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("eventName").value = "";
        document.getElementById("days").value = "";
        document.getElementById("requirements").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("You Hired Your Chef!!")
    })
    .catch(err=>console.log(err));
}

document.getElementById('whatsappButton').addEventListener('click', function() {
  var whatsappURL = 'https://wa.me/+254718533655';
  window.open(whatsappURL);
});


function validateAndSendSubscription() {
  var emailInput = document.getElementById('emailAddress');
  var email = emailInput.value.trim();
  if (email === '') {
    alert('Please enter your email address.');
    return;
  }
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  sendSubscription();
}

function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function sendSubscription() {
  var params = {
    emailAddress: document.getElementById("emailAddress").value,
  };
  const serviceID = "service_hcrijjp";
  const templateID = "template_2mt6t6p";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("emailAddress").value = "";
        console.log(res);
        alert("You Have Successfully Subscribed!!")
    })
    .catch(err=>console.log(err));
}
function displayDeliveryMessage() {
  alert("Your order will be delivered before the end of 24 hours");
}
function displayPrivacyPolicy() {
  alert("We are committed to protecting your privacy. Please read our Privacy Policy for more information.");
}
function displayTermsAndConditions() {
  alert("All refunds are made after application and approval for the same. Otherwise, goods bought are not returnable. By clicking 'OK,' you agree to our terms and conditions.");
}
function displayPayment() {
  alert("All payments via mpesa number: 0718533655")
}
function trackOrder() {
  window.alert("Your delivery will be made within 24 hours!")
}