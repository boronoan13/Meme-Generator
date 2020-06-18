const form = document.querySelector('#memeform');
const imageLink = document.querySelector('input[name="image link"]');
const topText = document.querySelector('input[name="top text"]');
const bottomText = document.querySelector('input[name="bottom text"]');
const results = document.querySelector('#results');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newMeme = makeMeme(
        imageLink.value,
        topText.value,
        bottomText.value
    )
});

function makeMeme(imgLink, tText, bText) {
    
    const results = document.createElement('div');
    results.setAttribute('class', 'results');
    container.appendChild(results);

    const meme = document.createElement('img');
    meme.src=imgLink;
    results.appendChild(meme);
   
    const topWords = document.createElement('div');
    topWords.innerHTML=tText;
    topWords.setAttribute("class", "ttext");
    results.appendChild(topWords);
    
    const bottomWords = document.createElement('div');
    bottomWords.innerHTML=bText;
    bottomWords.setAttribute("class", "btext");
    results.appendChild(bottomWords);

    const brk = document.createElement('br');
    results.appendChild(brk);

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Delete';
    removeButton.setAttribute('class', 'smallbtn');
    results.appendChild(removeButton);
    
    
    imageLink.value='';
    topText.value='';
    bottomText.value='';

}

container.addEventListener('click', function(e){
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
})