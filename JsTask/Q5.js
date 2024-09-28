
{
    function CheckTheAge(birthyear){
        let currentYear = new Date().getFullYear();
        let age = currentYear-birthyear;

        if(age>30)
        {
            console.log("You are not eligible. You may join other programs.");
        }
        else if(age>=18 && age<=30)
        {
            console.log("You are eligible. Start your application");
        }
        else if(age<18)
        {
            console.log("You may join the kids' program");
        }
    }

    console.log(CheckTheAge(2002));
}

{
    //SwitchTheLetters  takes a string and switches the letters' case from upper to lower
    function SwitchTheLetters(str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i].toUpperCase()) {
                result += str[i].toLowerCase();
            } else {
                result += str[i].toUpperCase();
            }
        }
        return result;
    }
    console.log(SwitchTheLetters("ShAdI"));
}
{
    // a function that removes a specific element in an array
    function removeElement(arr, element) {
        return arr.filter(item => item !== element);
    }

}
{
    //  Write a function that checks if a number is odd or even.  
    function OddOrEven(num){
        if(num%2==0)
        {
            return "Even";
        }
        else{
            return "Odd";
        }
    }
    console.log(OddOrEven(4));
}
