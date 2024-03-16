//question 1
let user = {}; 
user.name = 'John'; 
user.surname = 'Smith'; 
user.name = 'Pete'; 
delete user.name; 

//question 2
function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }
  
  let schedule = {};
  //console.log( isEmpty(schedule) ); 
  
  schedule["8:30"] = "get up";
  //console.log( isEmpty(schedule) ); 


  //question 3 
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  //console.log(sum); 
  

  //question 4

  let calculator = {
    read() {
      this.a = Number(prompt('Enter the first value:', 0));
      this.b = Number(prompt('Enter the second value:', 0));
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
  
  