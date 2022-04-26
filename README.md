# WeekThree_F

GitHub : https://github.com/frsargua/WeekThree_F.git

GitHub Page : https://frsargua.github.io/WeekThree_F/


This piece of work required us to understand how to use functions.

1st - PasswordLengthChecker()
      It pops a prompt window that asks the user to input a numerical value between 8 and 128. If this isnt done, an alert window pops out and the function is restarted.

2nd - casing()
      Adding the alphabets inside the function makes it more object oriented. Again, the user has to select between "lowercase", "uppercase" or "both". Depending on the answer, different arrays containing the desired choice will be returned.

3rd - numbering()
      The user selects either "yes" or "no" from the prompt window.
      Options:
        Yes : Array containing numbers is return.
        No  : Empty array is returned.

4th - SpecialCharactersChecker()
      The user selects either "yes" or "no" from the prompt window.
      Options:
        Yes : Array containing special characters is return.
        No  : Empty array is returned.

5th - randomSelector()
      User inputs an array. Math method is used to randomly create an integer value smaller or equals to the length of the array.

6th - isTrue()
      This function checks that the final password contains the desired options.

7th - generatePassword()
      Takes the return values from functions (2-4) and combines them into a single one to create a larger array. Then, by using the randomSelector() function, we pick random values from the array. To verify that it contains at least one type of character from the user's options we use isTrue function before the array reaches the desired length.