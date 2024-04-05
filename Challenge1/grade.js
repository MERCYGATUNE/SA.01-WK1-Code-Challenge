function calculateGrade() {
	// Fetching input values
	let englishMarks = parseFloat(document.getElementById("englishMarks").value);
	let mathMarks = parseFloat(document.getElementById("mathMarks").value);
	let biologyMarks = parseFloat(document.getElementById("biologyMarks").value);
	let chemistryMarks = parseFloat(document.getElementById("chemistryMarks").value);
    let physicsMarks = parseFloat(document.getElementById("physicsMarks").value);
    let kiswahiliMarks = parseFloat(document.getElementById("kiswahiliMarks").value);

	// Validating input
	if (isNaN(englishMarks) || isNaN(mathMarks) || isNaN(biologyMarks) || isNaN(chemistryMarks) || isNaN(physicsMarks) || isNaN(kiswahiliMarks)) {
	  document.getElementById("result").innerHTML = "Please enter valid marks for all subjects.";
	  return;
	}

    // CALCULATING MARKS AND PERCENTAGE
    let totalMarks = englishMarks + mathMarks + biologyMarks + chemistryMarks + physicsMarks + kiswahiliMarks;
	let percentage = (totalMarks / 600) * 100;



//  FINDING THE GRADE
      let grade = "";
    
     if (percentage > 79){
         grade='A';
    }else if(percentage  >= 60){
        grade = 'B';
    }else if(percentage >= 49){
         grade ='C';
    }else if(percentage >= 40){
         grade ='D';
    }else {
         grade= 'E';
    } 
    
    
    // OUTPUTTING THE GRADE
    document.getElementById("result").innerHTML = "Total Marks: " + totalMarks.toFixed(2) + "<br>Percentage: " + percentage.toFixed(2) + "%" + "<br>Grade: " + grade;
  }