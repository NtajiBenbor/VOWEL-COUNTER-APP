/*===== GLOBAL DOM VARIABLES =====*/
const phrase_input = document.getElementById('phrase-input');
const get_results_btn = document.querySelector('.result-btn');
const reset_btn = document.querySelector('.reset-btn');
const result_display = document.querySelector('.result');
const dark_mode_btn = document.querySelector('.mode-btn');
const result_container = document.querySelector('.result-container');
const form = document.getElementById('input-form');

/*===== EVENT LISTENERS =====*/
// event listner for form submission
form.addEventListener('submit',submitPhrase);

// event listner for reset button
reset_btn.addEventListener('click',resetEverything)


/*===== FUNCTIONS =====*/
// SUBMIT PHRASE FUNC
function submitPhrase(e){
    // turns of form default submit behaviour
    e.preventDefault();
    // saves the users input to the phrase variable
    let phrase = phrase_input.value;

    if(phrase){

        //calls  the get vowels function with the users inputed phrase as an argument
        // the function calculate the number of vowelin the phrase
        // then returns the number
        // the number is used to update the textcontent of the result display dom element 
       result_display.textContent = getVowels(phrase);

       //displays the results on the page    
       showResults();
 
    }else{
        // when user inputs invalid input, it displays an error message
        showErrorMsg("red","invalid input, try again");
        // resets the app to its defualt state
        resetEverything()
    }
}

//GET VOWEL FUNCTION 
function getVowels(text){
 //converts the sring inputed by the user into an array 
    let text_arry = text.split("");
    // intializes a counter variable
    let counter = 0;
    /* loop over the created array using the filter method to check againts the
     text implemented if the array element passes the test the counter is 
     incremented by one*/ 
    text_arry.filter(item=>{
        if(item === "a" || item === "e" || item === "i" || item === "o" ||  item === "u"){
        //   case for lowercase letter 
            counter ++
        }else if(item === "U" || item === "E" || item === "I" || item === "O" ||  item === "U"){
        // case for upperrcase letter
            counter ++
        }
    })
    //    return the value of the counter
        return counter
}


// SHOW RESULT FUNC
// this function shows the results of the vowel counting
 function showResults(){
    /* displays the results by adding a class that changes the elements
      visibility to visible*/
    result_container.classList.add("show");
      /* displays the reset button by adding a class that changes the elements
      visibility to visible, but only after 5 seconds*/
    setTimeout(()=>{
        reset_btn.classList.add("show");
    },3000)

 }


//  RESET FUNCTION
// set the application back to its original state
function resetEverything(){
    // resets the value of the form input to an empty string
    phrase_input.value = ""
    // hides the result element
    result_container.classList.remove("show");
    // sets the value of the result element to 0
    result_display.textContent = 0
    //remove the reset button after a 2 second delay 
    setTimeout(()=>{
        reset_btn.classList.remove("show");
    },2000)

}


// DISPLAY ERROR MESSSAGE FUNC
function showErrorMsg(color,text){
    
    const err_msg = document.querySelector('.err-msg');

    err_msg.classList.add('show');
    err_msg.style.color = `${color}`;
    err_msg.textContent = `${text}`;

    setTimeout(()=>{

        err_msg.classList.remove('show');  
    },3000)


}