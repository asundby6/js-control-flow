// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /* FUNCTION BLOCK */

// const pluralStrings_Vowel = ((newThing) => {                                                                                   // ENDS 'y' ; vowel <- 'y' ; adds 's'
//     let things = newThing;
//         console.log("|*| " + things + " initial store value... \n\tFunction Name :  |pSV| / 'pluralStringsVowel' |*|");
//     things = things.concat('s');
//         console.log("|*| " + things + " updated. \n\tUsed Function Name :  |pSV| / 'pluralStringsVowel' |*|");
//     return things;
// })

// /*
// const pluralStrings_Consonant = ((newThing) => {                           // ENDS 'y' ; consonant <- 'y' ; REMOVES 'y' -> ADDS 'ies'
//     let things = newThing;  
//         console.log("|*| " + things + " initial store value... \n\tUsing Function Name : |pSC| / 'pluralStrings_Consonant' |*|");
//     let slice_at_value = things.charAt(things.length-1)                                                             // newThing
//     things = things.slice(slice_at_value);
//         console.log("\t\t " + things + "\t\t#*#*#*#*TEMP#*#*#*#*" +"\nthings.slice => ' " +things+ " '" );
//     console.log("|*| " + things + " updated. \n\tUsing Function Name : |pSC| / 'pluralStrings_Consonant' |*|");
    
//     return things;
// })
// */

// const pluralStrings_Default = ((newThing) => {                                                                                                  // NO 'y' ; adds 's'
//     let things = newThing;
//         console.log("|*| " + things + " initial store value... \n\tUsing Function Name :  |pSD| / 'pluralStringsDefault' |*|");
//     things = things.concat('s');
//         console.log("|*| " + things + " updated. \n\tUsed Function Name :  |pSD| / 'pluralStringsDefault' |*|");
//     return things;
// })


// /* MAIN BLOCK */

// const thing = ["cat", "kitty", "dog", "puppy"];
// checkElementOne = 'y'
// checkElementTwo = ['a', 'e', 'i', 'o', 'u']   

// const whatToDo = (things) => { 
    
//     let totalLength = things.length;

// //checking
//     console.log('|*|*|*|*|*||*|*|*|*|*||*|*|*|*|*||*|*|*|*|*||*|*|*|*|*||*|*|*|*|*||*|*|*|*|*||*|*|*|*|*||*|*|*|*|*||*|*|*|*|*||*|*|*|*|*||*|*|*|*|*|');

//     console.log("\t  things.charAt().totalLength ")
//     console.log(things.charAt().totalLength);

//     // console.log("");


//         //  checks for 'y'            **            checks for ${val} <- 'y'            **            consonant  {others} -> 'y'
//         if (things.charAt(totalLength) == ('y') && (things.charAt((totalLength).includes(checkElementTwo) = true))){                                                                                                                         
//             console.log()
//             let pSV = pluralStrings_Vowel(things);
//         }
//         // searching similarly to ("  ^ 'same as above' ^  ")   ;   except desired outcomes = removing the 'y' and adding 'ies'
//         else if ((things.charAt(totalLength) == "y") && (things.charAt(totalLength-1).includes(checkElementOne) == true)) {                                                                                                                         
//             let pSC = pluralStrings_Consonant(things);
//         }
//         //            ('default')     |~V~|    Default Pluralizer Case    |~V~|            ('default')                             
//         else {       
//             let tempVal = things.charAt(things.length);                   
//             let tempVal2 = things.charAt((totalLength));                                                                                             
//             console.log("\t\t " + tempVal + "\n " + totalLength);
//             console.log(" things.charAt(totalLength) " + tempVal2);
            
//             let pSD = pluralStrings_Default(things);
//         } 

// }   

//         //-|---------------------------------------------------------------------------------------------|
//         //~(func)|         thing.forEach((things = thing.slice(",").map(whatToDo)) => {       (func)~\\  |_             
//         //-|-----------------------------------------------------------------------------------------------|_
//         // | LOOPS 'forEach' |=>|   { :item: 'things' }  =  { :itemOther: 'thing'}.slice(',').map(whatToDo) ~}
//         // |#|~things : represents the individual strings in between each ',' : <-->> {'~' + ('~').slice} ~|#|   
//         // |#|~({'~' + '~'}).map(whatToDo)->the new array formed from map is told to be pass as a (param) ~|#|
//         // |------------------------------------------------------------------------------------------------|

// thing.forEach((things = thing.slice(",").map(whatToDo)) => {                 
//     let parameterSingle = things;
//     let stringDestination = whatToDo(parameterSingle);
//     return stringDestination;
// });   


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // Functions (to be called) \\






            //      Main (driver)      \\

            
            
const whatToDo = (singleString) => {
                
    // console.log("Single Strings From Array : \n");
    // console.log("\t=> " + singleString)


    let stringLength = singleString.length;


    console.log("singleString : " +  singleString + "\n\tString Length : " + stringLength);

    // if () {

    //     console.log();
    
    // }


}


const thing = ["cat", "kitty", "dog", "puppy"];
            
thing.forEach((things = thing.slice(",").map(whatToDo)) => {                 
    let parameterSingle = things;
    let stringDestination = whatToDo(parameterSingle);

}); 




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
