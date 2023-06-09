function countToTen() {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += i + ' ';
    }
    document.getElementById('result').innerText = result;
}
