// =====================================
// ELEMENTS
// =====================================

const steps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".step");

const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");

let currentStep = 0;


// =====================================
// SHOW STEP
// =====================================

function showStep(index) {

    steps.forEach((step, i) => {

        step.classList.remove("active");
        progressSteps[i].classList.remove("active");

        if (i === index) {

            step.classList.add("active");
            progressSteps[i].classList.add("active");

        }

    });

    currentStep = index;

    updateSummary();

    updateReview();

}


// =====================================
// NEXT BUTTONS
// =====================================

nextBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        if (currentStep < steps.length - 1) {

            showStep(currentStep + 1);

        }

    });

});


// =====================================
// PREVIOUS BUTTONS
// =====================================

prevBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        if (currentStep > 0) {

            showStep(currentStep - 1);

        }

    });

});


// =====================================
// CLICK PROGRESS BAR
// =====================================

progressSteps.forEach((step, index) => {

    step.addEventListener("click", () => {

        showStep(index);

    });

});


// =====================================
// KEYBOARD SHORTCUTS
// =====================================

document.addEventListener("keydown", (e) => {

    const tag = document.activeElement.tagName;

    if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;

    if (e.key >= "1" && e.key <= "4") {

        showStep(Number(e.key) - 1);

    }

});


// =====================================
// SUMMARY
// =====================================

function updateSummary() {

    const service = document.getElementById("service");
    const date = document.getElementById("appointmentDate");
    const time = document.getElementById("appointmentTime");

    document.getElementById("summaryService").textContent =
        service.value || "None Selected";

    document.getElementById("summaryDate").textContent =
        date.value || "--";

    document.getElementById("summaryTime").textContent =
        time.value || "--";

    let price = "$0.00";

    if (service.selectedIndex > 0) {

        price = "$" + service.options[service.selectedIndex].dataset.price + ".00";

    }

    document.getElementById("summaryPrice").textContent = price;

    document.getElementById("selectedPrice").textContent = price;

}


// =====================================
// REVIEW PAGE
// =====================================

function updateReview() {

    document.getElementById("reviewCategory").textContent =
        document.getElementById("category").value;

    document.getElementById("reviewService").textContent =
        document.getElementById("service").value;

    document.getElementById("reviewName").textContent =
        document.getElementById("firstName").value + " " +
        document.getElementById("lastName").value;

    document.getElementById("reviewEmail").textContent =
        document.getElementById("email").value;

    document.getElementById("reviewPhone").textContent =
        document.getElementById("phone").value;

    document.getElementById("reviewDate").textContent =
        document.getElementById("appointmentDate").value;

    document.getElementById("reviewTime").textContent =
        document.getElementById("appointmentTime").value;

}


// =====================================
// LIVE UPDATES
// =====================================

document.getElementById("service").addEventListener("change", updateSummary);

document.getElementById("appointmentDate").addEventListener("change", updateSummary);

document.getElementById("appointmentTime").addEventListener("change", updateSummary);

document.getElementById("category").addEventListener("change", updateReview);

document.getElementById("firstName").addEventListener("input", updateReview);

document.getElementById("lastName").addEventListener("input", updateReview);

document.getElementById("email").addEventListener("input", updateReview);

document.getElementById("phone").addEventListener("input", updateReview);


// =====================================
// CONFIRM BOOKING
// =====================================

document.querySelector(".confirm-btn").addEventListener("click", () => {

    alert("✅ Your booking has been confirmed!");

});


// =====================================
// INITIALISE
// =====================================

showStep(0);