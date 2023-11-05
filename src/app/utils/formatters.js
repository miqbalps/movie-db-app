// export function formatReadableDate(dateString) {
//   const options = { day: "numeric", month: "long", year: "numeric" };
//   const date = new Date(dateString);
//   const formattedDate = date.toLocaleDateString("en-GB", options);

//   return formattedDate;
// }

export function formatReadableDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}

export function formatReadableCurrency(number) {
  const formattedCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100); // Assuming the number is in cents

  return formattedCurrency;
}

export function formatReadableNumber(number) {
  if (typeof number !== "number" || isNaN(number)) {
    return "Invalid number";
  }

  const numberInThousands = number / 1000;
  const numberInTenThousands = number / 10000;
  const numberInHundredThousands = number / 100000;
  const numberInMillions = number / 1000000;
  const numberInBillions = number / 1000000000;

  if (number >= 1000000000) {
    return `${numberInBillions.toFixed(0)} billion USD`;
  } else if (number >= 1000000) {
    return `${numberInMillions.toFixed(0)} million USD`;
  } else if (number >= 100000) {
    return `${numberInHundredThousands.toFixed(0)} hundred thousand USD`;
  } else if (number >= 10000) {
    return `${numberInTenThousands.toFixed(0)} ten thousand USD`;
  } else if (number >= 1000) {
    return `${numberInThousands.toFixed(0)} thousand USD`;
  } else if (number == 0) {
    return `-`;
  } else {
    return `${number.toLocaleString()} USD`;
  }
}

export function formatLanguage(languageCode) {
  const languageNames = {
    en: "English",
    es: "Spanish",
    fr: "French",
    de: "German",
    it: "Italian",
    ja: "Japanese",
    // Add more language codes and names as needed
  };
  const languageName = languageNames[languageCode] || "-";

  return languageName;
}
