const copyEmail = () => {
  const emailAddress = document.getElementById("email-address").textContent;
  navigator.clipboard.writeText(emailAddress);

  alert("Copied email address: " + emailAddress + " to clipboard.");
};
