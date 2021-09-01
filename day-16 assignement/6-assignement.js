const iPhone11 ={


    name:'iphone11',
    manufacturer:'apple',
    price:466,
    specs:{
        
        
        color:'white',
        memory:{
            value:128,
            unit:'mb'
        },
        cameras:{
            font:'12 MPP wide',
             rear:'12 MP ultra wide'
        },

        availablecolor:['black', 'green' , 'purple' , 'red']
    }

}

const deepcopy ={

        name:'iphone14',
        manufacturer:'apple',
        price:550,
        specs:{


            ...iPhone11
        }



}

console.log(deepcopy);
