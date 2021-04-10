# Longest Palindromic Subsequence

The purpose of the exercise is to find the length of the longest palindromic subsequence of the text string using web forms.

## UX

Any upper case characters will be converted to lower case characters.
Examples:

- Bobcat is the same as bobcat
- BBC is the same as bbc
- ANNA is the same as anna
- aA is the same as aa
- Radar is the same as radar

As a user, I expect the input field to have a placeholder.

As a user, when I hover on to the input field, I expect a screentip.

As a user, when I do not enter anything on the input field having clicked the Submit button, I expect the message:

    Invalid Input.  Text cannot be empty.

As a user, when I enter something (e.g. bobcat) on the input field having clicked the Submit button, I expect the message:

    You have entered the text bobcat.
    The length of the longest palindromic subsequence is 3.

As a user, when I enter the text Abba, I expect the length of the longest palindromic subsequence to be 4.

Information Architecture - the text that is to be submitted in the input field
is a string.  It cannot be blank.

There is a function lps, which has one string parameter `str`.  This function returns an integer between 1 and the length of the string `str`.

Explanations

    For bobcat, the length of the string is 6
    The starting array is [0,0,0,0,0,0], i runs from n-1 to 0 and j runs from i to n-1, where n is the length of the string (e.g. 6).
    Start with i=5, the ending point of j=5.
    The array becomes [0,0,0,0,0,1].
    Start with i=4, the start point of j is 4.
    The array becomes [0,0,0,0,1,1].
    j becomes 5.  Look at str[i], it is 'a'.  Look at str[j], it is 't'.
    Is str[i] equal to str[j]?  No.  Set the backUp to arr[j], which is 1.
    Look at arr[j-1], it is 1.  Find the maximum of arr[j] and arr[j-1].  It is 1.
    The array is still [0,0,0,0,1,1].
    Start with i=3, the start point of j is 3.
    The array becomes [0,0,0,1,1,1]
    j becomes 4, look at str[i], it is 'c'.  Look at str[j], it is 'a'.
    Is str[i] equal to str[j]?  No.  Set the backUp to arr[j], which is 1.
    Look at arr[j-1], it is 1.  Find the maximum of arr[j] and arr[j-1].  It is 1.
    Repeat with j=5, 'c' does not equal 't'.  The array is still [0,0,0,1,1,1].
    Start with i=2, the start point of j is 2.
    The array becomes [0,0,1,1,1,1]
    j becomes 3, look at str[i], it is 'b'.  Look at str[j], it is 'c'.
    Is str[i] equal to str[j]?  No.  Set the backUp to arr[j], which is 1.
    Look at arr[j-1], it is 1.  Find the maximum of arr[j] and arr[j-1].  It is 1.
    Repeat with j=4 and j=5.
