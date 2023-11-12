var b = document.body;

let elements = [
    "👊", //fist
    "✌", //peace
    "✋" //hand
];

function TQQ(a){
    let tanlov;
    for(let i = 0; i < 3; i++){
        if(a.innerText === elements[i]){
            tanlov = i;
        }
    }
    let Komp_tanlovi = Math.floor(Math.random()*3);
    document.getElementById("result").innerText = elements[tanlov] + " vs " + elements[Komp_tanlovi];
    
    var result2 = document.getElementById("result2");
    result2.innerText = "";

    if(tanlov === Komp_tanlovi) {
        result2.innerText = "Durrang!!!";
        durrang();
    }

    if(tanlov === 0){
        if(Komp_tanlovi === 1){
            result2.innerText = "Yutdingiz!!!!🎉🎉🎉";
            yutuq();
        }
        if(Komp_tanlovi === 2) {
            result2.innerText = "Yutqazdingiz!!!!😜😜😜😜";
            yutqazish();
        }
    }

    
    if(tanlov === 1){
        if(Komp_tanlovi === 2) {
            result2.innerText = "Yutdingiz!!!!🎉🎉🎉";
            yutuq();
        }
        if(Komp_tanlovi === 0) {
            result2.innerText = "Yutqazdingiz!!!!😜😜😜😜";
            yutqazish();
        }
    }
    if(tanlov === 2){
        if(Komp_tanlovi === 0){
             result2.innerText = "Yutdingiz!!!!🎉🎉🎉";
             yutuq();
        }

        if(Komp_tanlovi === 1) {
            result2.innerText = "Yutqazdingiz!!!!😜😜😜😜";
            yutqazish();
        }
    }
}

function yutuq(){
    b.classList.add("yutuq");

    setTimeout(() => {
        b.classList.remove("yutuq");
    }, 500);
}
function yutqazish(){
    b.classList.add("yutqazish");

    setTimeout(() => {
        b.classList.remove("yutqazish");
    }, 500);
}
function durrang(){
    b.classList.add("durrang");

    setTimeout(() => {
        b.classList.remove("durrang");
    }, 500); 
}