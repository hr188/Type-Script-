"use strict";
const fun = (m, n) => {
    console.log(m + n);
};
fun(2, 3);
const fun1 = (m, n, l) => {
    if (typeof l === "undefined")
        return m * n;
    return m * n * l;
};
const fun2 = (...m) => {
    return m;
};
const fun3 = (product) => {
    console.log(product);
};
const product1 = {
    name: "mac",
    stock: 50,
    price: 4987,
    photo: "jnovjr",
};
fun3(product1);
