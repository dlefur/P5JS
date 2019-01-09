let inputText;
let pInputText;
let textArea;
let pTextArea;
let buttonValider;
let textCallac;
let pCallac;
let inputFile;
let pInputFile;




function setup() {
    noCanvas();
    //inputText = createInput();  // si on crée depuis p5
    inputText = select("#inputText");
    //inputText.attribute("placeholder", "ici");
    //pInputText=createP("");  // si on crée depuis p5
    pInputText = select("#pInputText");
    inputText.changed(newText); // action si texte terminé
    //inputText.input(newText);  // action si caractére entré
    textArea = select("#textArea");

    pTextArea = select("#pTextArea");

    buttonValider = select("#buttonValider");
    buttonValider.mousePressed(newTextArea);

    loadStrings("../Textes/callac.txt", afficherCallac); // chargement et callback

    inputFile = createFileInput(fileChoosen);
    inputFile.parent("inputFile-holder");
    inputFile.attribute("accept", ".txt");  // extensions acceptées
    pInputFile = select("#pInputFile");

    inputFile.input(fileChoosen);

}

function newText() {
    let text = inputText.value();
    pInputText.html(text);

}

function newTextArea() {
    let text = textArea.value();
    console.log(text);
    pTextArea.html(text);

}

function afficherCallac(text) {
	console.log(text);
    pCallac = select("#pCallac");
    let textFormate = join(text, "<br/>");
    pCallac.html(text);
}

function fileChoosen(file) {
    pInputFile.html(file.data);
}