console.log("Welcome to Magic Notes");
showNotes();

// If a User add a not, add it to the local storage

let addBtn = document.getElementById('addBtn');

// if(search.value != '') {
//     $('input[type="submit"]').attr('disabled' , false);
// }else{
//     $('input[type="submit"]').attr('disabled' , true);
// } 

if(document.getElementById('addTxt').addEventListener('input', function(element){
    document.getElementById('addBtn').disabled = false;
})){
    
}


addBtn.addEventListener('click', function (e) {

    let addTxt = document.getElementById('addTxt');

   

    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
        
    }

    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = '';
    document.getElementById('addBtn').disabled = true;
    
    console.log(notesObj);
    showNotes();



});

function showNotes() {
    console.log('Running');
    let notes = localStorage.getItem('notes');
  
    //console.log(notes);
    if (notes == null) {
        notesObj = [];
    }
    else {
         notesObj = JSON.parse(notes);
    }
//    console.log(notesObj);
    let html = '';
    notesObj.forEach(function(element, index) {


        html += `<div class="noteCard card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5><hr>
          <p class="card-text">${element}</p>
          <button id=${index} onclick='deleteNode(this.id)' class="btn btn-danger">Delete Note</button>
        </div>
      </div>
        
        
            `;
          

    });

    notesElm = document.getElementById('notes');
    if(notes != null){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `<h5>Nothing is Here!! Add Something <h5> `;
    }

};


function deleteNode(index){

    let notes = localStorage.getItem('notes');
    //console.log(notes);
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();


};




let search = document.getElementById('searchTxt');



search.addEventListener('input', function(){

    let inputVal = search.value.toLowerCase();
    console.log(inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){

        let cardtxt = element.getElementsByTagName('p')[0].innerText.toLowerCase();
        if(inputVal.includes(cardtxt)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }

    });

});


