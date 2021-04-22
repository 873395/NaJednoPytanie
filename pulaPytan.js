let iloscDivow=0;
let iloscOdpowiedzi=3;
let numerPytania=1;
function liczbaPytan(numer) //sprawdzanie panelu po lewej
{
 if(numer==1){iloscDivow=iloscDivow+1};
 if(numer==2){iloscDivow=iloscDivow-1};
 if(numer==3){iloscDivow=iloscDivow+10};
 if(numer==4){iloscDivow=iloscDivow-10};
 if(numer==5){iloscDivow=1};
 
 if(iloscDivow<=0){
    g2.style.opacity='20%';
    g4.style.opacity='20%';
    g2.style.backgroundColor='black';
    g4.style.backgroundColor='black';
}
else
{   g2.style.opacity='';
    g4.style.opacity='';
    g2.style.backgroundColor='';
    g4.style.backgroundColor='';
};
 
 if(iloscDivow>=pytania.length-3){iloscDivow=pytania.length-3;
    g1.style.opacity='20%';
    g3.style.opacity='20%';
    g1.style.backgroundColor='black';
    g3.style.backgroundColor='black';
}
else
{   g1.style.opacity='';
    g3.style.opacity='';
    g1.style.backgroundColor='';
    g3.style.backgroundColor='';
};
if(iloscDivow<0){iloscDivow=iloscDivow*-1};
 output.innerHTML=`Elementów: ${iloscDivow}`
}


function losowaniePytan()
{
    let pierwsza=[];
    for(let i=0;i<10;i++)
    {
        let d=Math.floor(Math.random()*10);
    pierwsza.push(d);
    };

    let druga=[];
    for(let i=0;i<10;i++)
    {
        let d=Math.floor(Math.random()*10);
    druga.push(d);
    };
    pierwsza.sort();
    druga.sort();
    druga.shift();
    console.warn(pierwsza);
    console.warn(druga);

}




function kreatorElementow() //tworzenie divów
{
    numerPytania=1;
    poleNaPytania.innerHTML='';
        for(let i=0;i<iloscDivow;i++)
    {   
        let glownyDiv=document.createElement('div');
        glownyDiv.id=`pojemnik`;
        glownyDiv.className='glownyDiv';

        let identyfikatorPytania=document.createElement('div');
        identyfikatorPytania.id='numerPytania';
        identyfikatorPytania.className='idPytania';
        identyfikatorPytania.innerText=`Pytanie ${numerPytania}`;
        glownyDiv.appendChild(identyfikatorPytania);

        let trescPytania=document.createElement('div');
        trescPytania.id='trescPytania';
        trescPytania.innerText='Tresc pytania';
        trescPytania.className='pytanie';
        glownyDiv.appendChild(trescPytania);

        for(let a=0;a<iloscOdpowiedzi;a++)
        {
            let odpowiedzi=document.createElement('div');
            odpowiedzi.id=`odpowiedz${a}`;
            odpowiedzi.className='odpowiedzi';
            odpowiedzi.innerText=`${a}`;
            glownyDiv.appendChild(odpowiedzi);
        }
        numerPytania++;
        poleNaPytania.appendChild(glownyDiv);
    }
}