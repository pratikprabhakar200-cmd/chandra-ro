const scriptURL = "https://script.google.com/macros/s/AKfycbzFJNIxlOcdtsRA_xeotFBfAO_QTPogRN-CO9Uktod2RsNrxcecXKHJ1PJUzby2fB7M1g/exec";

document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = this;

    const data = new URLSearchParams({
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        address: document.getElementById("address").value,
        service: document.getElementById("service").value,
        requirement: document.getElementById("requirement").value
    });

    fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: data
    });

    document.getElementById("result").textContent =
        "Thank you! Your booking request has been received.";

    form.reset();
});
