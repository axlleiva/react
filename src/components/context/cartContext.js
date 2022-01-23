import {useState , useContext ,createContext } from 'react'


const CartContext = createContext([])

export function useCartContext(){
    return useContext(CartContext)
}

//creacion del componente qie maneja el contexto

export const CartContextProvider =({children}) => {
// estados y funciones globales 
const [cartList , setCartList]=useState ([])

function agregarAlCarrito(items){
    const indice=cartList.findIndex(i => i.id===items.id)

    if(indice>-1){
        const vieja=cartList[indice].cantidad

        let nueva =vieja + items.cantidad

        cartList[indice].cantidad=nueva
        let arrAux =[...cartList]
        setCartList(arrAux)
    }else{
        setCartList([...cartList , items])
    }
}

function vaciarCarrito(){
    setCartList([])
}
console.log(cartList)
return(
    <CartContext.Provider value={{
        cartList,
        agregarAlCarrito,
        vaciarCarrito
    }}>
        {children}
    </CartContext.Provider>
)

}