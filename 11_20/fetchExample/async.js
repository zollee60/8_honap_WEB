async function hello() {
    return greeting = await Promise.resolve("Hello");
};

hello().then((value) => {
    value += " Ez egy kiegészítés";
    console.log(value);
});

console.log("Ez egy sima kiírás");