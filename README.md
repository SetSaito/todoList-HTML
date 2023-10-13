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
We took the input value, and added false for our boolean then "push" it inside our array.
After this, I called the "itemList" which is the id for our "ul" element. Using the innerHTML we can get whatever is inside the element and put it inside a variable which I named "list".
We do this so javascript can remember what was the "list" looked like.
Now we will use the for loop method in order to get the index which we will use as our id for the item inside the list.
For this one, I just changed the innerHTML of the "itemList" with list + a new set of element. I use backtick to easily do this. We can use quotation marks but it would take a while, but using backtick we can use `${variable}` in order to call a variable.
After that, I made the done function. Inside the for loop, we already made an onClick event listener for the button to call the done and clr function with their index number as the parameter.
I took advantage of this parameter. In the "todo" variable, as I already said, it was an array with objects inside, so we first call the index of the object then we call the key and change its value to "true".
If it is true, we will get to have a text with a line, meaning that the item has been completed.
For the clr function, this one works the same as the done function but with a twist.
I first made an empty array which will hold all of our objects. Then using for loop, I separated those that do not have an equal value to the clr item. I plan on experementing this one for the future because I believe I can do this part better.
In any case, those that did not have equal value to the clr button means that it wasn't the one we want to delete or remove so we push them to the empty array, then if we found one that has equal value, we skip it.
After that, we synchronize our "todo" with the temporary array, and like before using innerHTML we print our the result.
For the save button, the idea behind it is to simply save the list to the localStorage, using a prompt we ask the user to name this file, then we parse the file into a JSON string. Empty our "todo" array again, then clear our innerHTML.
For the retrieve, we ask the user to input the name of which file we want to retrieve. Using JSON.parse we can turn the string back into our array, in we basically just use a for loop to print it all again.

I plan on improving this one, but I also plan on making a ReactJS version of the "todo" list.
