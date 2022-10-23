class fibraOptica {
    constructor(posicion,buffer,color){
        this.posicion = posicion;
        this.buffer = buffer;
        this.color = color;
        this.mostrarFibra = `La posicion ${this.posicion } es la fibra color ${this.color}, del buffer ${this.buffer}`;
        this.fibra0 = 'Esa fibra no existe';
    }
    verInfo(){
       document.getElementById("parrafo").innerHTML = this.mostrarFibra;
    }
    verInfo2(){
        document.getElementById("parrafo").innerHTML = this.fibra0;
    }
    
}
const fibra0 = 'esa fibra no exite';
const fibra1 = new fibraOptica(1,"azul","azul");
const fibra2 = new fibraOptica(2,"azul","naranja"); 
const fibra3 = new fibraOptica(3,"azul","verde");
const fibra4 = new fibraOptica(4,"azul","marron");
const fibra5 = new fibraOptica(5,"azul","gris");
const fibra6 = new fibraOptica(6,"azul","blanco");
const fibra7 = new fibraOptica(7,"azul","rojo");
const fibra8 = new fibraOptica(8,"azul","negro");
const fibra9 = new fibraOptica(9,"azul","amarillo");
const fibra10 = new fibraOptica(10,"azul","violeta");
const fibra11 = new fibraOptica(11,"azul","rosa");
const fibra12 = new fibraOptica(12,"azul","celeste");

const fibra13 = new fibraOptica(13,"naranja","azul");
const fibra14 = new fibraOptica(14,"naranja","naranja"); 
const fibra15 = new fibraOptica(15,"naranja","verde");
const fibra16 = new fibraOptica(16,"naranja","marron");
const fibra17 = new fibraOptica(17,"naranja","gris");
const fibra18 = new fibraOptica(18,"naranja","blanco");
const fibra19 = new fibraOptica(19,"naranja","rojo");
const fibra20 = new fibraOptica(20,"naranja","negro")
const fibra21 = new fibraOptica(21,"naranja","amarillo");
const fibra22 = new fibraOptica(22,"naranja","violeta");
const fibra23 = new fibraOptica(23,"naranja","rosa");
const fibra24 = new fibraOptica(24,"naranja","celeste");

const fibra25 = new fibraOptica(25,"verde","azul");
const fibra26 = new fibraOptica(26,"verde","naranja"); 
const fibra27 = new fibraOptica(27,"verde","verde");
const fibra28 = new fibraOptica(28,"verde","marron");
const fibra29 = new fibraOptica(29,"verde","gris");
const fibra30 = new fibraOptica(30,"verde","blanco");
const fibra31 = new fibraOptica(31,"verde","rojo");
const fibra32 = new fibraOptica(32,"verde","negro");
const fibra33 = new fibraOptica(33,"verde","amarillo");
const fibra34 = new fibraOptica(34,"verde","violeta");
const fibra35 = new fibraOptica(35,"verde","rosa");
const fibra36 = new fibraOptica(36,"verde","celeste");

const fibra37 = new fibraOptica(37,"marron","azul");
const fibra38 = new fibraOptica(38,"marron","naranja"); 
const fibra39 = new fibraOptica(39,"marron","verde");
const fibra40 = new fibraOptica(40,"marron","marron");
const fibra41 = new fibraOptica(41,"marron","gris");
const fibra42 = new fibraOptica(42,"marron","blanco");
const fibra43 = new fibraOptica(43,"marron","rojo");
const fibra44 = new fibraOptica(44,"marron","negro")
const fibra45 = new fibraOptica(45,"marron","amarillo");
const fibra46 = new fibraOptica(46,"marron","violeta");
const fibra47 = new fibraOptica(47,"marron","rosa");
const fibra48 = new fibraOptica(48,"marron","celeste");

const fibra49 = new fibraOptica(49,"gris","azul");
const fibra50 = new fibraOptica(50,"gris","naranja"); 
const fibra51 = new fibraOptica(51,"gris","verde");
const fibra52 = new fibraOptica(52,"gris","marron");
const fibra53 = new fibraOptica(53,"gris","gris");
const fibra54 = new fibraOptica(54,"gris","blanco");
const fibra55 = new fibraOptica(55,"gris","rojo");
const fibra56 = new fibraOptica(56,"gris","negro");
const fibra57 = new fibraOptica(57,"gris","amarillo");
const fibra58 = new fibraOptica(58,"gris","violeta");
const fibra59 = new fibraOptica(59,"gris","rosa");
const fibra60 = new fibraOptica(60,"gris","celeste");

