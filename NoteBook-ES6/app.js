const mainBox = document.getElementById("mainBox"); // console.log(mainBox);

let addItem = () => {
    var titleInp = document.getElementById("titleInp");
    var textInp = document.getElementById("textInp");

    if (titleInp.value.length > 2 && textInp.value.length > 2) {
        const box = document.createElement("div");                              //create box//
        box.setAttribute("class", "myBox animate__animated animate__backInUp");
        box.setAttribute("data-aos", "fade-up")

        const section = document.createElement("section");                      //create section
        section.setAttribute("class", "list");
        box.appendChild(section);

        const h4 = document.createElement("h4");                                // create h4 for title
        let h4Text = document.createTextNode(titleInp.value);
        h4.appendChild(h4Text);
        section.appendChild(h4);

        const para = document.createElement("p");                               // create p for input text
        let paraText = document.createTextNode(textInp.value);
        para.appendChild(paraText);
        section.appendChild(para);
        section.setAttribute("data-aos", "fade-up")

        const h6 = document.createElement("h6");                                //create h6 for set edit icon and
        h6.innerHTML = "<i onclick='dlt(this)' class='fas fa-minus-circle'></i><i onclick='edit(this)' class='fas fa-edit'></i>";
        section.appendChild(h6);

        mainBox.appendChild(box);                                                // console.log(h6);
        textInp.value = "";                                                      // console.log(box);
        titleInp.value = "";
    } else {
        alert("Enter Value Please...!")
    }
}

let dltAll = () => {                                                            //delete All Function
    mainBox.innerHTML = "";
}

let dlt = e => {                                                                //one remove function
    e.parentNode.parentNode.parentNode.remove();                                // console.log(e.parentNode.parentNode.parentNode)
}

let edit = e => {                                                               //edit function
    let val = e.parentNode.parentNode.firstChild.innerHTML;                     // console.log(e.parentNode.parentNode.firstChild.nextSibling);
    let editTitle = prompt("Edit Title Sir", val);
    e.parentNode.parentNode.firstChild.innerHTML = editTitle;
    let val2 = e.parentNode.parentNode.firstChild.nextSibling.innerHTML;
    let editText = prompt("Edit Text Sir", val2);
    e.parentNode.parentNode.firstChild.nextSibling.innerHTML = editText;


}