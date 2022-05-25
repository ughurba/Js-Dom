const  inputOne = document.querySelector('.inputOne')
const  inputTwo = document.querySelector('.inputTwo')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const sum = document.querySelector('.sum')


    let localMath = {
        '+':(a, b)  =>{

            sum.value =  a + b
            inputTwo.value=''
            inputOne.value=''
        } ,

        '-': (a, b)  =>{
            sum.value =  a - b
            inputTwo.value=''
            inputOne.value=''
        } ,
        "/": (a, b)  => {
            sum.value =  a / b
            inputTwo.value=''
            inputOne.value=''
        },
        "*": (a, b)  => {
            sum.value =  a * b
            inputTwo.value=''
            inputOne.value=''
        },
    }





plus.addEventListener('click', function (){
    localMath['+'](Number(inputOne.value),Number(inputTwo.value))

});

minus.addEventListener('click', function (){

    localMath['-'](inputOne.value,inputTwo.value)

})

multiply.addEventListener('click', function (){
    localMath['*'](inputOne.value,inputTwo.value)


})


divide.addEventListener('click', function (){
    localMath['/'](inputOne.value,inputTwo.value)

})