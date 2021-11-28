console.log(`My name is jony`);

const inputYear = '1991';

console.log(`${inputYear}`);

function longe(strs) {
    let ooutout = "";
    let firstElement = ""
    for (let i = 0; i < strs.length; i++) {
        const element = strs[i]; // flow
        firstElement = strs[0]; // flower
        for (let j = 0; j < element.length; j++) {
            if (firstElement.charAt(j) === element.charAt(j)) {

                if (firstElement.charAt(j) !== element.charAt(j)) {
                    break;
                    
                }
                ooutout += firstElement.charAt(j);
                console.log(ooutout);
                
                
            }
            
        }

       
        
        
        // console.log(element);
        
    }

    if (ooutout!= "") {
        return ooutout;
        
    }else{
        return "";
    }
    
}

console.log(longe(["flower","flow","flight"]));

