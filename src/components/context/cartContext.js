import {useState , useContext ,createContext } from 'react'


export const CartContext = createContext([])

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
const deleteProd = (id) => {
    setCartList(cartList.filter((producto) => producto.id !== id));
};

function vaciarCarrito(){
    setCartList([])
}

const sumarCantidad = (item, cantidad) => {
    const copia = [...cartList];
    copia.forEach((producto) => {
        producto.id === item.id && (producto.cantidad += cantidad);
    });
};
const total = () => {
    let count = 0;
    cartList.forEach((producto) => {
        count += producto.price * producto.cantidad;
    });
    return count;
};


console.log(cartList)
return(
    <CartContext.Provider value={{
        cartList,
        agregarAlCarrito,
        vaciarCarrito,
        deleteProd,
        sumarCantidad,
        total
    }}>
        {children}
    </CartContext.Provider>
)

}