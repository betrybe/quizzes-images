const valorInicial = 0;
const totalCart = cart.reduce((accumulator, product) => accumulator + product.price * product.quantity, valorInicial);
