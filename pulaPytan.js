let iloscDivow=1;
let iloscOdpowiedzi=3;
let numerPytania=1;
let numerDoPytan=new Array();
let moznoKlikalnoscPlus=true;
let moznoKlikalnoscMinus=false;
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
 output.innerHTML=`Elementów: ${iloscDivow}`;
}


function kreatorElementow() //tworzenie divów
{
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
        for(let q=0;q<numerDoPytan.length;q++)
    {   
        let glownyDiv=document.createElement('div');
        glownyDiv.id=`pojemnikk`;
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
                odpowiedzi.id=`odpowiedz${a}`;
                odpowiedzi.className='odpowiedzi';
                odpowiedzi.addEventListener('click',()=>{klikalnik(`${a}`);},false);
                odpowiedzi.innerHTML=pytania[numerDoPytan[q]][a];
                glownyDiv.appendChild(odpowiedzi);
            };
        numerPytania++;
        poleNaPytania.appendChild(glownyDiv);
    }// znacznik konca fora
    numerDoPytan=[];
} //znacznik konca funkcji

function klikalnik(niewiem)
{
    if(niewiem==1)console.warn(niewiem);
}