export default function isLegalAge(field) {
    const birthDay = new Date(campo.value);
    validateAge(birthDay);

    console.log(validateAge(birthDay));
}

function validateAge(data) {
    const actualDate = new Date();
    const dateLegalAge = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return actualDate >= dateLegalAge;
}