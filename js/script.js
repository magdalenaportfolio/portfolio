


// alle Tags bei anklick färben
var alleTags = document.getElementsByClassName('tag');
var listeTagAktiv = [alleTags.length];

var meineAktivenFilter = [];
var alleProjekte = document.getElementsByClassName('projekt');

for (let i = 0; i < alleTags.length; i++) { // erst sind alle Tags inaktiv
    listeTagAktiv[i] = false;
}



for (let i = 0; i < alleTags.length; i++) {

    alleTags[i].addEventListener('click', function () { // wenn tag angeklickt


        if (listeTagAktiv[i]) { // aktiv inaktiv umschalten
            listeTagAktiv[i] = false;
            meineAktivenFilter.splice(meineAktivenFilter.indexOf(alleTags[i].getAttribute('id')), 1);

        } else {
            listeTagAktiv[i] = true;
            meineAktivenFilter.push(alleTags[i].getAttribute('id').toString()); //  der filterliste hinzufühen

        }
        console.log(meineAktivenFilter);


        // --> wie soll s sich nach dem aktiv parameter einfärben?
        if (listeTagAktiv[i] == false) {
            alleTags[i].style.backgroundColor = "rgb(230,230,230)"; //  hintergrundfarbe inaktiv
            alleTags[i].style.color = "rgb(0, 0, 0)";
        } else {
            alleTags[i].style.backgroundColor = "rgb(0, 0, 0)"; // hintergrundfarbe bei aktiven tagsm nach abschalten
            alleTags[i].style.color = "rgb(255,255,255)";
        }

        //console.log("ein tag wurde angeklickt!");
        if (meineAktivenFilter.length == 0) {
            for (let i = 0; i < alleProjekte.length; i++) { // ohne filter? zeige alles
                alleProjekte[i].style.display = "flex";
            }
        } else {
            // sotiere die projekte neu:

            for (let i = 0; i < alleProjekte.length; i++) {  // 0. alle elemente unsichtbar 
                alleProjekte[i].style.display = "none";// unten?
            }

            // 1.  filterliste:  meineAktivenFilter
            //alleProjekte[0].style.display = "block";

            for (let i = 0; i < alleProjekte.length; i++) { // 2. jedes projektelement soll duchlaufen werden

                let meineStichworte = alleProjekte[i].classList;  // 3. jedes pr el hat eine liste mit ihren stichworten ('projekt" ist als klasse dabei aber egal) // 4. all diese stichworte sollen in eine liste

                for (let f = 0; f < meineAktivenFilter.length; f++) {

                    for (let s = 0; s < meineStichworte.length; s++) {

                        if (meineStichworte[s] == meineAktivenFilter[f]) {
                            alleProjekte[i].style.display = "flex";
                        }

                    }
                }

            }

        }
        // 5. die 2 listen: aktivefilter und meinestichworte
        // für alle aktivefilter-> in stichwortliste übereinstimmende wörter?
        // wenn ja:  display block









    }); // ende: wenn ein tag angeklcikt wurde



    // hover über inaktive tags --> es wird helleres grau
    alleTags[i].addEventListener('mouseenter', function () {
        if (alleTags[i].style.backgroundColor != "rgb(0,0,0)") {
            if (listeTagAktiv[i] != true) {

                alleTags[i].style.backgroundColor = "rgb(245,245,245)"; /*hover farbe vor einschalten */
                alleTags[i].style.color = "rgb(0,0,0)";
            }
            // hover über aktive -> es wird ein etwas helleres schwarz
            if (listeTagAktiv[i] == true) {

                alleTags[i].style.backgroundColor = "rgb(60,60,60)"; /*hoverfarbe nach ausschalten */
                alleTags[i].style.color = "rgb(255,255,255)";
            }
        }


    });

    // kein mousehover mehr
    alleTags[i].addEventListener('mouseleave', function () {
        if (listeTagAktiv[i] != true) { // bei inaktiven tags wird es wieder grau
            alleTags[i].style.backgroundColor = "rgb(230,230,230)"; /*hoverfarbe nach ausschalten */

        } else { // bei aktiven wird es wieder schwarz
            alleTags[i].style.backgroundColor = "rgb(0,0,0)";
        }


    });






}// was für alle tags gilt (verfärbung)


