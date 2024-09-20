function helloworld(){
    console.log('Hello')
}

const result = helloworld();

// class StringManager{

//     print(str:string){
//         console.log(str)
//     }

// }

// const test = new StringManager()
// test.print("hello")
/**
 * 
 * @param target : ref to the class
 * @param propertyKey : name of the method
 * @param descriptor : object that holds methods on the method 
 */

function split(target:any, propertyKey: string, descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value // the function to modify

    descriptor.value = function(...args:string[]){
         const [firstInArray] = args
         const firstModified = firstInArray.split('') 
         originalMethod.apply(this, [firstModified])
    } 
}

function reverse(target:any, propertyKey: string, descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value // the function to modify

    descriptor.value = function(...args:any[]){
         const [firstInArray] = args
         const firstModified = firstInArray.reverse() 
         originalMethod.apply(this, [firstModified])
    } 
}

function join(target:any, propertyKey: string, descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value // the function to modify

    descriptor.value = function(...args:any[]){
         const [firstInArray] = args
         const firstModified = firstInArray.join('') 
         originalMethod.apply(this, [firstModified])
    } 
}

class StringManager{
    @split
    @reverse
    @join
    print(str:string){
        console.log(str)
    }
}

export function printResult(){
    const test = new StringManager()
    test.print("hello")
}
