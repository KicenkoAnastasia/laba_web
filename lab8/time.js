function showTime(){
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-Ru');
    document.getElementById('time').innerHTML = currentTime;

    const hr = document.querySelector('.hr') 
    const min = document.querySelector('.min') 
    const sec = document.querySelector('.sec') 
    

    setInterval(() => { 
    

        let day = new Date() 
        let hour = day.getHours() 
        let minutes = day.getMinutes() 
        let seconds = day.getSeconds() 
    
        
        let hrrotation = (30 * hour) + (0.5 * minutes); 
        let minrotation = 6 * minutes; 
        let secrotation = 6 * seconds; 
    
        hr.style.transform = 
            `translate(-50%,-100%) rotate(${hrrotation}deg)` 
        min.style.transform = 
            `translate(-50%,-100%) rotate(${minrotation}deg)` 
        sec.style.transform = 
            `translate(-50%,-85%) rotate(${secrotation}deg)` 
    },1000);
}

showTime(); // Вызываем функцию при загрузке страницы

setInterval(showTime, 1000);
