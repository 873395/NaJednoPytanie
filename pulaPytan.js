let iloscDivow=1;
let iloscOdpowiedzi=3;
let numerPytania=1;
let numerDoPytan=new Array();
let odnosnikPytania=new Array();
let tablicaOdpowiedzi=new Array();
let sumaPunktow=0;
let moznoKlikalnoscPlus=true;
let moznoKlikalnoscMinus=false;
let nmrPojemnika;
let nmrOdpowiedzi;
let czasowa;
let godzina;
let minuta;
let sekunda;
let wyslaneOdpowiedzi=false;
function liczbaPytan(numer) //sprawdzanie panelu po lewej
{
 if(numer==1&&moznoKlikalnoscPlus){iloscDivow=iloscDivow+1};
 if(numer==2&&moznoKlikalnoscMinus){iloscDivow=iloscDivow-1};
 if(numer==3&&moznoKlikalnoscPlus){iloscDivow=iloscDivow+10};
 if(numer==4&&moznoKlikalnoscMinus){
     if(iloscDivow-10<=0)iloscDivow=1;
     else
    iloscDivow=iloscDivow-10};
 if(numer==5){iloscDivow=1};


 if(iloscDivow<=1){
    g2.style.opacity='20%';
    g4.style.opacity='20%';
    g2.style.backgroundColor='black';
    g4.style.backgroundColor='black';
    moznoKlikalnoscMinus=false;
}
else
{   g2.style.opacity='';
    g4.style.opacity='';
    g2.style.backgroundColor='';
    g4.style.backgroundColor='';
    moznoKlikalnoscMinus=true;
};
 
 if(iloscDivow>=pytania.length-3){iloscDivow=pytania.length-3;
    g1.style.opacity='20%';
    g3.style.opacity='20%';
    g1.style.backgroundColor='black';
    g3.style.backgroundColor='black';
    moznoKlikalnoscPlus=false;
}
else
{   g1.style.opacity='';
    g3.style.opacity='';
    g1.style.backgroundColor='';
    g3.style.backgroundColor='';
    moznoKlikalnoscPlus=true;
}
 output.innerHTML=`Pytań: ${iloscDivow}`;
}


function kreatorElementow() //tworzenie divów
{
    blurownik.remove();
    wyslaneOdpowiedzi=false;
    tablicaOdpowiedzi=[];
    odnosnikPytania=[];
    let data= new Date();
    godzina=data.getHours();
    minuta=data.getMinutes();
    sekunda=data.getSeconds();
    let k=iloscDivow;
    let n=pytania.length-1; 
    let numbers = new Array(n);
    for (let c=0; c<n; c++) {
    numbers[c] = c + 1;
    };  
    for (let c=0; c<k; c++) {  
    let r = Math.floor(Math.random()*n);
    numerDoPytan.push(numbers[r]);
    numbers[r] = numbers[n - 1];
    n--;
};
    poleNaPytania.innerHTML='';
    numerPytania=1;
    sumaPunktow=0;
        for(let q=0;q<numerDoPytan.length;q++)
    {   
        tablicaOdpowiedzi.push(0);
        let glownyDiv=document.createElement('div');
        glownyDiv.id=`pojemnik${q}`;
        glownyDiv.className='glownyDiv';

        let identyfikatorPytania=document.createElement('div');
        identyfikatorPytania.id='numerPytania';
        identyfikatorPytania.className='idPytania';
        identyfikatorPytania.innerText=`Pytanie ${numerPytania}`;
        glownyDiv.appendChild(identyfikatorPytania);

        let trescPytania=document.createElement('div');
        trescPytania.id='trescPytania';
        trescPytania.innerHTML=pytania[numerDoPytan[q]][0];
        trescPytania.className='pytanie';
        glownyDiv.appendChild(trescPytania);

            for(let a=1;a<=iloscOdpowiedzi;a++)
            {
                let odpowiedzi=document.createElement('div');
                odpowiedzi.id=`odpowiedz${q}${a}`;
                odpowiedzi.className='odpowiedzi';
                odpowiedzi.addEventListener('click',()=>{klikalnik(`${q}`,`${a}`);},false);
                glownyDiv.appendChild(odpowiedzi);

                    let napisDo=document.createElement('div');
                    napisDo.className='napisaneJest';
                    napisDo.innerHTML=pytania[numerDoPytan[q]][a];
                    odpowiedzi.appendChild(napisDo);

                let znaczek=document.createElement('div');
                znaczek.id=`znaczek${q}${a}`;
                znaczek.className='znaczek';
                odpowiedzi.appendChild(znaczek);
            };
        numerPytania++;
        poleNaPytania.appendChild(glownyDiv);
    }// znacznik konca fora
    odnosnikPytania=numerDoPytan;
    numerDoPytan=[];
    let divSprawdzaj=document.createElement('div');
            divSprawdzaj.className='latajacyDiv';
            divSprawdzaj.innerHTML="sprawdź";
            divSprawdzaj.id='sprawdz';
            divSprawdzaj.addEventListener('click',sprawdzanieOdpowiedzi);
            poleNaPytania.appendChild(divSprawdzaj);
} //znacznik konca funkcji

