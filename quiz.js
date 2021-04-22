let zdjecia=[
    '<br><img src="image/linux.png"></img>',
    '<br><img src="image/windows.png"></img>',
    '<br><img src="image/MacOS.png"></img>',
    '<br><img src="image/prondy.png"></img>',
]

let pytania=[
    ["Określ przyczynę wystąpienia komunikatu, który jest przedstawiony na rysunku","Problem z weryfikacją certyfikatu bezpieczeństwa" ,"Brak zainstalowanego programu antywirusowego","Niewłaściwa przeglądarka","A"],
    ["Co pozwala utrzymać równomierny rozkład ciepła między procesorem a radiatorem?"  ,"Klej","Pasta grafitowa","Mieszanka termiczna","C"],
    ["W sieci Ethernet 100BaseTX dla transmisji danych wykorzystywane są żyły kabla UTP dołączone do pinów"  ,"1, 2, 3, 6","1, 2, 3, 4","1, 2, 5, 6","A"],
    ["Ustawienie zworek na dyskach z interfejsem IDE odpowiada za"  ,"rodzaj interfejsu dyskowego","napięcie zasilania silnika","tryb pracy dysku","C"],
    ["Switch jako element centralny występuje w sieci o topologii"  ,"pierścienia","magistrali","gwiazdy","C"],
    ["W systemie operacyjnym Ubuntu do monitorowania w czasie rzeczywistym uruchomionych procesów i programów służy polecenie"  ,"top","ps","sysinfo","A"],
    [`Jakiego systemu operacyjnego to logo ${zdjecia[0]} `,"Linux","Windows","MacOS","A"],
    [`Jakiego systemu operacyjnego to logo ${zdjecia[1]} `,"Linux","MacOS","Windows","C"],
    [`Jakiego systemu operacyjnego to logo ${zdjecia[2]} `,"Windows","MacOS","Linux","B"],
    [`Na urządzeniu zasilanym prądem stałym znajduje się przedstawione oznaczenie. Wynika z niego, że urządzenie pobiera moc około ${zdjecia[3]} `,"7,5 W","18,75 W","11 W","B"],
];
    
let prawidlowa;
let pierwsze;
let poprzednie=0;
let dobrykolor="#00A500";
let zlykolor="#A50000";


function quizz()
{
    let indeks=Math.floor(Math.random()*(pytania.length)-1)+1;
    console.warn(indeks);
    if(indeks==poprzednie)
    {indeks=Math.floor(Math.random()*(pytania.length)-1)+1;
    }
    poprzednie=indeks;
    console.warn(poprzednie+" i "+indeks);

    nmrPytania.innerHTML=`Pytanie: ${indeks+1} z puli ${pytania.length} pytań`;
    TrescPytania.innerHTML=pytania[indeks][0];
    odpowiedz1.innerHTML="A: "+pytania[indeks][1];
    odpowiedz2.innerHTML="B: "+pytania[indeks][2];
    odpowiedz3.innerHTML="C: "+pytania[indeks][3];
    prawidlowa=pytania[indeks][4];
    pierwsze=true;

    guuzik1.style.border='';
    guuzik2.style.border='';
    guuzik3.style.border='';

    
    
}
let calkowite=0;
let dobre=0;
let odpowiedzi;
function sprawdzenie(numer)
{
    if (!pierwsze) return;
        
     if(numer=='A'){guuzik1.style.borderBottom=`3px solid ${zlykolor}`;} //czerwone
     if(numer=='B'){guuzik2.style.borderBottom=`3px solid ${zlykolor}`;} //czerwone
     if(numer=='C'){guuzik3.style.borderBottom=`3px solid ${zlykolor}`;} //czerwone
     pierwsze=false; //przerwanie

     nastepnePytanie.value="Wylosuj następne";
     if(numer==prawidlowa){
         console.log(numer+prawidlowa);
         dobre++; 
                    let audioContext = new (window.AudioContext)();
                    let oscillator = audioContext.createOscillator();
                    let gainNode = audioContext.createGain();
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);


                    let now = audioContext.currentTime;
                    gainNode.gain.setValueAtTime(0.5, now);
                    gainNode.gain.exponentialRampToValueAtTime(0.1, now + 0.5);
                      oscillator.start(now);
                      oscillator.stop(now + 0.5);

                    oscillator.type = "triangle";
                        oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.05);                       //dobra odpowiedź
    }

     if (prawidlowa=="A") {guuzik1.style.borderBottom=`3px solid ${dobrykolor}`; //zielony kolor
     calkowite++;
    }
     if (prawidlowa=="B") {guuzik2.style.borderBottom=`3px solid ${dobrykolor}`;
    calkowite++
    }
     if (prawidlowa=="C") {guuzik3.style.borderBottom=`3px solid ${dobrykolor}`;
     calkowite++;
    }

    odpowiedzi=`Punkty ${dobre} / ${calkowite}`;       //Liczenie liczby punktów
    let srednia=dobre/calkowite;
        console.warn(srednia);
        let zaokraglona=Math.round(srednia*100)/100;
        kolorek.innerHTML=`ŚREDNIA: ${zaokraglona}`;
        if(srednia<=0.5)
        {
            kolorek.style.color="rgb(255 0 0)";  //czerwony kolor napisu sredniej
        }
        else
        {
            kolorek.style.color="rgb(0 255 0)"; //zielony napis
        };
    opcja2.innerHTML=odpowiedzi;
}

function resetuj()
{
    location.reload();
}

