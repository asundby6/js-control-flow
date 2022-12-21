let age = 3;

switch(age > 0 && age <= 20){
    case (age > 0 && age <= 1):
        console.log("You are an infant");
        break;  
    case (age > 1 && age <= 3):
        console.log("You are a toddler");
        break;
    case (age > 3 && age <= 5):
        console.log("You are a child");
        break;
    case (age > 5 && age <= 13):
        console.log("You are a preteen");
        break;
    case (age > 13 && age <=20):
        console.log("You are a young adult");
        break;
    default:
        console.log("Age doesn't fit the criteria");
        break;
    }
