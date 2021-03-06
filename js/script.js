// Function to Get Text Information (including Invalid Input)
function getTextInfo() {
    // Set Up Variable
    let txt="";
    // Get the value of the input field
    let myText = document.getElementById("mytext").value;
    // Check if Text is Valid
    if (myText.length == 0) {
        txt += `Invalid Input.  Text cannot be empty.`;
    } else {
        // Get Text Information
        txt += `You have entered the text ${myText}.<p>`;
        txt += `The length of the longest palindromic subsequence is ${lps(myText)}.`;
    }

    // Display Information in the Browser
    document.getElementById("txtinfo").innerHTML = txt;
}

/* 
    Function to return the length of the longest palindromic subsequence
    in the  string str
*/
function lps(str) {
    // Convert str to lower case
    str = str.toLowerCase();

    // Get the length of the string
    let n = str.length;

    // Apply Dynamic Programming - Fill the array with 0 n times
    let arr = Array(n).fill(0);

    // Apply For Loops

    // Pick Starting Point
    for (let i=n-1; i>-1; i--) {
        let backUp = 0;

        /*
            Pick Ending Point and see if str[i] increases length of
            longest common subsequence ending with str[j]
        */

        for (let j=i; j<n; j++) {
            // Handling Substrings of Length 1
            if (j==i) {
                arr[j] = 1;
            }

            // Handle Case when Corner Characters are the same
            else if (str[i] == str[j]) {
                let temp = arr[j];
                arr[j] = backUp + 2;
                backUp = temp;
            }

            // Handle Case when Corner Characters are not the same
            else {
                backUp = arr[j];
                arr[j] = Math.max(arr[j-1],arr[j]);
            }
        }
    }

    // Return the last element of the array
    return arr[n-1];
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("txtinfo").innerHTML = txt;
}
