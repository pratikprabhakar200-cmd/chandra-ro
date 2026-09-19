const scriptURL = "https://script.google.com/macros/s/AKfycbzFJNIxlOcdtsRA_xeotFBfAO_QTPogRN-CO9Uktod2RsNrxcecXKHJ1PJUzby2fB7M1g/exec";

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = this;

    const data = new URLSearchParams();

    data.append("name", document.getElementById("name").value);
    data.append("mobile", document.getElementById("phone").value);
    data.append("service", document.getElementById("service").value);
    data.append("requirement", document.getElementById("message").value);

    fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: data
    });

    document.getElementById("result").textContent =
        "Thank you! Your booking request has been received.";

    form.reset();
});
