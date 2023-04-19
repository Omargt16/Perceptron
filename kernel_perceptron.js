//dataset 
//Caracteristicas del dataset
//x0    lengua_larga    bigotes_largos   cola_larga  orejas_punteagudas  indicador_perro_o_gato
let dot = (a, b) => a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);
var dataset = [
    //1: gato
    [1, -1, 1, -1, 1, 1],//1
    [1, -1, -1, -1, 1, 1],//2
    [1, -1, 1, 1, 1, 1],//3
    [1, -1, 1, 1, 1, 1],//4
    [1, -1, -1, -1, 1, 1],//5
    [1, -1, 1, -1, 1, 1],//6
    [1, -1, 1, -1, 1, 1],//7
    [1, -1, 1, -1, 1, 1],//8
    [1, -1, 1, 1, 1, 1],//9
    [1, -1, -1, -1, 1, 1],//10
    [1, 1, -1, 1, 1, 1],//11
    [1, -1, 1, -1, 1, 1],//12
    [1, -1, 1, 1, 1, 1],//13
    [1, -1, 1, -1, 1, 1],//14
    [1, -1, 1, 1, 1, 1],//15
    [1, -1, -1, 1, 1, 1],//16
    [1, -1, 1, -1, 1, 1],//17
    [1, -1, 1, -1, 1, 1],//18
    [1, -1, -1, -1, 1, 1],//19
    [1, -1, 1, 1, 1, 1],//20
    [1, -1, 1, 1, 1, 1],//21
    [1, -1, -1, 1, 1, 1],//22
    [1, -1, 1, -1, 1, 1],//23
    [1, -1, -1, -1, 1, 1],//24
    [1, -1, 1, 1, 1, 1],//25
    [1, -1, -1, -1, 1, 1],//26
    [1, -1, 1, -1, 1, 1],//27
    [1, -1, 1, -1, 1, 1],//28
    [1, -1, 1, -1, 1, 1],//29
    [1, -1, 1, 1, 1, 1],//30
    [1, -1, 1, 1, 1, 1],//31
    [1, -1, 1, 1, 1, 1],//32
    [1, -1, 1, -1, 1, 1],//33
    [1, -1, 1, 1, 1, 1],//34
    [1, -1, 1, 1, 1, 1],//35
    [1, -1, 1, -1, 1, 1],//36
    [1, -1, 1, 1, 1, 1],//37
    [1, -1, 1, -1, 1, 1],//38
    [1, -1, -1, -1, 1, 1],//39
    [1, -1, -1, -1, 1, 1],//40
    [1, -1, 1, 1, 1, 1],//41
    [1, -1, -1, -1, 1, 1],//42
    [1, -1, 1, 1, 1, 1],//43
    [1, -1, -1, -1, 1, 1],//44
    [1, -1, -1, -1, 1, 1],//45
    [1, -1, -1, -1, 1, 1],//46
    [1, -1, -1, 1, 1, 1],//47
    [1, -1, -1, -1, 1, 1],//48
    [1, -1, 1, -1, 1, 1],//49
    [1, -1, 1, 1, 1, 1],//50
    //-1:perro
    [1, 1, -1, -1, -1, -1],//51
    [1, 1, -1, 1, -1, -1],//52
    [1, 1, 1, -1, -1, -1],//53
    [1, 1, -1, -1, -1, -1],//54
    [1, 1, -1, -1, 1, -1],//55
    [1, 1, -1, -1, 1, -1],//56
    [1, 1, -1, 1, -1, -1],//57
    [1, 1, -1, -1, -1, -1],//58
    [1, 1, -1, 1, -1, -1],//59
    [1, 1, -1, -1, -1, -1],//60
    [1, 1, -1, -1, 1, -1],//61
    [1, 1, -1, -1, -1, -1],//62
    [1, 1, -1, -1, -1, -1],//63
    [1, -1, 1, -1, -1, -1],//64
    [1, 1, -1, -1, -1, -1],//65
    [1, 1, -1, -1, 1, -1],//66
    [1, -1, -1, -1, -1, -1],//67
    [1, 1, -1, 1, 1, -1],//68
    [1, 1, 1, 1, -1, -1],//69
    [1, 1, -1, 1, 1, -1],//70
    [1, 1, 1, 1, -1, -1],//71
    [1, 1, -1, -1, -1, -1],//72
    [1, -1, , -1 - 1, -1, -1],//73
    [1, 1, -1, -1, 1, -1],//74
    [1, 1, -1, -1, -1, -1],//75
    [1, 1, 1, -1, 1, -1],//76
    [1, 1, -1, 1, 1, -1],//77
    [1, -1, -1, -1, -1, -1],//78
    [1, 1, -1, 1, -1, -1],//79
    [1, -1, 1, -1, -1, -1],//80
    [1, 1, -1, -1, -1, -1],//81
    [1, 1, 1, 1, 1, -1],//82
    [1, 1, -1, -1, -1, -1],//83
    [1, -1, 1, -1, 1, -1],//84
    [1, 1, -1, -1, -1, -1],//85
    [1, -1, -1, -1, -1, -1],//86
    [1, 1, 1, -1, -1, -1],//87
    [1, 1, -1, -1, -1, -1],//88
    [1, 1, -1, -1, -1, -1],//89
    [1, 1, -1, 1, -1, -1],//90
    [1, 1, -1, -1, 1, -1],//91
    [1, 1, -1, -1, -1, -1],//92
    [1, 1, -1, 1, -1, -1],//93
    [1, 1, -1, 1, 1, -1],//94
    [1, 1, -1, -1, -1, -1],//95
    [1, -1, -1, -1, -1, -1],//96
    [1, 1, -1, 1, -1, -1],//97
    [1, 1, -1, 1, -1, -1],//98
    [1, 1, -1, 1, 1, -1],//99
    [1, 1, -1, 1, -1, -1]//100
];
//Entrenamiento
let y = 0;
//Factor alfa
let a = [];
let m = dataset.length;
let xi, xj;
for (let v = 0; v < m; v++) {
    a.push(0);
}
//Ciclo de entrenamiento
for (let loop = 0; loop < 1000; loop++) {
    for (let i = 0; i < m; i++) {
        //Obten sumatoria
        xi = dataset[i].slice(0, 5);
        for (let j = 0; j < m; j++) {
            xj = dataset[j].slice(0, 5);
            y = y + a[j] * (Math.pow(dot(xj, xi), 2));
        }
        //Función de activación
        if (y >= 0) {
            y = 1;
        } else {
            y = -1;
        }
        //Error
        if (y != dataset[i][5]) {
            a[i] = a[i] + dataset[i][5];
        }
    }
}

