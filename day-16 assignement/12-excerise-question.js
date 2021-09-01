class Employee{

    constructor(id,name,role,department){

        this.id=id;
        this.name=name;
        this.role=role;
        this.department=department;

    }


    incrementid(){
        this.id++;
    }

    changename(name){
        this.name=name;
    }


changerole(role){
    this.role=role;
}

changedepartment(department){
  this.department=department;
}

      
}


const digvijay=new Employee(2004,'digvijay','software engineer','CMPN');

const vijay=new Employee(2005,'vijay','IT engineer', 'IT');



digvijay. incrementid();
vijay. incrementid();
console.log(digvijay);

console.log(vijay);