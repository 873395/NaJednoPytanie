let iloscDivow=0;
let iloscOdpowiedzi=3;
let numerPytania=1;
let numerDoPytan=new Array();
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


function kreatorElementow() //tworzenie divów
{
    
    console.warn(numerDoPytan);
    let k=iloscDivow;
    let n=pytania.length; 
    var numbers = new Array(n);
    for (var i=0; i<n; i++) {
    numbers[i] = i + 1;
    }  
    for (var i=0; i<k; i++) {  
    var r = Math.floor(Math.random()*n);
    console.warn(numbers[r]);
    numerDoPytan.push(numbers[r]);
    numbers[r] = numbers[n - 1];
    n--;
    }
    console.warn(numerDoPytan);


    numerPytania=1;
        for(let i=0;i<iloscDivow;i++)
    {   
        let glownyDiv=document.createElement('div');
        glownyDiv.id=`pojemnik1`;
        glownyDiv.className='glownyDiv';

        let identyfikatorPytania=document.createElement('div');
        identyfikatorPytania.id='numerPytania';
        identyfikatorPytania.className='idPytania';
        identyfikatorPytania.innerText=`Pytanie ${numerPytania}`;
        glownyDiv.appendChild(identyfikatorPytania);

        let trescPytania=document.createElement('div');
        trescPytania.id='trescPytania';
        trescPytania.innerHTML=pytania[numerDoPytan[i]][0];
        trescPytania.className='pytanie';
        glownyDiv.appendChild(trescPytania);

        for(let a=1;a<=iloscOdpowiedzi;a++)
        {
            let odpowiedzi=document.createElement('div');
            odpowiedzi.id=`odpowiedz${a}`;
            odpowiedzi.className='odpowiedzi';
            odpowiedzi.innerHTML=pytania[numerDoPytan[i]][a];
            glownyDiv.appendChild(odpowiedzi);
        }
        numerPytania++;
        poleNaPytania.appendChild(glownyDiv);
    }
}