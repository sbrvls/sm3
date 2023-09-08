let price_tovar = prompt("Введите стоимость товара");
let money = prompt('Введите количество денег клиента');
if (price_tovar == money){
    alert('Покупка совершена.');
} else if (price_tovar > money){
    let ost = price_tovar - money;
    alert('Недостаточно ' + ost + ' рублей');
} else if (price_tovar < money){ 
    let ost = money - price_tovar;
    alert('Сдача ' + ost +  ' рублей');
}