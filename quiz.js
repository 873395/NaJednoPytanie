let zdjecia=[
    '<br><img src="image/linux.png" title="Logo"></img>',
    '<br><img src="image/windows.png" title="Logo"></img>',
    '<br><img src="image/macOS.png" title="Logo"></img>',
    '<br><img src="image/prondy.png" title="Tabela mocy"></img>',
    '<br><img src="image/tabela.jpg" title="Tabela częstotliwości"></img>',
    '<br><img src="image/karta1.jpg" title="Element rozszerzeń"></img>',
    '<br><img src="image/zdejmowacz.jpg" title="Narzędzie"></img>',
    '<br><img src="image/gniazdaProcesorow.jpg" title="Gniazda procesorów"></img>',
    '<br><img src="image/topologia.jpg" alt="Topologia sieci"></img>',
    '<br><img src="image/duzoNapisow.jpg" alt="Zdjęcie z dużą ilością tekstu"></img>',
    '<br><img src="image/" alt=""></img>',
]

let pytania=[
    ["Określ przyczynę wystąpienia komunikatu, który jest przedstawiony na rysunku","Problem z weryfikacją certyfikatu bezpieczeństwa" ,"Brak zainstalowanego programu antywirusowego","Niewłaściwa przeglądarka","A"],
    ["Co pozwala utrzymać równomierny rozkład ciepła między procesorem a radiatorem?"  ,"Klej","Pasta grafitowa","Mieszanka termiczna","C"],
    ["W sieci Ethernet 100BaseTX dla transmisji danych wykorzystywane są żyły kabla UTP dołączone do pinów"  ,"1, 2, 3, 6","1, 2, 3, 4","1, 2, 5, 6","A"],
    ["Ustawienie zworek na dyskach z interfejsem IDE odpowiada za"  ,"rodzaj interfejsu dyskowego","napięcie zasilania silnika","tryb pracy dysku","C"],
    ["Switch jako element centralny występuje w sieci o topologii"  ,"pierścienia","magistrali","gwiazdy","C"],
    ["W systemie operacyjnym Ubuntu do monitorowania w czasie rzeczywistym uruchomionych procesów i programów służy polecenie"  ,"top","ps","sysinfo","A"],
    [`Jak ma na imię maskotka systemu operacyjnego Linux ? ${zdjecia[0]} `,"Kux","Tux","Lux","B"],
    [`Jaki system operacyjny reprezentuje poniższe zdjęzie ? ${zdjecia[1]} `,"Linux","MacOS","Windows","C"],
    [`Jakiego systemu operacyjnego to logo ${zdjecia[2]} `,"Windows","MacOS","Linux","B"],
    [`Na urządzeniu zasilanym prądem stałym znajduje się przedstawione oznaczenie. Wynika z niego, że urządzenie pobiera moc około ${zdjecia[3]} `,"7,5 W","18,75 W","11 W","B"],
    ["Zgodnie ze specyfikacją JEDEC typowe napięcie zasilania modułów niskonapięciowych pamięci RAM DDR3L wynosi","1.50 V","1.20 V","1.35 V","C"],
    ["Wskaż właściwą kolejność operacji przygotowujących nowy laptop do pracy.","Włączenie laptopa, montaż baterii, instalacja systemu operacyjnego, podłączenie zewnętrznego zasilania sieciowego, wyłączenie laptopa po instalacji systemu operacyjnego","Montaż baterii, podłączenie zewnętrznego zasilania sieciowego, włączenie laptopa, instalacja systemu operacyjnego, wyłączenie laptopa po instalacji systemu operacyjnego","Podłączenie zewnętrznego zasilania sieciowego, włączenie laptopa, instalacja systemu operacyjnego, montaż baterii, wyłączenie laptopa po instalacji systemu operacyjnego","B"],
    ["Do zasilacza UPS o mocy rzeczywistej 480 W nie należy podłączać","modemu ADSL","urządzeń sieciowych typu router","drukarki laserowej","C"],
    ["Przerzutnik bistabilny przechowuje bit informacji w pamięci","DDR SDRAM","SRAM","DRAM","B"],
    [`Z danych zestawionych w tabeli wynika, że częstotliwość efektywna pamięci DDR SDRAM wynosi ${zdjecia[4]}`,"200 MHz","266 MHz","400 MHz","C"],
    ["Komponentem płyty głównej odpowiedzialnym za komunikację pomiędzy procesorem a pozostałymi elementami płyty jest","chipset","pamięć RAM","BIOS ROM","A"],
    [`Na zdjęciu przedstawiono gniazda należące do karty ${zdjecia[5]}`,"telewizyjnej","faksmodemowej","sieciowej","C"],
    ["Który z portów panelu tylnego płyty głównej jest oznaczany w dokumentacji jako port standardu RS232C?","PS/2","LPT","COM","C"],
    ["Transfer danych napędu DVD dla prędkości przesyłu x48 wynosi","64800 KiB/s","32400 KiB/s","54000 KiB/s","A"],
    ["Użytkownik uszkodził płytę główną z gniazdem procesora AM2. Uszkodzoną płytę można zastąpić, bez konieczności wymiany procesora i pamięci, modelem z gniazdem","FM2","AM2+","FM2+","B"],
    ["Urządzenie typu Plug and Play, podłączone do komputera po raz kolejny, jest rozpoznawane na podstawie","unikalnego identyfikatora urządzenia","lokalizacji urządzenia","lokalizacji sterownika urządzenia","A"],
    ["Który procesor należy wykorzystać podczas montażu komputera osobistego na bazie płyty głównej Asus M5A78L-M/USB3 AMD760G socket AM3+","AMD APU A4 6320 3800MHz FM2","AMD APU A8 7650K 3300MHz FM2+ BOX","AMD FX 8300 3300MHz AM3+ OEM","C"],
    ["Najkrótszy czas dostępu posiada","dysk twardy","pamięć RAM","pamięć cache procesora","C"],
    [`Na rysunku przedstawiono urządzenie do ${zdjecia[6]}`,"zaciskania złącz RJ-45","montażu okablowania w gnieździe sieciowym","zdejmowania izolacji z kabli","C"],
    [`W którym gnieździe należy zainstalować procesor INTEL CORE i3-4350- 3.60 GHz, x2/4, 4MB, 54W, HD 4600, BOX, s-1150? ${zdjecia[7]}`,"D","B","C","B"],
    ["Kabel sieciowy zakończony wtykami RJ45 sprawdzano diodowym testerem okablowania. Na testerze diody LED zapalały się kolejno oprócz diod oznaczonych numerami 2 i 3, które zapalały się równocześnie na jednostce głównej testera, a nie zapalały się na jednostce zdalnej. Co było tego przyczyną?","Pary odwrócone","Pary skrzyżowane","Przerwa w łączności","C"],
];


let prawidlowa;
let pierwsze;
let poprzednie=0;
let dobrykolor="#00A500";
let zlykolor="#A50000";


function quizz()
{
    let indeks=Math.floor(Math.random()*(pytania.length)-1)+1;
    if(indeks==poprzednie)
    {indeks=Math.floor(Math.random()*(pytania.length)-1)+1;
    }
    poprzednie=indeks;

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

