const aCar = {
    owner : "Joe Bloggs",
    address : "3 Walkers Lane",
    previous_owners : [
        {name: "Pat Smith", address : "1 Main Street"},
        {name : "Sheila Dywer", address : "2 High Street"}
    ],
    type : {
        make : "Toyota",
        model : "Corolla",
        cc : "1.8"
    },
    features : ['Parking Assist', 'Alarm', 'Tow-Bar'],
    registration : {
        year : "201",
        country : "WD",
        num : "1058"
    }
};

aCar.milage = 10000
aCar.colour = {exterior : "Red", interior : {texture: "leather", shade : "cream"}};

// console.log(aCar.owner);
// console.log(aCar.owner + ' drives a ' + aCar.type.make);
// console.log("Reg. = " + aCar.registration.year + "-" +aCar.registration.country + "-" + aCar.registration.num);
// console.log("It is a " + aCar.colour.exterior + ", " + aCar.milage + " mileage, with " + aCar.colour.interior.texture + " interior");
// console.log('First owner : ' + aCar.previous_owners[0].name + " - " + aCar.previous_owners[0].address);

for (let i = 0; i < aCar.features.length; i++){
    console.log(aCar.features[i]);
}

for (let i = 0; i < aCar.previous_owners.length; i++){
    console.log(aCar.previous_owners[i]);
}

for (let p in aCar.type){
    console.log(p.toUpperCase() + ' = ' + aCar.type[p])
}