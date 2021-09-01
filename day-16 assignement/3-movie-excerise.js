class Movie{

      
       constructor(name,cast,yearOfRelease,boxOfficeCollection){

        this.name=name;

        this.cast=cast;
        this.yearOfRelease=yearOfRelease;
        this.boxOfficeCollection=boxOfficeCollection;

       }

       addtoCast(newmember){

          this.cast.push(newmember);
       }

       addTocollection(amount){

        this.boxOfficeCollection+=amount;
       }
      

}

const movie1=new Movie( 'ddl',['salman','hritik'], '2019','200cr' );

const movie2=new Movie('del',['ansh','diggu'],'2020','300cr');

movie1.addtoCast('anshu');
movie1.addTocollection('300cr');

movie2.addtoCast('digvijay');
movie2.addTocollection('400cr');

console.log(movie1);
console.log(movie2);
