function bookService(serviceName) {
    document.getElementById("service").value = serviceName;
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const service = document.getElementById("service").value;

    document.getElementById("result").textContent =
        "Thank you " + name + "! Your " + service + " booking request has been received.";

    this.reset();
});
