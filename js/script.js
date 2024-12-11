import isCPF from "./cpf.js";
import isLegalAge from "./legal-age.js";

const formField = document.querySelectorAll('[required]')

formField.forEach((field) => {
    field.addEventListener("blur", () => checkField(field));
})

function checkField(field) {
    if (field.name == "cpf" && field.value.length >= 11) {
        isCPF(field);
    }

    if (field.name == "birthday" && field.value != "") {
        isLegalAge(field);
    }

}