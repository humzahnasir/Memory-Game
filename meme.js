let img = document.querySelector('#imageUrl');
let form = document.querySelector("#newMeme");
const button = document.querySelector('button');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const meme = document.createElement('div');
    const textTop= document.createElement('div');
    const textBottom = document.createElement('div');
    const img = document.createElement('img');


    let removeButton = document.createElement('button');
    removeButton.innerText = "Delete Meme";



    img.src = document.getElementById("imageUrl").value;
    textTop.classList.add("textTop");
    textTop.innerHTML = document.getElementById("topText").value;

    textBottom.classList.add("textBottom");
      textBottom.innerHTML = document.getElementById("bottomText").value;
      

    meme.classList.add("meme");
    meme.append(textTop);
    meme.append(textBottom);
    meme.append(img);
    meme.append(removeButton);
    let memeLocation = document.getElementById("location");
    memeLocation.append(meme);


    meme.addEventListener('click', function(event){
      event.target.parentNode.remove();    })

form.reset();

    })  

// meme.addEventListener('click', function(event){
//   console.log('delete it');
//     meme.remove();
//         // event.target.parentNode.remove();
// })


