

const fighters = [
    { puan: 31.068802396953107, isim: "Tim Elliot" },
    { puan: 70.15427587032318, isim: "Muhammad Mokaev" },
    { puan: 29.588036623597144, isim: "Muin Gafurov" },
    { puan: 42.71393876671791, isim: "Said Nurmagomedov" },
    { puan: 40.84735364913941, isim: "Warlley Alves" },
    { puan: 133.2349925518036, isim: "Ikram Aliskerov" },
    { puan: 44.79585564434529, isim: "Johnny Walker" },
    { puan: 51.961771035194396, isim: "Magomed Ankalaev" },
    { puan: 125.76610708236694, isim: "Khamzat Chimaev" },
    { puan: 40.66391613781452, isim: "Paulo Costa" },
    { puan: 75.61182562112809, isim: "Charles Oliveira" },
    { puan: 76.97733888626098, isim: "Islam Makhachev" },
    { puan: 39.679693174362185, isim: "Valentina Shevchenko" },
    { puan: 86.26105470657347, isim: "Amanda Nunes" },
    { puan: 88.16457378864288, isim: "Jon Jones" },
    { puan: 57.40369982719422, isim: "Francis Ngannou" },
    { puan: 46.469961214065556, isim: "Kamaru Usman" },
    { puan: 47.03417197465897, isim: "Alexander Volkanovski" },
    { puan: 113.89558430910111, isim: "Khabib Nurmagomedov" },
    { puan: 32.61816382408142, isim: "Jiri Prochazka" },
    { puan: 36.51053477823734, isim: "Alex Pereira" },
    { puan: 28.738821256160737, isim: "Shamil Abdurakhimov" },
    { puan: 96.67871203422547, isim: "Jailton Almeida" },
    { puan: 33.650624588131905, isim: "Derrick Lewis" },
    { puan: 41.29148070514202, isim: "Marcos Rogerio De Lima" },
    { puan: 43.89143605828285, isim: "Waldo Cortes Acosta" },
    { puan: 51.88552466630936, isim: "Sean O'Malley" },
    { puan: 41.396486389637, isim: "Aljamanin Sterling" },
    { puan: 38.58821775317192, isim: "Henry Cejudo" },
    { puan: 40.393626016378406, isim: "Tj Dillashaw" },
    { puan: 58.11814070940018, isim: "Demetrious Johnson" },
    { puan: 31.074768562614917, isim: "Wilson Reis" },
    { puan: 41.97634871602059, isim: "Alexandre Pantoja" },
    { puan: 33.037861347198486, isim: "Brandon Moreno" },
    { puan: 37.31679840683937, isim: "Leon Edwards" },
    { puan: 45.14398240745068, isim: "Nate Diaz" },
    { puan: 40.39466097354889, isim: "Tony Ferguson" },
    { puan: 45.37017450630665, isim: "Conor McGregor" },
    { puan: 48.538886711001396, isim: "Dustin Poirier" },
    { puan: 42.31564878225326, isim: "Justin Gaetjhe" },
    { puan: 33.25699998736381, isim: "Rafael Fiziev" },
    { puan: 48.29876979291439, isim: "Michael Chandler" },
    { puan: 36.98083859980107, isim: "Dan Hooker" },
    { puan: 54.17311432212591, isim: "Jalin Turner" },
    { puan: 39.24775477647781, isim: "Sean Strickland" },
    { puan: 32.86672571599483, isim: "Abus Magomedov" },
    { puan: 64.97843580245971, isim: "Caio Borralho" },
    { puan: 45.82616627514363, isim: "Michael Oleksiejczuk" },
    { puan: 31.2894735366106, isim: "Chidi Njokuani" },
    { puan: 38.417352589964864, isim: "Albert Duraev" },
    { puan: 36.24656411111355, isim: "Junyong Park" },
    { puan: 36.264961247891186, isim: "Denis Tiuliulin" },
    { puan: 46.59155320823192, isim: "Greorgy Rodrigues" },
    { puan: 57.4931334644556, isim: "Julian Marquez" },
    { puan: 34.937326315045354, isim: "Marc-Andre Barriault" },
    { puan: 30.73035732507706, isim: "Eryk Anders" },
    { puan: 54.34106760025024, isim: "Kyle Daukaus" },
    { puan: 50.00341492295265, isim: "Roman Dolidze" },
    { puan: 36.02690286636353, isim: "Jack Hermansson" },
    { puan: 29.397787895798682, isim: "Chris Curtis" },
    { puan: 34.606033572554594, isim: "Nassorudine Imamov" },
    { puan: 32.19559696018696, isim: "Joaquin Buckley" },
    { puan: 34.10143499672412, isim: "Alex Morono" },
    { puan: 33.59916050285101, isim: "Andre Fialho" },
    { puan: 36.29533859491348, isim: "Tim Means" },
    { puan: 34.36372221708298, isim: "Bobby Green" },
    { puan: 56.36289578825236, isim: "Jalin Turner" },
    { puan: 46.14183814227581, isim: "Claudio Puelles" },
    { puan: 33.4572888225317, isim: "Clay Guida" },
    { puan: 34.80110847651959, isim: "Joaquim Silva" },
    { puan: 41.170710277557376, isim: "Arman Tsarukyan" },
    { puan: 40.35712910294533, isim: "Beneil Dariush" },
    { puan: 36.50379962325096, isim: "Mateusz Gamrot" },
    { puan: 45.52903001308441, isim: "Diego Ferreira" },
    { puan: 25.681985415518284, isim: "Michael Johnson" },
    { puan: 32.94871166348457, isim: "Josh Emmet" },
    { puan: 89.2106849193573, isim: "Ilia Topuria" },
    { puan: 42.22968480587006, isim: "Bryce Mitchell" },
    { puan: 31.896708789467812, isim: "Dan Ige" },
    { puan: 38.115438556671144, isim: "Yair Rodriguez" },
    { puan: 53.98294634521008, isim: "Brian Ortega" },
    { puan: 39.471900498867036, isim: "Chan Sung Jung" },
    { puan: 34.17063757479191, isim: "Frankie Edgar" },
    { puan: 44.13977389335633, isim: "Marlon Vera" },
    { puan: 35.720538574457166, isim: "Cory Sandhagen" },
    { puan: 35.468253415822986, isim: "Petr Yan" },
    { puan: 32.37125371098519, isim: "Jan Blachowicz" },
    { puan: 40.36036074757576, isim: "Cirly Gane" },
    { puan: 53.5680017888546, isim: "Serghei Spivac" },
    { puan: 34.25192256867886, isim: "Alexander Gustafsson" },
    { puan: 48.85337297916412, isim: "Daniel Cormier" },
    { puan: 47.56769187748432, isim: "Anthony Johnson" },
    { puan: 47.118412828445436, isim: "Glover Teixeira" },
    { puan: 31.09992642700672, isim: "Calvin Kattar" },
    { puan: 33.52305634021759, isim: "Giga Chikadze" },
    { puan: 32.32929641902447, isim: "Alex Caceres" },
    { puan: 50.16981657147407, isim: "Daniel Pineda" },
    { puan: 31.675642254948617, isim: "Edson Barboza" },
    { puan: 29.977109816670417, isim: "Tucker Lutz" },
    { puan: 49.62788438796997, isim: "Pat Sabatini" },
    { puan: 98.06256071329118, isim: "Diego Lopes" },
    { puan: 36.1324798822403, isim: "Thiago Santos" },
    { puan: 50.946986734867096, isim: "Jamahal Hill" },
    { puan: 54.81612374186516, isim: "Paul Craig" },
    { puan: 75.87741523981094, isim: "Brendan Allen" },
    { puan: 33.512525364756584, isim: "Bruno Silva" },
    { puan: 56.3473457813263, isim: "Shara Magomedov" },
    { puan: 29.70147442817688, isim: "Ovince Saint Preux" },
    { puan: 31.331037247180937, isim: "Philipe Lins" },
    { puan: 25.056584122776986, isim: "Max Grishin" },
    { puan: 29.0315207824111, isim: "William Knight" },
    { puan: 31.366127908229828, isim: "Marchin Prachino" },
    { puan: 69.5473620891571, isim: "Vitor Petrino" },
    { puan: 32.96671081930399, isim: "Anton Turkalj" },
    { puan: 57.67553277909756, isim: "Tyson Pedro" },
    { puan: 29.48719809949398, isim: "Modestas Bukauskas" },
    { puan: 35.89591576755047, isim: "Zac Pauga" },
    { puan: 45.44370096325874, isim: "Mohammed Usman" },
    { puan: 53.15653928518295, isim: "Zhang Weili" },
    { puan: 51.599768581986424, isim: "Amanda Lemos" },
    { puan: 33.56410567760467, isim: "Marina Rodriguez" },
    { puan: 32.67866777479649, isim: "Michelle Waterson-Gomez" },
    { puan: 43.57274858951568, isim: "Luana Pinheiro" },
    { puan: 30.988180816173553, isim: "Sam Hughes" },
    { puan: 37.291796231269835, isim: "Piera Rodriguez" },
    { puan: 26.622970340028406, isim: "Kay Hansen" },
    { puan: 32.77556060552597, isim: "Alexa Grasso" },
    { puan: 31.90272634625435, isim: "Viviane Araujo" },
    { puan: 27.23143671452999, isim: "Jennifer Maia" },
    { puan: 47.38863515257835, isim: "Casey O'Neill" },
    { puan: 22.23311920464039, isim: "Roxanne Modafferi" },
    { puan: 35.45943273305893, isim: "Taila Santos" },
    { puan: 67.63758237361908, isim: "Erin Blanchfield" },
    { puan: 43.183472633361816, isim: "Jessica Andrade" },
    { puan: 45.249963781237604, isim: "Mackenzie Dern" },
    { puan: 29.796199688315394, isim: "Angela Hill" },
    { puan: 39.35915505588055, isim: "Denise Gomes" },
    { puan: 39.92787495553493, isim: "Anthony Smith" },
    { puan: 70.06585530638695, isim: "Ryan Spann" },
    { puan: 62.250053972005844, isim: "Nikita Krylov" },
    { puan: 103.28714761734008, isim: "Shavkat Rakhmonov" },
    { puan: 35.68082895576954, isim: "Li Jingliang" },
    { puan: 36.78580749630928, isim: "Gilbert Burns" },
    { puan: 35.461759665608405, isim: "Kevin Holland" }
];

function karsilastir() {
    // İsim kutucuklarından değerleri al
    var isim1 = document.getElementById("fighter1").value;
    var isim2 = document.getElementById("fighter2").value;

    // Veri kümesindeki savaşçıları ara ve puanlarını al
    var puan1 = fighters.find(fighter => fighter.isim === isim1);
    var puan2 = fighters.find(fighter => fighter.isim === isim2);

    // Sonucu hesapla
    var sonuc = "";
    if (puan1 && puan2) {
        if (puan1.puan > puan2.puan) {
            sonuc = isim1 + " Wins!";
        } else if (puan1.puan < puan2.puan) {
            sonuc = isim2 + " Wins!";
        } else {
            sonuc = "Draw!";
        }
    } else {
        sonuc = "Please enter valid fighter names!";
    }

    // Sonucu ekrana yazdır
    document.getElementById("sonuc").innerHTML = sonuc;
}



