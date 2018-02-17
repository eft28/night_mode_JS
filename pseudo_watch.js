/*

create something like this 

var o = { p: 1 };

o.watch('p', function (id, oldval, newval) {
  console.log('o.' + id + ' changed from ' + oldval + ' to ' + newval);
  return newval;
});

o.p = 2;
o.p = 3;
delete o.p;
o.p = 4;

o.unwatch('p');
o.p = 5;

--------------------------------------
This script displays the following:

o.p changed from 1 to 2
o.p changed from 2 to 3
o.p changed from undefined to 4
*/

var example = {

    attribute: 10,
    
};

example.watch(attribute, function(id, old_value, new_value) {
        console.log("Now watching for this attribute" + attribute);
        console.log("id attribute" + id); //prints the attribute
        console.log("Changed from: " + old_value + " to: " + new_value);
        return new_value;
    });
//for example
example.attribute = 29;

//it is displayed:
//Now watching for this attribute attribute
//id attribute attribute
//Changed from: 10 to: 29



//since watch() is no longer supported on firefox for performance, onChange() could be used

//FOR SERVER USES
let example = {
    a: 1
};

// Upon change, save to server
let changing = onChange(example, () => save(example));


// Make a change that would trigger changes
changing.a = 2;

// save() is triggered!

/*
-----> j.a === 2 <------
*/


//ORRRRR THE JQUERY CHANGE
var my_target = $(".target");
my_target.change(function() {
  alert( "Handler for .change() called." );
  alert("The target is: "+my_target+" and its value changed");
});

