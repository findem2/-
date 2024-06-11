// 1
// *
// **
// ***
// ****
// *****
function increaseStar(){
    for(let i = 0; i < 5; i++ ){
        // console.log("*".repeat(i + 1))
        let temp = "";
        for(let j = 0; j <= i; j++){
            temp += "*";
        }
        console.log(temp);
    }
}
increaseStar();

// for(let i = 0; i < 5; i++ ){
//     console.log("*".repeat(i + 1));
// }
// 2
// *****
// ****
// ***
// **
// *
function decreaseStar(){
    for(let i = 5; i > 0; i-- ){
        console.log("*".repeat(i))
        let temp = "";
        for(let j = 0; j < i; j++){
            temp += "*";
        }
        console.log(temp);
    }
    console.log("ab".repeat(3));
}
decreaseStar();
