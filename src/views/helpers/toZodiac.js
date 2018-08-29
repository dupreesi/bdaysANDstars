module.exports = dob => {
    const dobArr = dob.toString().split(' ');
    const month = dobArr[1];
    const day = dobArr[2];
    let zod_signs = ["Capricorn", "Aquarius", "Pisces", "Aries",
        "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio",
        "Sagittarius"];

    let zodiacSign = "";

    switch (month) {
        case 'Jan': {//January
            if (day < 20)
                zodiacSign = zod_signs[0];
            else
                zodiacSign = zod_signs[1];
        } break;
        case 'Feb': {//February
            if (day < 19)
                zodiacSign = zod_signs[1];
            else
                zodiacSign = zod_signs[2];
        } break;
        case 'Mar': {//March
            if (day < 21)
                zodiacSign = zod_signs[2];
            else
                zodiacSign = zod_signs[3];
        } break;
        case 'Apr': {//April
            if (day < 20)
                zodiacSign = zod_signs[3];
            else
                zodiacSign = zod_signs[4];
        } break;
        case 'May': {//May
            if (day < 21)
                zodiacSign = zod_signs[4];
            else
                zodiacSign = zod_signs[5];
        } break;
        case 'Jun': {//June
            if (day < 21)
                zodiacSign = zod_signs[5];
            else
                zodiacSign = zod_signs[6];
        } break;
        case 'Jul': {//July
            if (day < 23)
                zodiacSign = zod_signs[6];
            else
                zodiacSign = zod_signs[7];
        } break;
        case 'Aug': {//August
            if (day < 23)
                zodiacSign = zod_signs[7];
            else
                zodiacSign = zod_signs[8];
        } break;
        case 'Sep': {//September
            if (day < 23)
                zodiacSign = zod_signs[8];
            else
                zodiacSign = zod_signs[9];
        } break;
        case 'Oct': {//October
            if (day < 23)
                zodiacSign = zod_signs[9];
            else
                zodiacSign = zod_signs[10];
        } break;
        case 'Nov': {//November
            if (day < 22)
                zodiacSign = zod_signs[10];
            else
                zodiacSign = zod_signs[11];
        } break;
        case 'Dec': {//December
            if (day < 22)
                zodiacSign = zod_signs[11];
            else
                zodiacSign = zod_signs[0];
        } break;
    }
    return zodiacSign;
}