

let myObj = {

    name: "Huzaifa",
    gender: "Male",
    contact: "03125648987",
    city: "Islamabad",
    hobbies: ["cricket", "study", {
        outdoorSports: ["BasketBall", "FootBall", "BaseBall"],
        indoorSports: ["PUBG", "LUDO", "GTA", "FREE FIRE"],
        contact: ['031265845', "021365269"]

    }, ["FB", "WA", "Insta", "Twitter", {

        NewoutdoorSports: ["BasketBall", "FootBall", "BaseBall"],
        NewindoorSports: ["PUBG", "LUDO", "GTA", "FREE FIRE"],
        Newcontact: ['031265845', "021365269"]


    }]]

}

console.log(myObj.name);

console.log(myObj.hobbies[2].outdoorSports[1]);
console.log(myObj.hobbies[3][4].Newcontact[1]);

