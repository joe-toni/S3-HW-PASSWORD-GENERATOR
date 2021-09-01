# S3-HW-PASSWORD-GENERATOR
This assignment was to allow us to demontrate our ability to use javascipt. We were given a starter code to be modified and had to adjust it to both correctly prompt the user for input and display a generated password. I accomplished this by first writing out the HTML file to present the user with an interface for selecting character types and a desired password length. The length selector is a range type input with a basic slider display that defaults the desired password length to eight characters unless changed by the user. The character type selectors are a series of check boxes that start off with all character types set to active unless altered by the user. These two parts are then separeted into modals that will be pushed to the back and hidden when not needed and brought forward and made visible when the user clicks on the proper prompt buttons. The javascript randomly gernerates passwords by establishing several variables that are changed based on user input and calling functions in a correct sequence to walk the user through the two prompts. It then uses a for loop to call functions that randomly obtain a string value from a given list and appends them only if it is of the included character types and the password has not yet reached the desired length. Since this is done in repetative sequence when the loop is done a function is called to scramble the password for added security.

https://joe-toni.github.io/S3-HW-PASSWORD-GENERATOR/

![joe-toni github io_S3-HW-PASSWORD-GENERATOR_](https://user-images.githubusercontent.com/84884625/131746823-417a2058-dd13-4586-9ce2-0d74bd0f65c7.png)
![joe-toni github io_S3-HW-PASSWORD-GENERATOR_ (1)](https://user-images.githubusercontent.com/84884625/131746822-65310825-543d-4fb6-bd1f-d202fc80db29.png)
![joe-toni github io_S3-HW-PASSWORD-GENERATOR_ (2)](https://user-images.githubusercontent.com/84884625/131746818-b0b9d7f0-57fc-4095-a68f-838099ce3952.png)
![joe-toni github io_S3-HW-PASSWORD-GENERATOR_ (3)](https://user-images.githubusercontent.com/84884625/131746815-eec635f5-2c31-44c8-b7e3-b0ba54691e55.png)
