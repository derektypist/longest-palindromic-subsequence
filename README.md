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

    For bobcat, the length of the string is 6.  The starting array is [0,0,0,0,0,0].
    
    | i | j | str[i] | str[j] | arr[j-1]  | arr[j]   | arr so far       |
    | - | - | ------ | ------ | --------- | -------- | ---------------- |
    | 5 | 5 |        |        |           |          | [0,0,0,0,0,1]    |
    | 4 | 4 |        |        |           |          | [0,0,0,0,1,1]    |
    | 4 | 5 |   a    |   t    |    1      |    1     | [0,0,0,0,1,1]    |
    | 3 | 3 |        |        |           |          | [0,0,0,1,1,1]    |
    | 3 | 4 |   c    |   a    |    1      |    1     | [0,0,0,1,1,1]    |
    | 3 | 5 |   c    |   t    |    1      |    1     | [0,0,0,1,1,1]    |

