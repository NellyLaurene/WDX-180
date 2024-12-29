// INSERT YOUR CODE HERE
const wrapper = document.querySelector(".wrapper");

for(let i=0; i <= 101; i++){
    const newDiv = document.createElement('div');
    newDiv.textContent = `${i}`;
    newDiv.classList.add('card');

    if(isEven(i)){
        newDiv.classList.add('even');
    } else {
        newDiv.classList.add('odd');
    }

    if(isPrime(i)){
        newDiv.classList.add('prime');
    }

    wrapper.appendChild(newDiv);
}

function isPrime(num){
    if(num <= 1) return false;
    for(let i=2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}

function isEven(num){
    if(num % 2 === 0) return true;
    return false;
}

