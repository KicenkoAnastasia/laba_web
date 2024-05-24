function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();


    let dateRU = today.toLocaleDateString('ru-RU');
    let timeRU = today.toLocaleTimeString('ru-RU');
    let outputRU = `Locale - России: <br>Date : ${dateRU}  Time: ${timeRU}`;

    
    let dateAE = today.toLocaleDateString('ar-AE');
    let timeAE = today.toLocaleTimeString('ar-AE');
    let outputAE = `Locale - Arabic (U.A.E.): <br> Date: ${dateAE} Time: ${timeAE}`;


    let dateAU = today.toLocaleDateString('en-AU');
    let timeAU = today.toLocaleTimeString('en-AU');
    let outputAU = `Locale - English (Australia):<br> Date: ${dateAU} Time: ${timeAU}`;

   
    let dateES = today.toLocaleDateString('es-ES');
    let timeES = today.toLocaleTimeString('es-ES');
    let outputES = `Locale - Spanish (Spain): <br>Date: ${dateES} Time: ${timeES}`;

   
    let dateIT = today.toLocaleDateString('it');
    let timeIT = today.toLocaleTimeString('it');
    let outputIT = `Locale - Italian:<br> Date: ${dateIT} Time: ${timeIT}`;

    
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



    document.addEventListener("DOMContentLoaded", function() {
        const currentDate = new Date();
        
        // информация о текущем годе, месяце, дате и дне недели
        const year = currentDate.getFullYear();
        const month = currentDate.toLocaleString('default', { month: 'long' });
        const date = currentDate.getDate();
        const dayOfWeek = currentDate.toLocaleString('default', { weekday: 'long' });

        const currentInfoString = `
            <p>Текущий год:  ${year}</p>
            <p>Текущий месяц:  ${month}</p>
            <p>Текущая дата:  ${date}</p>
            <p>День недели:  ${dayOfWeek}</p>
        `;
        
        document.getElementById('currentInfo').innerHTML = currentInfoString;
    });





    function getDayOfWeek() {
        var day = parseInt(document.getElementById("day").value);
        var month = parseInt(document.getElementById("month").value) - 1;
        var year = parseInt(document.getElementById("year").value);

        var date = new Date(year, month, day);
        var daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        var dayOfWeek = daysOfWeek[date.getDay()];

        document.getElementById("result").innerText = "День недели: " + dayOfWeek;
    }