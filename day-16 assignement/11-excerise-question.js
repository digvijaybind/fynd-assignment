class Project{

        constructor(id,name,client){

            this.id=id;
            this.name=name;
            this.client=client;
        }

        settitle(name){
            this.name=name;
        }
        changeid(id){

            this.id=id;
        }

        incrementid(){
            this.id++;
        }
}

const dbsPayroll=new Project(1001,'digvijay','nitu');

const digvijay=new Project(1002,'vijay','nina');


  dbsPayroll.changeid(1004);

  dbsPayroll.incrementid();
  digvijay.settitle('projecttitle');
console.log(dbsPayroll);
console.log(digvijay);