function clock() {
  const militaryTime = moment().format("dddd, DD/MM/YYYY HH:mm:ss Z");
  const snowflakeTime = moment().format("dddd, MM/DD/YYYY hh:mm:ss A Z");
  const interval = setInterval(clock, 1000);
  let paragraph = document.querySelector(".paragraph");

  // showing 12-hour format for countries that use it
  if (
    navigator.language === "en-AU" ||
    navigator.language === "en-US" ||
    navigator.language === "en-IE" ||
    navigator.language === "en-NZ" ||
    navigator.language === "en-CA" ||
    navigator.language === "en-PH" ||
    navigator.language === "BN" ||
    navigator.language === "es-CO" ||
    navigator.language === "es-SV" ||
    navigator.language === "es-NI" ||
    navigator.language === "es-HN" ||
    navigator.language === "ar-JO" ||
    navigator.language === "ar-EG" ||
    navigator.language === "ar-SA" ||
    navigator.language === "pa-IN" ||
    navigator.language === "ms-MY" ||
    navigator.language === "tl-PH"
  ) {
    paragraph.innerHTML = snowflakeTime;
  } else {
    paragraph.innerHTML = militaryTime;
  }
}
