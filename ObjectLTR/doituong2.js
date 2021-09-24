// function Animal(name, age, price){
//     this.name = name;
//     this.age = age;
//     this.price = price;
//     this.run = function(){
//         console.log(`${this.name} Đang chạy`);
//     }
// }

// const Meo = new Animal('Meo', 11, 50000);
// console.log(Meo.name);


class tien{
    static constructor(nuoc, giatri){
        this.nuoc = nuoc;
        this.giatri = giatri;
    }
}

const tien1 = new tien('VN', 10000);
console.log(tien1.nuoc);


class dola extends tien{
    
}

const dola2 = new tien('My', 1);
console.log(dola2.nuoc);