const pluralizer = (thing,count) => {
    
    // used to check the last char in a string
    const countCheck = thing.charAt(thing.length-1);

    // used when manipulating a string if that string ends in 'y'
    const newChar = thing.slice(0,thing.length-1);
    
    const y = "y"

    if(count > 1 && newChar.includes(y)){                  
        console.log(count + '' + newChar + 'ies.');
    }

    else if(count > 1 && thing.countCheck !== 'y'){
        console.log(count + ' ' + thing + 's.');
    }

    else{
        console.log(count + ' ' + thing + '.');
    }

}

pluralizer('cat',5);
pluralizer('kitty',2);
pluralizer('cat',1);

/*
and outputs the pluralized form of the word, depending on what count is. 
    For example, "5 cats" or "1 dog". Change thing to different values to test your code!
Requirements
Your program should pluralize the word based on an integer (count)
*/