//question 40
//Album: create object for music album 
//function for atrist  with title 
function make_album(name, title, Track) {
    var Album;
    if (Track) // if it has track number than it will go here
     {
        Album = {
            name: name,
            title: title,
            Track: Track,
        };
        return Album;
    }
    else { //if it has no track it will go here
        Album = {
            name: name,
            title: title
        };
        return Album;
    }
}
// Creating album dictionaries
console.log(make_album('Ali zafar', 'psl', 9));
console.log(make_album('noor jhan', 'nau bahar', 12));
console.log(make_album('aadat', 'jal', 8));
