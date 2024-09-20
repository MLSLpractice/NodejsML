function split(str){
    return str.split('')
}

function reverse(arr){
    return arr.reverse()
}

function join(arr){
    return arr.join('')
}

function compose(...functions){
    return (str)=>{
       functions.reverse().forEach((func)=> str = func(str))
       //return functions.reduceRight((acc, func) => func(acc), str);
       return str
    }
}
const composedFunction = compose(join, reverse, split)


export function printResult(){
    console.log(composedFunction('hello'))
}
