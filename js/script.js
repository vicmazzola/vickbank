import isCPF from "./cpf.js";
import isLegalAge from "./legal-age.js";

const formFields = document.querySelectorAll('[required]');
const form = document.querySelector('[data-form]');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const responsesList = {
        "name": e.target.elements["name"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "birthday": e.target.elements["birthday"].value,
    };

    localStorage.setItem("registration", JSON.stringify(responsesList));

    window.location.href = "./open-account-form2.html";
});

formFields.forEach((field) => {
    field.addEventListener("blur", () => checkField(field));
    field.addEventListener("invalid", (event) => event.preventDefault());
});

const errorTypes = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

const messages = {
    name: {
        valueMissing: "The name field cannot be empty.",
        patternMismatch: "Please provide a valid name.",
        tooShort: "Please provide a valid name."
    },
    email: {
        valueMissing: "The email field cannot be empty.",
        typeMismatch: "Please provide a valid email.",
        tooShort: "Please provide a valid email."
    },
    rg: {
        valueMissing: "The RG field cannot be empty.",
        patternMismatch: "Please provide a valid RG.",
        tooShort: "The RG field does not have enough characters."
    },
    cpf: {
        valueMissing: "The CPF field cannot be empty.",
        patternMismatch: "Please provide a valid CPF.",
        customError: "The CPF provided does not exist.",
        tooShort: "The CPF field does not have enough characters."
    },
    birthday: {
        valueMissing: "The birthday field cannot be empty.",
        customError: "You must be over 18 years old to register."
    },
    terms: {
        valueMissing: "You must accept our terms before continuing."
    }
};

function checkField(field) {
    let message = "";
    field.setCustomValidity('');

    if (field.name == "cpf" && field.value.length >= 11) {
        isCPF(field);
    }
    if (field.name == "birthday" && field.value != "") {
        isLegalAge(field);
    }

    errorTypes.forEach((error) => {
        if (field.validity[error]) {
            message = messages[field.name][error];
            console.log(message);
        }
    });

    const errorMessage = field.parentNode.querySelector('.error-message');
    const isValid = field.checkValidity();

    if (!isValid) {
        errorMessage.textContent = message;
    } else {
        errorMessage.textContent = "";
    }
}