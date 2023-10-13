# todoList-HTML
Todo List using HTML, CSS, and JavaScript. It can be still be improved.

How it works is simple.
I first made the basic elements, and made the css in order to style it.
The hard part was the JS, for me who has a bit of experience in it, it wasn't that hard but for others who are beginners, they might face some challenges.
The first thing I did was to get the id of the elements, and I made an empty array. The empty array is where we will put the items of the to do list.
After that, I made an object constructor which I call "todoTitle". I'm not really the best at giving names to variables.
The idea behind this object constructor is, this is where we will pur the user input as well as the boolean for wether the to do item is done or not.
After that I made an even listener for the submit button, the function "x.preventDefault();" is inside the submit button because for some reason my browser keeps refreshing when I was testing my code.
The main function of the event listener is to push a new item inside the "todo" array using the "push" method. Using the keyword "new" we call the object constructor and input the "title.value" the "title" here is the id of our input.
We took the input value, and added false for our boolean.
