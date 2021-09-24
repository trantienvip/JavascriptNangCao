import { data } from './data.js';
class Product {
    constructor(data) {
        this.data = data;
    }

    showData(){
        const show = document.querySelector("#show");
        const htmls = this.data.map(data =>
            `
            <tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.price}</td>
                <td>${data.status}</td>
            </tr>
            `
            );
            show.innerHTML = htmls.join("");
    }
}

window.addEventListener('DOMContentLoaded', function () {
    const product = new Product(data);
    product.showData();
});



// class Tuong{

// }
// class DauSi extends Tuong{

// }

// TrieuVan = new DauSi()
