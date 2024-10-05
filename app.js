/*===== GLOBAL DOM VARIABLES =====*/
const phrase_input = document.getElementById("phrase-input");
const get_results_btn = document.querySelector(".result-btn");
const reset_btn = document.querySelector(".reset-btn");
const result_display = document.querySelector(".result");
const dark_mode_btn = document.querySelector(".mode-btn");
const result_container = document.querySelector(".result-container");
const form = document.getElementById("input-form");



/*===== EVENT LISTENERS =====*/
// event listner for form submission
form.addEventListener("submit",submitPhrase);

// event listner for reset button
reset_btn.addEventListener("click",resetEverything)

// event listner that toggles dark/light mode 
dark_mode_btn.addEventListener("click",toggleDarkMode)




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
            }else if(item === "a".toUpperCase() || item === "e".toUpperCase() || item === "e".toUpperCase() || item === "o".toUpperCase() ||  item === "u".toUpperCase()){
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
    },1000)

}


// DISPLAY ERROR MESSSAGE FUNC
// function is used to display error messages
function showErrorMsg(color,text){
    // the DOM element for the error message
    const err_msg = document.querySelector(".err-msg");
    //adds the show class to the element 
    err_msg.classList.add("show");
    // dynamically updates the error message and error text color base arguments passed in
    err_msg.style.color = `${color}`;
    err_msg.textContent = `${text}`;

    // removes the error from display after 3 seconds
    setTimeout(()=>{

        err_msg.classList.remove("show");  
    },2000)


}


// TOGGLE DARK MODE FUNC
/**The `toggleDarkMode` function toggles a dark mode theme on and off for the webpage
   by adding or removing specific classes from elements like the body, header, card,
    and reset button.*/
function toggleDarkMode(){
    
    // selects DOM elements and toggles the dark mode classes on them based on user interaction with toggle btn
    document.querySelector("body").classList.toggle("dark-bg-img");
    document.querySelector("header").classList.toggle("dark-header");
    document.querySelector(".card").classList.toggle("dark-card");
    // does the same thing for the reset btn but with a delay 1 second delay
    setTimeout(()=>{
        document.querySelector(".reset-btn").classList.toggle("dark-reset-btn")
    },1000)
}