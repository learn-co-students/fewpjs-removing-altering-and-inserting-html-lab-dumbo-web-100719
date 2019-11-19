// Write your code here!

document.querySelector('main').remove();

let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerText = "Stephen is the champion";

document.querySelector('body').append(newHeader);


// // // READ
// let emojisUL = document.querySelector("ul")
// let theSameEmojisUL = document.getElementById('blobs')
// let anotherWayToGrabTheEmojisUL = document.querySelector("#blobs")

// // console.log(emojisUL, theSameEmojisUL, anotherWayToGrabTheEmojisUL);



// // // CREATE

// // 1) Create an element
// let newEmojiLi = document.createElement("li")
// // 2) Razzmatazz
// newEmojiLi.id = "createdElement"
// newEmojiLi.className = "good ugly"
// newEmojiLi.classList.add("better")

// newEmojiLi.innerText = "🍓"
// // 3) Find an appropriate place to slap on the DOM
// emojisUL.append(newEmojiLi)

// // OR ANOTHER WAY TO CREATE SOMETHING

// // emojisUL.innerHTML += "<li class='dont do this'>🤡</li>"