const fibra61 = new fibraOptica(61,"blanco","azul");
const fibra62 = new fibraOptica(62,"blanco","naranja"); 
const fibra63 = new fibraOptica(63,"blanco","verde");
const fibra64 = new fibraOptica(64,"blanco","marron");
const fibra65 = new fibraOptica(65,"blanco","gris");
const fibra66 = new fibraOptica(66,"blanco","blanco");
const fibra67 = new fibraOptica(67,"blanco","rojo");
const fibra68 = new fibraOptica(68,"blanco","negro")
const fibra69 = new fibraOptica(69,"blanco","amarillo");
const fibra70 = new fibraOptica(70,"blanco","violeta");
const fibra71 = new fibraOptica(71,"blanco","rosa");
const fibra72 = new fibraOptica(72,"blanco","celeste");

const fibra73 = new fibraOptica(73,"rojo","azul");
const fibra74 = new fibraOptica(74,"rojo","naranja"); 
const fibra75 = new fibraOptica(75,"rojo","verde");
const fibra76 = new fibraOptica(76,"rojo","marron");
const fibra77 = new fibraOptica(77,"rojo","gris");
const fibra78 = new fibraOptica(78,"rojo","blanco");
const fibra79 = new fibraOptica(79,"rojo","rojo");
const fibra80 = new fibraOptica(80,"rojo","negro");
const fibra81 = new fibraOptica(81,"rojo","amarillo");
const fibra82 = new fibraOptica(82,"rojo","violeta");
const fibra83 = new fibraOptica(83,"rojo","rosa");
const fibra84 = new fibraOptica(84,"rojo","celeste");

const fibra85 = new fibraOptica(85,"negro","azul");
const fibra86 = new fibraOptica(86,"negro","naranja"); 
const fibra87 = new fibraOptica(87,"negro","verde");
const fibra88 = new fibraOptica(88,"negro","marron");
const fibra89 = new fibraOptica(89,"negro","gris");
const fibra90 = new fibraOptica(90,"negro","blanco");
const fibra91 = new fibraOptica(91,"negro","rojo");
const fibra92 = new fibraOptica(92,"negro","negro")
const fibra93 = new fibraOptica(93,"negro","amarillo");
const fibra94 = new fibraOptica(94,"negro","violeta");
const fibra95 = new fibraOptica(95,"negro","rosa");
const fibra96 = new fibraOptica(96,"negro","celeste");

const fibra97 = new fibraOptica(97,"amarillo","azul");
const fibra98 = new fibraOptica(98,"amarillo","naranja"); 
const fibra99 = new fibraOptica(99,"amarillo","verde");
const fibra100 = new fibraOptica(100,"amarillo","marron");
const fibra101 = new fibraOptica(101,"amarillo","gris");
const fibra102 = new fibraOptica(102,"amarillo","blanco");
const fibra103 = new fibraOptica(103,"amarillo","rojo");
const fibra104 = new fibraOptica(104,"amarillo","negro");
const fibra105 = new fibraOptica(105,"amarillo","amarillo");
const fibra106 = new fibraOptica(106,"amarillo","violeta");
const fibra107 = new fibraOptica(107,"amarillo","rosa");
const fibra108 = new fibraOptica(108,"amarillo","celeste");

const fibra109 = new fibraOptica(109,"violeta","azul");
const fibra110 = new fibraOptica(110,"violeta","naranja"); 
const fibra111 = new fibraOptica(111,"violeta","verde");
const fibra112 = new fibraOptica(112,"violeta","marron");
const fibra113 = new fibraOptica(113,"violeta","gris");
const fibra114 = new fibraOptica(114,"violeta","blanco");
const fibra115 = new fibraOptica(115,"violeta","rojo");
const fibra116 = new fibraOptica(116,"violeta","negro")
const fibra117 = new fibraOptica(117,"violeta","amarillo");
const fibra118 = new fibraOptica(118,"violeta","violeta");
const fibra119 = new fibraOptica(119,"violeta","rosa");
const fibra120 = new fibraOptica(120,"violeta","celeste");

