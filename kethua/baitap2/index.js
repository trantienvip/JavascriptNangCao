class Tuong{
    constructor(name,mauToiDa,images, congVatLy, giap, giapPhep, tocChay, hoiMau, hoiNangLuong, tamDanh){
        this.name = name;
        this.mauToiDa = mauToiDa;
        this.images = images;
        this.congVatLy = congVatLy;
        this.giap = giap;
        this.giapPhep = giapPhep;
        this.tocChay = tocChay;
        this.hoiMau = hoiMau;
        this.hoiNangLuong = hoiNangLuong;
        this.tamDanh = tamDanh;
    }

    info(){
        return `
        <img src="${this.images}" alt=""> <br>
        Thông tin của tướng <b>${this.name}</b> là: <br>`;
    }
}

class xaThu extends Tuong{
    constructor(name, mauToiDa,images, congVatLy, giap, giapPhep, tocChay, hoiMau, hoiNangLuong, tamDanh, Q, W, E, R){
        super(name, mauToiDa, images, congVatLy, giap, giapPhep, tocChay, hoiMau, hoiNangLuong, tamDanh);
        this.Q = Q;
        this.W = W;
        this.E = E;
        this.R = R;
    }
    
    infoXaThu(){
        const show = document.querySelector('#show');

        return show.innerHTML = `=====<b>Tướng hệ xạ thủ</b>===== <br>
        ${this.info()}
        - Công vật lý: ${this.congVatLy} <br>
        - Máu tối đa: ${this.mauToiDa} <br>
        - Giáp: ${this.giap} <br>
        - Giáp phép: ${this.giapPhep} <br>
        - Tốc chạy: ${this.tocChay} <br>
        - Hồi máu: ${this.hoiMau} <br>
        - Hồi năng lượng: ${this.hoiNangLuong} <br>
        - Tầm đánh: ${this.tamDanh} <br>
        ====================== <br>
        ${this.kyNang()}`;
    }

    kyNang(){
        return `Kỹ năng================ <br>
        Q: ${this.Q} <br>
        W: ${this.W} <br>
        E: ${this.E} <br>
        R: ${this.R} <br>
        `
    }
}

class PhepThuat extends Tuong{
    constructor(name, mauToiDa,images, congVatLy, giap, giapPhep, tocChay, hoiMau, hoiNangLuong, tamDanh, Q, W, E, R){
        super(name, mauToiDa, images, congVatLy, giap, giapPhep, tocChay, hoiMau, hoiNangLuong, tamDanh);
        this.Q = Q;
        this.W = W;
        this.E = E;
        this.R = R;
    }
    
    infoPhepThuat(){
        const show = document.querySelector('#show2');

        return show.innerHTML = `=====<b>Tướng hệ phép thuật</b>===== <br>
        ${this.info()}
        - Công vật lý: ${this.congVatLy} <br>
        - Máu tối đa: ${this.mauToiDa} <br>
        - Giáp: ${this.giap} <br>
        - Giáp phép: ${this.giapPhep} <br>
        - Tốc chạy: ${this.tocChay} <br>
        - Hồi máu: ${this.hoiMau} <br>
        - Hồi năng lượng: ${this.hoiNangLuong} <br>
        - Tầm đánh: ${this.tamDanh} <br>
        ====================== <br>
        ${this.kyNang()}`;
    }

    kyNang(){
        return `Kỹ năng================ <br>
        Q: ${this.Q} <br>
        W: ${this.W} <br>
        E: ${this.E} <br>
        R: ${this.R} <br>
        `
    }
}



window.addEventListener('DOMContentLoaded', function(){
    const valHein = new xaThu('ValHein', 3592, 'https://lienquan.garena.vn/files/skin/83d9de6ce9963f9ea406db2edd81707f5ee04e755f2a7.jpg', 173, 141, 80, 360, 50, 15, 'Gần', 'ÁM KHÍ', 'LỜI NGUYỀN TỬ VONG', 'CHUYẾN SĂN MẠO HIỂM', 'BÃO ĐẠN');
    valHein.infoXaThu();
    valHein.kyNang();

    const krixi = new PhepThuat('Krixi', 3088, 'https://lienquan.garena.vn/files/skin/3fa6fb1c1695570e79df259229e7a6c9583ff18becc9f.png', 153, 141, 80, 360, 50, 15, 'Xa', 'TUNG CÁNH', 'BÃO LÁ', 'BƯỚM ẢO', 'MƯA SAO BĂNG');
    krixi.infoPhepThuat();
    krixi.kyNang();
});