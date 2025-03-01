const profile = {
    name: "Siddharth",
    city: "Bangalore",
    workExp : "1.8",
    isMarried : false
}

const greet =(profile)=>{

    const {name,city,workExp,isMarried}=profile
    return`hi i am ${name}  lives in ${city} having work experience of ${workExp}   }`
}