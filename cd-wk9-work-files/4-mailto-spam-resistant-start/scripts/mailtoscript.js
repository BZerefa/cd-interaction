const addressElem = document.getElementById("site-email");

console.log(addressElem);

const recipient = "bubbybubster";
const mailVar = "mailto:";
const domain = "gmail.com";

let emailAddress = '<a href="' + mailVar + recipient + "@" + domain + '">';

emailAddress += "Email Bubby Bubster</a>";

console.log(emailAddress);

addressElem.innerHTML = emailAddress;
