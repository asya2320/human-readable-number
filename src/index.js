module.exports = function toReadable(number) {
    let result = "";
    let str = String(number);
    let length = str.length;
    if (number==0){
        return 'zero';
    }
    while (length > 0) {
        switch (length) {
            case 3: {
                switch (str[0]) {
                    case "1":
                        result += "one hundred";
                        break;
                    case "2":
                        result += "two hundred";
                        break;
                    case "3":
                        result += "three hundred";
                        break;
                    case "4":
                        result += "four hundred";
                        break;
                    case "5":
                        result += "five hundred";
                        break;
                    case "6":
                        result += "six hundred";
                        break;
                    case "7":
                        result += "seven hundred";
                        break;
                    case "8":
                        result += "eight hundred";
                        break;
                    case "9":
                        result += "nine hundred";
                        break;
                }
                break;
            }
            case 2: {
                switch (str[0]) {
                    case "0":
                        result=result.slice(0,result.length-1);
                        break;
                    case "1": {
                        switch (str[1]) {
                            case "0":
                                result += "ten";
                                str = str.slice(1, str.length);
                                length = str.length;
                                break;
                            case "1":
                                result += "eleven";
                                str = str.slice(1, str.length);
                                length = str.length;
                                break;
                            case "2":
                                result += "twelve";
                                str = str.slice(1, str.length);
                                length = str.length;
                                break;
                            case "3":
                                result += "thirteen";
                                str = str.slice(1, str.length);
                                length = str.length;
                                break;
                            case "4":
                                result += "fourteen";
                                str = str.slice(1, str.length);
                                length = str.length;
                                break;
                            case "5":
                                result += "fifteen";
                                str = str.slice(1, str.length);
                                length = str.length;
                                break;
                            case "6":
                                result += "sixteen";
                                str = str.slice(1, str.length);
                                length = str.length;
                                break;
                            case "7":
                                result += "seventeen";
                                str = str.slice(1, str.length);
                                length = str.length;
                                break;
                            case "8":
                                result += "eighteen";
                                str = str.slice(1, str.length);
                                length = str.length;
                                break;
                            case "9":
                                result += "nineteen";
                                str = str.slice(1, str.length);
                                length = str.length-1;
                                break;
                            // default:
                            //     str = str.slice(1, str.length);
                            //     length = str.length;
                        }
                        break;
                    }
                    case "2":
                        result += "twenty";
                        break;
                    case "3":
                        result += "thirty";
                        break;
                    case "4":
                        result += "forty";
                        break;
                    case "5":
                        result += "fifty";
                        break;
                    case "6":
                        result += "sixty";
                        break;
                    case "7":
                        result += "seventy";
                        break;
                    case "8":
                        result += "eighty";
                        break;
                    case "9":
                        result += "ninety";
                        break;
                }
                break;
            }
            case 1: {
                switch (str[0]) {
                    case "0":
                        result= result.slice(0,result.length);
                        break;
                    case "1":
                        result += "one";
                        break;
                    case "2":
                        result += "two";
                        break;
                    case "3":
                        result += "three";
                        break;
                    case "4":
                        result += "four";
                        break;
                    case "5":
                        result += "five";
                        break;
                    case "6":
                        result += "six";
                        break;
                    case "7":
                        result += "seven";
                        break;
                    case "8":
                        result += "eight";
                        break;
                    case "9":
                        result += "nine";
                        break;
                }
                break;
            }
        }
        
        if(number%10!=0&&number%100!=0&&str.length>1){
            result+=' ';
        }else if(number%10==0&&str.length==3){
            result+=' ';
        }
        str = str.slice(1, str.length)
        length = str.length;
    }
    return result;
};
