export default function isLegalAge(field) {
    const birthDay = new Date(field.value);
    if (!validateAge(birthDay)) {
        field.setCustomValidity("The user is not of legal age.");
    } else {
        field.setCustomValidity("");
    }
}

function validateAge(date) {
    const actualDate = new Date();
    const dateLegalAge = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return actualDate >= dateLegalAge;
}
