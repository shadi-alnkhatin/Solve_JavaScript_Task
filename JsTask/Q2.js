//Q2
{
    let str ="Welcome to Orange";
    console.log(str.toUpperCase());
    console.log((str.substring(8,11)).toUpperCase());
    console.log(str.replace("Welcome","Hello"));
    console.log(str.length);
    console.log(str.concat(" Jordan"));
    console.log(str.replace("Orange","'Orange'"));
    }
    
    {
        let str="cactucs";
        const firstLetter = str[0];
        const regex = new RegExp(firstLetter, 'g'); 
        const result = firstLetter + str.slice(1).replace(regex, '*'); 
        console.log(result);
    }