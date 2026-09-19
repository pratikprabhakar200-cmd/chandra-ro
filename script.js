const scriptURL = "https://script.google.com/macros/s/AKfycbwajII6fWsB85H_8TZ0n0HemDy1d7FyNo3LXDkHCf2UBM0OA-UmFaFmPNXlKLycY_Ix0g/exec";

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const result = document.getElementById("result");

    const data = new URLSearchParams();

    data.append("name", document.getElementById("name").value);
    data.append("mobile", document.getElementById("phone").value);
    data.append("address", document.getElementById("address").value);
    data.append("service", document.getElementById("service").value);
    data.append("requirement", document.getElementById("message").value);

    result.innerText = "Booking submit ho rahi hai...";

    fetch(scriptURL, {
        method: "POST",
        body: data,
        mode: "no-cors"
    })
    .then(() => {
        result.innerText = "✅ Booking successfully submitted!";
        document.getElementById("bookingForm").reset();
    })
    .catch((error) => {
        result.innerText = "❌ Booking submit nahi hui. Please try again.";
        console.error(error);
    });
});

function bookService(serviceName) {
    document.getElementById("service").value = serviceName;
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}
