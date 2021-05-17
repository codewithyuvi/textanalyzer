function user_input(){
    var user_full_Input = document.getElementById("floatingTextarea2").value;
    var user_trim_Input = user_full_Input.trim();
    var userInput = user_trim_Input.replace(/[ ]{2,}/gi," "); 

    if(userInput == ""){
        error = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Alert !</strong> Please enter some text. 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
        
        document.getElementById("answer").innerHTML = error;
    }
    else{
        
        var char_len = userInput.length;
        var word_count = userInput.split(" ").length;

        var char_words ="The paragraph you entered contains " + char_len + " characters and " + word_count +" words.";
        
        document.getElementById("answer").innerHTML = char_words;
    }
}