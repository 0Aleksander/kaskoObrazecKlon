document.addEventListener("DOMContentLoaded", function () {
    const regNumberInput = document.querySelector('.input-group input[type="text"]');
    const nextButton = document.querySelector('.btn.primary');

    // Disable "Naprej" button by default
    nextButton.disabled = true;

    // Add input event listener to the text input
    regNumberInput.addEventListener("input", function () {
        // Enable the button if the input has text, otherwise disable it
        nextButton.disabled = !regNumberInput.value.trim();
    });

    // Prevent the form from submitting if the input is empty
    nextButton.addEventListener("click", function (event) {
        if (!regNumberInput.value.trim()) {
            alert("Prosim, vnesite registrsko številko.");
            event.preventDefault(); // Prevents navigating to the next page
        }
    });
});
