```html
<!-- ================= BOOKING SECTION ================= -->

<section id="contact">

    <h2>Book a Service</h2>

    <form id="bookingForm">

        <label for="name">Name</label>

        <input
            type="text"
            id="name"
            placeholder="Enter your name"
            required
        >


        <label for="phone">Mobile Number</label>

        <input
            type="tel"
            id="phone"
            placeholder="Enter your mobile number"
            required
        >


        <label for="address">Address</label>

        <textarea
            id="address"
            rows="3"
            placeholder="Enter your address"
            required
        ></textarea>


        <label for="service">Select Service</label>

        <select id="service" required>

            <option value="">
                Select a service
            </option>

            <option value="RO Service">
                RO Service
            </option>

            <option value="RO Repair">
                RO Repair
            </option>

            <option value="RO Installation">
                RO Installation
            </option>

            <option value="Filter Change">
                Filter Change
            </option>

        </select>


        <label for="message">Requirement</label>

        <textarea
            id="message"
            rows="4"
            placeholder="Tell us about your RO problem"
        ></textarea>


        <button type="submit">
            Book Now
        </button>

        <p id="result"></p>

    </form>

</section>


<!-- ================= GOOGLE SHEET SCRIPT ================= -->

<script>

const scriptURL =
"https://script.google.com/macros/s/AKfycbwajII6fWsB85H_8TZ0n0HemDy1d7FyNo3LXDkHCf2UBM0OA-UmFaFmPNXlKLycY_Ix0g/exec";


document
.getElementById("bookingForm")
.addEventListener("submit", function(e) {

    e.preventDefault();


    const result =
        document.getElementById("result");


    const data =
        new URLSearchParams();


    data.append(
        "name",
        document.getElementById("name").value
    );


    data.append(
        "mobile",
        document.getElementById("phone").value
    );


    data.append(
        "address",
        document.getElementById("address").value
    );


    data.append(
        "service",
        document.getElementById("service").value
    );


    data.append(
        "requirement",
        document.getElementById("message").value
    );


    result.innerText =
        "Booking submit ho rahi hai...";


    fetch(scriptURL, {

        method: "POST",

        body: data,

        mode: "no-cors"

    })

    .then(function() {

        result.innerText =
            "✅ Booking successfully submitted!";

        document
        .getElementById("bookingForm")
        .reset();

    })

    .catch(function(error) {

        result.innerText =
            "❌ Booking submit nahi hui. Please try again.";

        console.error(error);

    });

});


function bookService(serviceName) {

    document
    .getElementById("service")
    .value = serviceName;


    document
    .getElementById("contact")
    .scrollIntoView({
        behavior: "smooth"
    });

}

</script>
```