function klikalnik(nmrPojemnika,nmrOdpowiedzi)
{
    if(wyslaneOdpowiedzi)return;
    const a=document.getElementById(`znaczek${nmrPojemnika}${1}`);
    const b=document.getElementById(`znaczek${nmrPojemnika}${2}`);
    const c=document.getElementById(`znaczek${nmrPojemnika}${3}`);
        [a,b,c].forEach(i=>{i.style.border=''});
    
    const odp=document.getElementById(`znaczek${nmrPojemnika}${nmrOdpowiedzi}`);
    const odp2=document.getElementById(`znaczek${nmrPojemnika}${nmrOdpowiedzi}`);
    odp.style.border='4px solid #824cff';
    tablicaOdpowiedzi[nmrPojemnika]=nmrOdpowiedzi;
}


function sprawdzanieOdpowiedzi()
{
    wyslaneOdpowiedzi=true;
    console.warn(numerDoPytan);
    console.warn(odnosnikPytania);
    console.warn(tablicaOdpowiedzi);

    for(let m=0;m<iloscDivow;m++)
    {
        if(tablicaOdpowiedzi[m]==0)continue;
        const dobra=document.getElementById(`znaczek${m}${tablicaOdpowiedzi[m]}`);
        console.warn(tablicaOdpowiedzi);
        let A;
        let D;
        if(pytania[odnosnikPytania[m]][4]=='A'){D=1};
        if(pytania[odnosnikPytania[m]][4]=='B'){D=2};
        if(pytania[odnosnikPytania[m]][4]=='C'){D=3};
        console.log(`znaczek${m}${D}`);
        const poprawna=document.getElementById(`znaczek${m}${D}`);
        poprawna.style.border='4px solid green';

             if(tablicaOdpowiedzi[m]==1){A='A'};
             if(tablicaOdpowiedzi[m]==2){A='B'};
             if(tablicaOdpowiedzi[m]==3){A='C'};
             if(pytania[odnosnikPytania[m]][4]==A){
                dobra.style.border='4px solid lime';
                sumaPunktow++;
             }
             else
             {
                dobra.style.border='4px solid red';
             }  
    }//koniec
    nmrPytania.innerHTML=`Zdobyłeś ${sumaPunktow} / ${iloscDivow} punktów`;
    let data2=new Date();
    let godzina2=data2.getHours();
    let minuta2=data2.getMinutes();
    let sekunda2=data2.getSeconds();
    czasowa=`rozwiązywałeś test ${godzina2-godzina}H ${minuta2-minuta}M ${sekunda2-sekunda}S`;
    sprawdz.remove();
    koncowyWynik();
}

function koncowyWynik()
{
    let zakrywkar=document.createElement('div');
    zakrywkar.id='blurownik';
    zakrywkar.className='blur';
    document.body.appendChild(zakrywkar);

    let ekran=document.createElement('div');
    ekran.id='koncoweWyniki';
    ekran.className='koncoweWyniki';
    blurownik.appendChild(ekran);

    let napis=document.createElement('div');
    napis.id='glownyNapisElementu';
    napis.className='glowneNapisy';
    napis.innerHTML='kości zostały rzucone, "Alea iacta est"'
    koncoweWyniki.appendChild(napis);

    let napisPunkty=document.createElement('div');
    napisPunkty.id='napisPunkty';
    napisPunkty.className='dodatkoweNapisy';
    napisPunkty.innerHTML=`zdobyłeś ${sumaPunktow} / ${iloscDivow} możliwych punktów
    <br>
    średni wynik: ${Math.floor(sumaPunktow/iloscDivow*100)} %
    <br><br>
    ${czasowa}
    `
    koncoweWyniki.appendChild(napisPunkty);

    let zamknij=document.createElement('button');
    zamknij.className='dodatkoweGuziki';
    zamknij.id='dodatkowyFuzik';
    zamknij.innerHTML='X';
    zamknij.addEventListener('click',usuwajElementy);
    koncoweWyniki.appendChild(zamknij);

}

function usuwajElementy()
{
    dodatkowyFuzik.remove();
    napisPunkty.remove();
    glownyNapisElementu.remove();
    koncoweWyniki.remove();
    blurownik.remove();
}





// let A;
  // if(nmrOdpowiedzi==1){A='A'};
  // if(nmrOdpowiedzi==2){A='B'};
  // if(nmrOdpowiedzi==3){A='C'};
  // if(pytania[odnosnikPytania[nmrPojemnika]][4]==A){
  //     pOdp.style.backgroundColor='green';
  //     sumaPunktow++;
  //        
  //             console.warn(sumaPunktow);
  //  