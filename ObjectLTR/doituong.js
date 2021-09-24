const sv = {
    ma_sinh_vien: 'PH12974',
    ho_va_ten: 'Trần Tiến',
    lop: 'Js Nâng Cao',
    ngay_nhap_hoc: '5/5/2020',
    diem_trung_binh: 5,
    tinhHocLuc(){
        if (this.diem_trung_binh < 5) {
            return 'Học lực yếu';
        }else if(5 <= this.diem_trung_binh && this.diem_trung_binh <7){
            return `${sv.ho_va_ten}: Học lực Trung bình`;
        }else if(7 <= this.diem_trung_binh && this.diem_trung_binh <8){
            return `${sv.ho_va_ten}: Học lực Khá`;
        }else if(8 <= this.diem_trung_binh && this.diem_trung_binh <= 10){
            return `${sv.ho_va_ten}: Học lực Giỏi`;
        }
    },

    thoigianratruong(){

    }
}

console.log(sv.tinhHocLuc());