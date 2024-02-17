window.addEventListener("load", function () {
  init();
});








const top_id = "paragraph";
const begin_id = "begin";
const beginning_id = "beginning"; // I would try to rename these so it's a little clearer what does what


const init = () => {
  /* 

We want to hold a variable of how much of the story has been revealed. 
This way we can control which element in array array (at the bottom of this file) is showing
and when.  We start at -1 because the first element in a javascript array has the index 0. 
So this way we don't show anything at the start.
 */
  let counter = -1;

  let top_div = document.getElementById(top_id);

  /* We grab a reference to our begin button */
  let begin = document.getElementById(begin_id);

  /* and make it do stuff on click */
  begin.addEventListener("click", function () {
    /* When we click begin, we should increment our counter by 1, and then set 
    that array element as the text on our page */

    counter = counter + 1; // increment by one

    /* 
    Here we grab the next paragraph from story array. story_array[0] is the first element
    in the list. story_array[1] would be the second, story_array[2] would be the third, and so on
    and on and on (notice the numbers are stepped back by 1) 
    */
    if (counter < story_array.length) {
      // first we check to see if we've gone past the edge of the array

      var new_paragraph = story_array[counter]; // grabs the 'counter'th element of the array

      top_div.innerHTML =
        top_div.innerHTML + "<div>" + new_paragraph + "</div>"; // and we add on the paragraph;
    } else {
      // Here we could do something else if they got to the end of the story! Hide the button or show a message or something else.
    }
  });

    /* We grab a reference to our begin AGAIN button  (the one that sends you back to the start */
  let beginning = document.getElementById(beginning_id);
  beginning.addEventListener("click", function () {

    /* So now in here we reset everything  */
    counter = -1; // back to start 

    /* So what should we set top_div.innerHTML to so that it's just the first paragraph again */
    top_div.innerHTML = " ??????"
  })


  // We repeat the above processes for all our other buttons – setting content and counter to whatever it should be 

};

/* 
Since we're going to be looping through pieces of the story piece by piece, 
the best thing to do is to hold the content of the story in an array and step through
it as need be. An Array is just a list of objects organized with brackets and commas –
for example an array of numbers  [1,5,7,9] or an array of strings ["hey","hi","hello"]. So i'll set up an array with some paragraphs here.
*/

const story_array = [
  `This is the first couple of paragraphs`,
  `This is the second couple of paragraphs`,
  `This is the third couple of paragrpahs`,
  `and this is the fourth couple of paragraphs`,
];
