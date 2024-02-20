function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "marklinenyambe@gmail.com",
    Password: "#Pmz3410bit!!",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
