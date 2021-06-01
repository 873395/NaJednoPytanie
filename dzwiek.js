let odpalone;
let morzna=true;

function dzwiekOdpowiedzi()
{
    if(morzna==true)
    {
    utwur.src='music/good.mp3';
    utwur.volume='0.7';
    utwur.play();
    }
}

function dzwiekOdpowiedziNiedobrej()
{
    if(morzna==true)
    {
    utwur.src='music/bad.mp3';
    utwur.volume='0.7';
    utwur.play();
    }
}

function dzwiekKoniecZadania()
{
    if(morzna==true)
    {
    let aldio=document.createElement('audio');
    aldio.id='alert';
    aldio.src='music/win.mp3';
    aldio.volume='0.5';
    koncoweWyniki.appendChild(aldio);
    aldio.play();
    }
}
let linkDoRadia;

function odsluch()
{
    linkDoRadia=radioInput.value;
    puszczajnik.src="https://youtu.be/LYOrjkdbMDQ";
    window.
    puszczajnik.play();
    puszczajnik.volume=0.5;
}
function ehs()
{
    odpalone=0;
    if(odpalone%2==0)
    {sluchaj.style.backgroundColor='#46209e';
    }
    else{sluchaj.style.backgroundColor='';
    }
}

function wlaczone()
{
    if(odpalone%2==0)
    {sluchaj.style.backgroundColor='#46209e';
    morzna=true;
    }
    else{sluchaj.style.backgroundColor='';
    morzna=false;
    }
    odpalone++;
}