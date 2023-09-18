type shoppingCartProps = {
    cartopen:boolean    
}

export function ShoppingCart({cartopen}:shoppingCartProps){
    return (<>
                {cartopen && <h1>something</h1>}
            </>)
}