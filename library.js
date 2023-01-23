var container = document.getElementById("HobbyBooks");
var tempLibrary = [ ["Babel", "R.F. Kuang"],
                ["Six Easy Pieces", "Richard Feynman"],
                ["Tomorrow, and Tomorrow, and Tomorrow", "Gabrielle Zevin"],
                ["Ruination", "Anthony Reynolds"],
                ["The Tale of the Dueling Neurosurgeons", "Sam Kean"],
                ["The Last Wish", "Andrzej Sapkowski"],
                ["Animal Farm", "George Orwell"],
                ["Sword of Destiny", "Andrzej Sapkowski"],
                ["Sofia Petrovna", "Lydia Chukovskaya"],
                ["In Cold Blood", "Truman Capote"],
                ["Alex's Adventures in Numberland", "Alex Bellos"],
                ["In a Dark, Dark Wood", "Ruth Ware"],
                ["Blood of Elves", "Andrzej Sapkowski"],
                ["Designing Data-Intensive Applications", "Martin Kleppmann"],
                ["Cloud Cuckoo Land", "Anthony Doerr"]];

populateLibrary();

function populateLibrary() {
    let bookHeightMin = 11;
    let bookHeightDiff = 3;
    let bookColors = ["#335379", "#e8e4da", "#9f7ab0", "#b1a17e", "#839391", "#b4cbd0", "#7e3817"]
    let fontFamilies = ["Arial, sans-serif", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", "'Times New Roman', Times, serif", "'Courier New', monospace"];

    for (let i = 0; i < tempLibrary.length; i++) {
        let currBook = document.createElement("librarybook");

        let bookHeight = Math.floor(Math.random() * bookHeightDiff) + bookHeightMin;
        currBook.style.height = bookHeight + "em";
        let bookColorNum = Math.floor(Math.random() * bookColors.length);
        currBook.style.backgroundColor = bookColors[bookColorNum];
        let bookFontFamily = Math.floor(Math.random() * fontFamilies.length);
        currBook.style.fontFamily = fontFamilies[bookFontFamily];

        currBook.append(document.createTextNode(tempLibrary[i][0]));
        container.appendChild(currBook);
    }
}