// case 1

// data type restriction is not there
// loose data type behavior
var a = 90;
 a ='Sid';
 a= true;

 // value dynamically chaange
 console.log(a);

 // case 2

 //const profile ={};
 const profile = {
    name: "John Doe",
    age: 30,
    details: {
      city: "New York",
      country: "USA",
      hobbies: ["Reading", "Cycling", "Traveling"],
    },
    contact: {
      email: "johndoe@example.com",
      phone: "123-456-7890",
    },
    isActive: true,
  };
 console.log("City" , profile.details.city);
 console.log("Contact" , profile.contact.email);


 
