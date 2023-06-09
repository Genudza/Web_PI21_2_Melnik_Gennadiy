function offerDrink() {
    let input = document.getElementById('input').value;
    if (input === '1') {
        document.getElementById('message').innerText = 'Все, хватит!';
    } else {
        document.getElementById('message').innerText = 'Еще по одной, наливай! Девиз ты наш, знай!';
    }
}
