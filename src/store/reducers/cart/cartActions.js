export const agregarItem= item => ({

    type : 'ADD_ITEM',
    payload : item
    
});
export const eliminarItem= id => ({

    type : 'REMOVE_ITEM',
    payload : id
    
});