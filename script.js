const form = document.getElementById("supportForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const symptoms = document.getElementById("symptoms").value;

    let priority = "Low";
    let action = "Monitor symptoms and stay hydrated.";

    const symptomText = symptoms.toLowerCase();

    if (
        symptomText.includes("fever") ||
        symptomText.includes("headache") ||
        symptomText.includes("pain")
    ) {
        priority = "Medium";
        action = "Contact a healthcare volunteer for guidance.";
    }

    if (
        symptomText.includes("chest pain") ||
        symptomText.includes("breathing problem") ||
        symptomText.includes("shortness of breath")
    ) {
        priority = "High";
        action = "Seek immediate medical attention.";
    }

    document.getElementById("result").innerHTML = `
        <h3>✅ Registration Successful</h3>

        <p><strong>AI Summary:</strong></p>
        <p>Patient <strong>${name}</strong> reports: ${symptoms}</p>

        <hr>

        <p><strong>Priority Level:</strong> ${priority}</p>

        <p><strong>Suggested Action:</strong> ${action}</p>
    `;

    form.reset();
});