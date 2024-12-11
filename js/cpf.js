export default function isCPF(field) {
    const cpf = field.value.replace(/\.|-/g, "");
    if (validateRepeatedNumber(cpf) || validateFirstDigit(cpf) || validateSecondDigit(cpf)) {
        console.log("This CPF doesn't exist")
    } else {
        console.log("This CPF exists")
    }

    console.log(validateRepeatedNumber(cpf));
}

function validateRepeatedNumber(cpf) {
    const repeatedNumbers = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return repeatedNumbers.includes(cpf)
}

function validateFirstDigit(cpf) {
    let sum = 0;
    let multiplier = 10;

    for (let length = 0; length < 9; length++) {
        sum += cpf[length] * multiplier;
        multiplier--
    }

    sum = (sum * 10) % 11;

    if (sum == 10 || sum == 11) {
        sum = 0;
    }

    return sum != cpf[9];
}

function validateSecondDigit(cpf) {
    let sum = 0;
    let multiplier = 11;

    for (let length = 0; length < 10; length++) {
        sum += cpf[length] * multiplier;
        multiplier--
    }

    sum = (sum * 10) % 11;

    if (sum == 10 || sum == 11) {
        sum = 0;
    }

    return sum != cpf[10];
}