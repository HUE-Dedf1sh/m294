function fizzbuzz(num){
    let result = "";
    for(let i = 1; i<=100; i++)
    if(num % 3 == 0){
        if(num % 5 == 0){
            result == "FizzBuzz"
        }else{
            result == "Fizz"
        }
    }else{
        result == "Buzz"
    }
}