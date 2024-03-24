// Prompt the user to input student marks
let grade = prompt('Input student marks(0-100)'||speed===null);
//  DECLARING A FUNCTION
function studentGrade(score){
    if (score >=0 && score <= 100){
    return grade ='invalid';
    }else  if (score > 79){
        return grade='A';
    }else if(score >= 60 && score <= 79){
        return grade = 'B';
    }else if(score >= 49 && score <= 59){
        return grade ='C';
    }else if(score >= 40 && score <= 49){
        return grade ='D'
    }else if(score < 40){
        return grade= 'E';
    }
    return grade;
    }
    // OUTPUTTING THE GRADE
 console.log(studentGrade(score))
