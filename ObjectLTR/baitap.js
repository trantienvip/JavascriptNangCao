class XaThu{
    constructor(name, congvatly, congphep, mautoida, giap, giapphep, tocdanh){
        this.name = name;
        this.congvatly = congvatly;
        this.congphep = congphep;
        this.mautoida = mautoida;
        this.giap = giap;
        this.giapphep = giapphep;
        this.tocdanh = tocdanh;
    }
}





class XaThuFake extends XaThu {
	static abc(){
      const tien = new XaThuFake('valhein', 173, 0, 3592, 141, 80, 0);
      return `${tien.giapphep}`;
    }
}

// const valheinfake = new XaThuFake('valhein', 173, 0, 3592, 141, 80, 0);
console.log(XaThuFake.abc());