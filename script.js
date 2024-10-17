// let jsonData = `{
//     "product": {
//         "id": 101,
//         "name": "Laptop",
//         "price": 750,
//         "specs": {
//             "ram": "8GB",
//             "storage": "256GB SSD"
//         },
//         "inStock": true
//     }
// }`;

 
// console.log(jsonData)
 
// let objectData = JSON.parse(jsonData);

// objectData.product.name = 'Mobile'

// let updatedJson = JSON.stringify(objectData)

// console.log(updatedJson)


 
 async function getBmuData(){
    let str = "http://127.0.0.1:5500/bmu/bmuData.json"

    let response = await fetch(str);

    // console.log(response)

    let data = await response.json();

    console.log(data);


    let head1 = document.createElement('h1');

    head1.textContent = data.school;

    let div1 = document.querySelector('#div1');


    let img = document.createElement('img');

    img.src = data.image;

    console.log(img)

    div1.appendChild(head1);

    div1.appendChild(img);
    
    console.log(head1)


}

    
getBmuData()

