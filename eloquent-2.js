//LOOPING A TRIANGLE//
for (var i = "#"; i.length < 8; i += "#") {
	console.log(i);
}


//FIZZBUZZ//
for (var i=0; i<=100; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}


//CHESS BOARD//
var s='';

for (var i = 0; i < 8; i++) {
  
  for (var j = 0; j < 8; j++) {
    if ((i + j) % 2 === 0) {
    	s += ' ';
   	} 
   	else {
   		s += '#';
   	}
  }
  s += "\n";
}

console.log(s);