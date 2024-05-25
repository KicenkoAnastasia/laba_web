function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday) / 1000 / 60 / 60 / 24;
    daysCount = Math.floor(daysCount);
    document.getElementById('days-count').textContent = "Количество дней с даты: " + daysCount;
}

function resetFields() {
    document.querySelector('input[type=date]').value = '';
    document.getElementById('days-count').textContent = '';
}