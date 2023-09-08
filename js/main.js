let price_tovar = prompt("Введите стоимость товара");
let money = prompt('Введите количество денег клиента');
if (price_tovar == money){
    console.log('Покупка совершена.');
} if (price_tovar > money){
    let ost = price_tovar - money;
    console.log('Недостаточно ' + ost + 'рублей');
} if (price_tovar < money){
    let sdacha = money - price_tovar;
    console.log('Сдача ' + sdacha +  ' рублей');
}