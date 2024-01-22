const shortener = (title) => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]} ${splitedTitle[3]}`;
    return newTitle;
}

const isInCart = (state, product) => {
    const result = !!(state.selectedItems.find(item => item.id === product.id));
    return result;
}

const quantityCount = (state, product) => {
    const index = state.selectedItems.findIndex(item => item.id === product.id);
    if (index <= -1) {
        return false;
    } else {
        return state.selectedItems[index].quantity;
    }
}

export {shortener, isInCart, quantityCount};