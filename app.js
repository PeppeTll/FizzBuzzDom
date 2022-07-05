

const lista = document.querySelector('ul')

for ( let i = 0; i < 100; i++ ) {

    const NUMBER_BOX = Math.floor( Math.random() * + 100 ) +1;

    const li = document.createElement('li');
    

    if ( NUMBER_BOX % 15 === 0 ) {
        li.append(`FizzBuzz ${NUMBER_BOX}`);
        li.classList.add('ms_fizzbuzz');
    } else if ( NUMBER_BOX % 5 === 0 ) {
        li.append(`Buzz ${NUMBER_BOX}`);
        li.classList.add('ms_buzz');
    } else if ( NUMBER_BOX % 3 === 0 ) {
        li.append(`Fizz ${NUMBER_BOX}`);
        li.classList.add('ms_fizz');
    } else {
        li.classList.add('ms_box');
    console.log(li);
    li.append(NUMBER_BOX);
    }

    lista.append(li);

}