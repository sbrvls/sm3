let price_tovar = prompt("Введите стоимость товара");
let money = prompt("Введите количество денег клиента");
if (price_tovar == money){
    alert('Покупка совершена.')
} if (price_tovar > money){
    let ost = price_tovar - money;
    alert('Недостаточно ' + ost + " рублей");
} if (price_tovar < money){
    let sdacha = money - price_tovar;
    alert('Сдача ' + sdacha +  ' рублей');
}
