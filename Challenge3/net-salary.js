

let netSalary = (basicSalary + benefits)-(taxes+deductions);
//  CALCULATING PAYEE(TAX)
let Payee = 0;
function calculatePayee(grossSalary){
    let payee = 0;
    if(grossSalary <= 24000){
        payee =(0.1*(grossSalary));
    }else if(grossSalary > 24000  && grossSalary<32333){
        payee = (0.25*(grossSalary));
    }else if(grossSalary > 32334 && grossSalary <=500000){
        payee = (0.3*(grossSalary));
}else if(grossSalary> 500001 && grossSalary <=800000){
       payee = (3.25*(grossSalary));
}else if( grossSalary> 800000 )
    payee = (3.5*(grossSalary));
}
// CALCULATING NHIF DEDUCTIONS
let nhifDeductions =0;
function calculateNHIFdeduction(grossSalary){
    if(grossSalary<= 5999){
        nhifDeductions = 150;
    }else if (grossSalary > 6000 && grossSalary<=7999){
        nhifDeductions = 300;
}else if( grossSalary > 8000 && grossSalary <=11999){
     nhifDeductions = 400;
}else if(grossSalary > 12000 && grossSalary <= 14999){
    nhifDeductions =500;
}else if(grossSalary > 15000 && grossSalary <=19999){
    nhifDeductions = 600;
}else if( grossSalary > 20000 && grossSalary <=24999){
        nhifDeductions = 750;
     }else if(grossSalary > 25000 && grossSalary <= 29999){
       nhifDeductions =850;
   }else if(grossSalary > 30000 && grossSalary <=34999){
       nhifDeductions = 900;
   }else if( grossSalary > 35000 && grossSalary <=39999){
        nhifDeductions = 950 ;
   }else if(grossSalary >40000  && grossSalary <= 44999){
       nhifDeductions = 1000;
   }else if(grossSalary > 45000 && grossSalary <=49999){
       nhifDeductions = 1100;
   }else if( grossSalary > 50000  && grossSalary <=59999){
           nhifDeductions = 1200 ;
        }else if(grossSalary > 60000 && grossSalary <= 69999){
          nhifDeductions = 1300 ;
      }else if(grossSalary > 70000 && grossSalary <=79999){
          nhifDeductions = 1400 ;
        }else if(grossSalary >80000  && grossSalary <= 89999){
            nhifDeductions = 1500;
        }else if(grossSalary > 90000 && grossSalary <=99999){
            nhifDeductions = 1600;
        }else if(grossSalary > 100000){
            nhifDeductions= 1700;
        }         
        return nhifDeductions;
    }

        // CALCULATING NSSF DEDUCTIONS
        let nssfDeductions = 0;
 function calculateNSSFDeductions(grossSalary){
    if(grossSalary>7000){
        NSSFDeductions = 420;
    }else if(grossSalary > 70001 && grossSalary <= 36000){
         NSSFDeductions =grossSalary * 0.06;
    }
// CALCULATING GROSS SALARY
       let grossSalary = (netSalary + taxes + deductions);
        let grossSalary = 0;
        function calculategrossSalary(grossSalary){
            return grossSalary;
        }




// CALCULATING NET SALARY 
        let basicSalary = 0;
        let benefits = 0;
        let taxes = 0;
        let deductions = 0;
    
        let netSalary = (basicSalary + benefits)-(taxes+deductions);
        function calculatenetSalary(basicSalary, benefits, taxes, deductions){
            return netSalary;
        }
    } 
