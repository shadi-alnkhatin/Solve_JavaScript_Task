
{

    function stringToArray(str) {
        return str.split(' '); 
    }
    const input = "Orange Jordan";
    console.log(stringToArray(input)); // Output: ["Orange", "Jordan"]
    }
    
    {
        function HiddenThePhoneNumber(phone_number){
            return phone_number.slice(0,7).replace(/\d/g, '*')+phone_number.slice(7);
        }
        console.log(HiddenThePhoneNumber("0771010990"))
    }
    
    {
    
    
        function HiddenTheEmailaddress(email){
                return email
        }
    }
    
    {
        function FirstLetterToUpper(str){
           let words= str.split(' ');
           let ConvertedText="";
           for (let i = 0; i < words.length; i++) {
                ConvertedText+= words[i].charAt(0).toUpperCase()+ words[i].slice(1) + " ";
                
           }
           return ConvertedText;
        }
        console.log(FirstLetterToUpper("hi, im shadi"));
    }
    {
        function FlipTheNumber(num){
           let StrNum= String(num);
           let FlipedNum="";
           for (let i = StrNum.length; i >= 0; i--) {
                FlipedNum+=StrNum[i]; 
           }
           return FlipedNum;
        }
        console.log(FlipTheNumber(1234));
    }
    {
        function RemovesIndexedCharacter(str,index_num){
            return str.slice(0, index_num) + str.slice(index_num + 1);
        }
    }
    {
        function mergeStrings(str1, str2) {
            return str1.slice(1) + str2.slice(1);
        }
    }
    
    {
        function FirstLetterApeear(char,str){
            if(str[0]===char||str[str.length-1]===char)
                return true;
            else
                return false;
        }
        console.log(FirstLetterApeear('o',"orange"));
    }
    
    {
        function SpiltTheStringToWordsArray(str){
            let words=str.split(' ');
            return words;        
        }
        console.log(SpiltTheStringToWordsArray("Hi Im A Real Madrid Fan"));
    }
    
    {
        function ReordersTheCharactersAlphabetically(str){
            return str.split('').sort().join(',');
        }
        console.log(ReordersTheCharactersAlphabetically("SHADI"));
    }
    