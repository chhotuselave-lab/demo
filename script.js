const form = document.getElementById("contact-form");
const response = document.getElementById("form-response");

form.addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  response.textContent = `Thank you, ${name}! Your message has been sent.`;
  form.reset();
});