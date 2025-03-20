function isLeap(year) {
    
    var divideBy4 = year % 4;
    var divideBy100 = year % 100;
    var divideBy400 = year % 400;
    var output;

    if (divideBy4 === 0) {
        
        if (divideBy100 === 0) {
            
            if (divideBy400 === 0) {
                
                output = "Leap year.";
                
            } else {
                
                output = "Not leap year.";
                
            }
            
        } else {
            
            output = "Leap year.";
            
        }

    } else {
        
        output = "Not leap year.";
    }
    
    return output;

}
