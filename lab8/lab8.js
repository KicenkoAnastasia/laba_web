function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();

    // Russian locale
    let dateRU = today.toLocaleDateString('ru-RU');
    let timeRU = today.toLocaleTimeString('ru-RU');
    let outputRU = `Locale - России: <br>Date : ${dateRU}  Time: ${timeRU}`;

    // Arabic (U.A.E.) locale
    let dateAE = today.toLocaleDateString('ar-AE');
    let timeAE = today.toLocaleTimeString('ar-AE');
    let outputAE = `Locale - Arabic (U.A.E.): <br> Date: ${dateAE} Time: ${timeAE}`;

    // English (Australia) locale
    let dateAU = today.toLocaleDateString('en-AU');
    let timeAU = today.toLocaleTimeString('en-AU');
    let outputAU = `Locale - English (Australia):<br> Date: ${dateAU} Time: ${timeAU}`;

    // Spanish (Spain) locale
    let dateES = today.toLocaleDateString('es-ES');
    let timeES = today.toLocaleTimeString('es-ES');
    let outputES = `Locale - Spanish (Spain): <br>Date: ${dateES} Time: ${timeES}`;

    // Italian locale
    let dateIT = today.toLocaleDateString('it');
    let timeIT = today.toLocaleTimeString('it');
    let outputIT = `Locale - Italian:<br> Date: ${dateIT} Time: ${timeIT}`;

    // Dutch (Netherlands) locale
    let dateNL = today.toLocaleDateString('nl-NL');
    let timeNL = today.toLocaleTimeString('nl-NL');
    let outputNL = `Locale - Dutch (Netherlands):<br> Date: ${dateNL} Time: ${timeNL}`;

    out.innerHTML = `
    <div class="container1">
        <div class="RU">${outputRU}</div>
        <div class="AE">${outputAE}</div>
    </div>
    <div class="container2">
        <div class="AU">${outputAU}</div>
        <div class="ES">${outputES}</div>
    </div>
    <div class="container3">
        <div class="IT">${outputIT}</div>
        <div class="NL">${outputNL}</div>
    </div>
    `;
}