let imagesInUse = [];
//Obten la imagen actual del carousel
let imageSrc = "imagenes/1.jpg";
$("#carouselcd").on('slid.bs.carousel', function () {
    imageSrc = $('.active').find('img').attr('src');
});

const form = document.querySelector("#vector");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let X = [1];
    //Obten los valores de x 
    X.push(parseInt(document.querySelector("#lengua").value));
    X.push(parseInt(document.querySelector("#bigotes").value));
    X.push(parseInt(document.querySelector("#cola").value));
    X.push(parseInt(document.querySelector("#orejas").value));
    //Calcula y con alfa
    for (let j = 0; j < m; j++) {
        xj = dataset[j].slice(0, 5);
        y = y + a[j] * (Math.pow(dot(xj, X), 2));
    }
    //crea elementos
    const resultado = document.querySelector("#resultado");
    let band;
    let separador = document.createElement("div");
    //Solo se puede añadir 1 vez la imagen a una categoría 
    if (!imagesInUse.includes(imageSrc)) {
        separador.classList.add("col");
        let clasificado = document.createElement("img");
        clasificado.setAttribute("src", imageSrc);
        separador.classList.add("p-3");
        separador.appendChild(clasificado);
        imagesInUse.push(imageSrc);
        band = 1;
    } else {
        band = 0;
    }
    //Función de activación
    if (y >= 0) {
        y = 1;
        resultado.innerText = "Es un gato";
        if (band == 1) {
            const gatos = document.querySelector("#gatos");
            gatos.appendChild(separador);
        }
    } else {
        y = -1;
        resultado.innerText = "Es un perro";
        if (band == 1) {
            const perros = document.querySelector("#perros");
            perros.appendChild(separador);
        }
    }

})


