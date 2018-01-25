var playList = [ /* This is a TWO-DIMENSIONAL ARRAY ... an array with arrays within! */
  ['I Did It My Way', 'Frank Sinatra'],
  ['Respect', 'Aretha Franklin'],
  ['Imagine', 'John Lennon'],
  ['Born to Run', 'Bruce Springsteen'],
  ['Louie Louie', 'The Kingsmen'],
  ['Maybellene', 'Chuck Berry']
];

function print(message) {
  document.write(message);
}

function printSongs( songs ) { /* list = arbitrary name */
    var listHTML = '<ol>'; /* This will pull up all <ol> from HTML, the whole chunk, and add it to our page. */
    for ( var i = 0; i < songs.length;  i += 1) {
        listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>'; /* songs[i][0], when the code first runs, is the same as songs[0][0], which is the same as 'I Did It My Way' within playList, a Two-Dimensional Array ... to access items within a 2D Array, you need 2 sets of brackets -- 1 to access the inner item in the array you're referencing and 1 to access the outer item in the array you're referencing ...*/        
    }
    listHTML += '</ol>';
    print(listHTML);
}
printSongs(playList); /* You have to call the function. Lines 14-20 do nothing unless they're called! */