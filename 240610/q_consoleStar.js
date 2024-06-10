// 1
// *
// **
// ***
// ****
// *****
function increaseStar(a){
for(let i = 1; i < 6; i++ ){
    console.log("*".repeat(i))
}}
increaseStar(5);

for(let i = 0; i < 5; i++ ){
    console.log("*".repeat(i + 1));
}
// 2
// *****
// ****
// ***
// **
// *
function decreaseStar(a){
for(let i = 0; i < 5; i-- ){
    console.log("*".repeat(i))
}}
decreaseStar(5);
