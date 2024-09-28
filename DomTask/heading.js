let element = document.getElementById("text-yellow");
let sentences = element.innerText.split(".");
let newContent = "";


sentences.forEach(sentence => {
    sentence.split(" ").forEach(word => {
        newContent += word.length >= 8 ? `<span style="background-color: yellow;">${word}</span> ` : word + " ";
    });
    newContent += ".<br>";
});

element.innerHTML = newContent;


let wordCount = element.innerText.split(" ").length;


document.querySelector("h1").insertAdjacentHTML("afterend", `<p>Word Count: ${wordCount}</p>`);