const fibra121 = new fibraOptica(121,"rosa","azul");
const fibra122 = new fibraOptica(122,"rosa","naranja"); 
const fibra123 = new fibraOptica(123,"rosa","verde");
const fibra124 = new fibraOptica(124,"rosa","marron");
const fibra125 = new fibraOptica(125,"rosa","gris");
const fibra126 = new fibraOptica(126,"rosa","blanco");
const fibra127 = new fibraOptica(127,"rosa","rojo");
const fibra128 = new fibraOptica(128,"rosa","negro");
const fibra129 = new fibraOptica(129,"rosa","amarillo");
const fibra130 = new fibraOptica(130,"rosa","violeta");
const fibra131 = new fibraOptica(131,"rosa","rosa");
const fibra132 = new fibraOptica(132,"rosa","celeste");

const fibra133 = new fibraOptica(133,"celeste","azul");
const fibra134 = new fibraOptica(134,"celeste","naranja"); 
const fibra135 = new fibraOptica(135,"celeste","verde");
const fibra136 = new fibraOptica(136,"celeste","marron");
const fibra137 = new fibraOptica(137,"celeste","gris");
const fibra138 = new fibraOptica(138,"celeste","blanco");
const fibra139 = new fibraOptica(139,"celeste","rojo");
const fibra140 = new fibraOptica(140,"celeste","negro")
const fibra141 = new fibraOptica(141,"celeste","amarillo");
const fibra142 = new fibraOptica(142,"celeste","violeta");
const fibra143 = new fibraOptica(143,"celeste","rosa");
const fibra144 = new fibraOptica(144,"celeste","celeste");


let fibras = [
    fibra0,
    fibra1,
    fibra2,
    fibra3,
    fibra4,
    fibra5,
    fibra6,
    fibra7,
    fibra8,
    fibra9,
    fibra10,
    fibra11,
    fibra12,
    fibra13,
    fibra14,
    fibra15,
    fibra16,
    fibra17,
    fibra18,
    fibra19,
    fibra20,
    fibra21,
    fibra22,
    fibra23,
    fibra24,
    fibra25,
    fibra26,
    fibra27,
    fibra28,
    fibra29,
    fibra30,
    fibra31,
    fibra32,
    fibra33,
    fibra34,
    fibra35,
    fibra36,
    fibra37,
    fibra38,
    fibra39,
    fibra40,
    fibra41,
    fibra42,
    fibra43,
    fibra44,
    fibra45,
    fibra46,
    fibra47,
    fibra48,
    fibra49,
    fibra50,
    fibra51,
    fibra52,
    fibra53,
    fibra54,
    fibra55,
    fibra56,
    fibra57,
    fibra58,
    fibra59,
    fibra60,
    fibra61,
    fibra62,
    fibra63,
    fibra64,
    fibra65,
    fibra66,
    fibra67,
    fibra68,
    fibra69,
    fibra70,
    fibra71,
    fibra72,
    fibra73,
    fibra74,
    fibra75,
    fibra76,
    fibra77,
    fibra78,
    fibra79,
    fibra80,
    fibra81,
    fibra82,
    fibra83,
    fibra84,
    fibra85,
    fibra86,
    fibra87,
    fibra88,
    fibra89,
    fibra90,
    fibra91,
    fibra92,
    fibra93,
    fibra94,
    fibra95,
    fibra96,
    fibra97,
    fibra98,
    fibra99,
    fibra100,
    fibra101,
    fibra102,
    fibra103,
    fibra104,
    fibra105,
    fibra106,
    fibra107,
    fibra108,
    fibra109,
    fibra110,
    fibra111,
    fibra112,
    fibra113,
    fibra114,
    fibra115,
    fibra116,
    fibra117,
    fibra118,
    fibra119,
    fibra120,
    fibra121,
    fibra122,
    fibra123,
    fibra124,
    fibra125,
    fibra126,
    fibra127,
    fibra128,
    fibra129,
    fibra130,
    fibra131,
    fibra132,
    fibra133,
    fibra134,
    fibra135,
    fibra136,
    fibra137,
    fibra138,
    fibra139,
    fibra140,
    fibra141,
    fibra142,
    fibra143,
    fibra144,
];


function buscar() {
    const input = document.getElementById("button");
    const value = input.value;
    const fibra = value;
    fibras[fibra].verInfo();
}


    