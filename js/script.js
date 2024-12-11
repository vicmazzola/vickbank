import isCPF from "./cpf.js";

const formField = document.querySelectorAll('[required]')

formField.forEach((field) => {
    field.addEventListener("blur", () => checkField(field));
})

function checkField(field) {
    if (field.name == "cpf" && campo.value.length >= 11) {
        isCPF(field);
    }
}