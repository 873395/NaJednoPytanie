function zegar()
{
    let data= new Date()
    let godzina=data.getHours();
    let minuta=data.getMinutes();
    let sekunda=data.getSeconds();

    if(godzina<10){godzina=`0${godzina}`};
    if(minuta<10){minuta=`0${minuta}`};
    if(sekunda<10){sekunda=`0${sekunda}`};
    let czasoumilacz=`${godzina} : ${minuta} : ${sekunda}`;
    zegarek.innerHTML=czasoumilacz;
    setTimeout(zegar,1000);
}
zegar();
