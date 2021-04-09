// Function to Get Text Information (including Invalid Input)
function getTextInfo() {
    // Set Up Variable
    let txt="";
    // Get the value of the input field
    let myText = document.getElementById("mytext").value;
    // Check if Text is Valid
    if (myText.toString().length == 0) {
        txt += `Invalid Input.  Text cannot be empty.`;
    } else {
        // Get Text Information
        txt += `You have entered the text ${myText}.`;
        txt += `The length of the longest palindromic subsequence is ${lps(myText)}.`;
    }

    // Display Information in the Browser
    document.getElementById("txtinfo").innerHTML = txt;
}