let dodany=0;
let zmiennaSuwaka=1;
let elementNapis='ELEMENT';
function rozsunDodanieDiva()
{
    window.open('pulaPytan.html','_self');
  //  if(dodany%2==0)
  //  {
  //
  //      let nowyDiv=document.createElement('input');
  //  nowyDiv.id='opcja3';
  //  nowyDiv.style.color='white';
  //  nowyDiv.type='range';
  //  nowyDiv.value=1;
  //  nowyDiv.min=1;
  //  nowyDiv.max=pytania.length;
  //  nowyDiv.step=1;
  //  nowyDiv.addEventListener('mousemove',suwak);
  //  nowyDiv.className='boczneMenu';
  //  nav2.appendChild(nowyDiv);
  //  nowyDiv.innerHTML='Kolejny div'
  //
  //  let Losuj=document.createElement('div');
  //  Losuj.id='opcja4';
  //  Losuj.className=className='boczneMenu';
  //  Losuj.innerText='WYLOSUJ';
  //  nav2.appendChild(Losuj);
  //      console.warn(dodany);
  //  }
  //  else
  //  {
  //     opcja3.remove();
  //     opcja4.remove();
  //  };
  //  dodany++;
    
}

function suwak()
{
    zmiennaSuwaka=opcja3.value;
    if(zmiennaSuwaka==1){elementNapis='ELEMENT'};
    if(zmiennaSuwaka>1 && zmiennaSuwaka<=4){elementNapis='ELEMENTY'};
    if(zmiennaSuwaka>=5){elementNapis='ELEMENTÓW'};
    opcja4.innerHTML=`LOSUJ ${zmiennaSuwaka} ${elementNapis}`;
}
let dodany1=0;
function arkuszPytan()
{
    if(dodany1%2==0)
    {
        "Treść funkcji"
    }
    dodany1++;
}