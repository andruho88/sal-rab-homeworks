function sendRequest(name, phone, address, goods, sum) {

    let clientString = name + " " + phone;
    address = `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв ${address.flat}`;
    
    let data = {
        client: clientString, 
        order: {address, sum}, 
        goods: []
        };

    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i += 1) {
        data.goods.push({title: goods[i].title, count: goods[i].count});
    };

    let jsonData = JSON.stringify({data});
  
    return jsonData;
}
