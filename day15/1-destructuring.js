//assignemnt 1

const iPhone11 ={
  
    name:'iPhone11',
    manufacturer:'apple',
    price:699,
    specs:{

        color:'White',
        memory:{
            value:128,
            unit:'MB'
        },
        cameras:{
            fonts:'12 MP Wide',
            rear:'12 MP Wide'
        },

        availableColors:['black','green','yellow']
    },
    calculateDiscountedPrice:function(percentage){
            return this,price*(100-percentage)/100;

    }
}

const {name,
    manufacturer: brand,specs:{memory:{ value:ram },cameras:{rear:rearCamera}, availableColors:secondColor},...optional } = iPhone11;


