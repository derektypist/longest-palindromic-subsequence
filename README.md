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

As a user, if I click on the Reset button, I expect fresh information.

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

    For bobcat, the length of the string is 6.  The starting array is [0,0,0,0,0,0].  If the corner characters are not the same and j does not equal i, find the maximum of arr[j] and arr[j-1].
    
    | i | j | str[i] | str[j] | arr[j-1]  | arr[j]   | arr so far       |
    | - | - | ------ | ------ | --------- | -------- | ---------------- |
    | 5 | 5 |        |        |           |    1     | [0,0,0,0,0,1]    |
    | 4 | 4 |        |        |           |    1     | [0,0,0,0,1,1]    |
    | 4 | 5 |   a    |   t    |    1      |    1     | [0,0,0,0,1,1]    |
    | 3 | 3 |        |        |           |    1     | [0,0,0,1,1,1]    |
    | 3 | 4 |   c    |   a    |    1      |    1     | [0,0,0,1,1,1]    |
    | 3 | 5 |   c    |   t    |    1      |    1     | [0,0,0,1,1,1]    |
    | 2 | 2 |        |        |           |    1     | [0,0,1,1,1,1]    |
    | 2 | 3 |   b    |   c    |    1      |    1     | [0,0,1,1,1,1]    |
    | 2 | 4 |   b    |   a    |    1      |    1     | [0,0,1,1,1,1]    |
    | 2 | 5 |   b    |   t    |    1      |    1     | [0,0,1,1,1,1]    |
    | 1 | 1 |        |        |           |    1     | [0,1,1,1,1,1]    |
    | 1 | 2 |   o    |   b    |    1      |    1     | [0,1,1,1,1,1]    |
    | 1 | 3 |   o    |   c    |    1      |    1     | [0,1,1,1,1,1]    |
    | 1 | 4 |   o    |   a    |    1      |    1     | [0,1,1,1,1,1]    |
    | 1 | 5 |   o    |   t    |    1      |    1     | [0,1,1,1,1,1]    |
    | 0 | 0 |        |        |           |    1     | [1,1,1,1,1,1]    |
    | 0 | 1 |   b    |   o    |    1      |    1     | [1,1,1,1,1,1]    |
    | 0 | 2 |   b    |   b    |           |    3     | [1,1,3,1,1,1]    |
    | 0 | 3 |   b    |   c    |    3      |    1     | [1,1,3,3,1,1]    |
    | 0 | 4 |   b    |   a    |    3      |    1     | [1,1,3,3,3,1]    |
    | 0 | 5 |   b    |   t    |    3      |    1     | [1,1,3,3,3,3]    |

    The final array is [1,1,3,3,3,3].  Return the last element of the array, which is 3.  So the longest palindromic subsequence for bobcat is 3.

    Making the table in the same way for abba, the final array is [1,1,2,4].  Return the last element of the array which is 4.  So the longest palindromic subsequence for abba is 4.

## Features

There is a Reset button, which provides a fresh start.

Validation of text input.  If there is no text, display the error message.

## Technologies

This project uses the technologies of HTML5, CSS3, JavaScript, Bootstrap 5.0.0-beta3 and Google Fonts.  JavaScript is used for validating text input, dynamic programming and array manipulation.

