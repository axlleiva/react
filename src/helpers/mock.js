export const array=[{
    id:'uno',
    title:'Pikachu',
    description:'electrico',
    price:100,
    pictureUrl:'../../public/logopokemon.jfif'},{
    id:'dos',
    title:'Charmander',
    description:'Fuego',
    price:100,
    pictureUrl:'../../../public/logo192.png'
    }
]

export const getfetch = new Promise ((resolve, reject)=>{
    let condicion = true
    if(condicion){
        setTimeout(()=>{resolve(array)},3000)
        
    }else{
        reject("error")
    }
})

