const aCar = {
    owner : "Joe Bloggs",
    type : {
        make : "Toyota",
        model : "Corolla",
        cc : "1.8"
    },
    registration : {
        year : "201",
        country : "WD",
        num : "1058"
    }
};

aCar.milage = 10000
aCar.colour = {exterior : "Red", interior : {texture: "leather", shade : "cream"}};

// console.log(aCar.owner);
console.log(aCar.owner + ' drives a ' + aCar.type.make);
console.log("Reg. = " + aCar.registration.year + "-" +aCar.registration.country + "-" + aCar.registration.num);
console.log("It is a " + aCar.colour.exterior + ", " + aCar.milage + " mileage, with " + aCar.colour.interior.texture + " interior");