document.getElementById('getDataButton').addEventListener('click', function() {
    const birthYear = document.getElementById('birthYear').innerText;
    document.getElementById('domResult').textContent = 'Год рождения: ' + birthYear;
});

document.getElementById('changeYearButton').addEventListener('click', function() {
    const newYear = prompt('Введите новый год рождения:');
    if (newYear && !isNaN(newYear) && newYear > 1900 && newYear <= new Date().getFullYear()) {
        document.getElementById('birthYear').textContent = newYear;
        document.getElementById('domResult').textContent = 'Год рождения изменен на: ' + newYear;
    } else {
        alert('Пожалуйста, введите корректный год.');
    }
});
