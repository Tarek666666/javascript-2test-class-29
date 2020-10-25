/* What's the output for this snippet? Is the output deterministic (always the same) or might it depend on the browser we run this in? 
Explain your answer in less than 150 words.
 (The 'yes or no' answer doesn't really matter to us, the explanation why is the important part)*/


 function test() {
    console.log('one');
    setTimeout(function() {
        console.log('two');
        setTimeout(function() {
            console.log('three');
        }, 0);
    }, 1000);
    setTimeout(function() {
        console.log('four');
        setTimeout(function() { 
            console.log('five');
        }, 1000);
    }, 0);
    console.log('six');
}
test();

// when we call this function, first thing it will print one from line 7, after it will go to settimeout line 8 , this has delay of 1000 ms, so function
// continue to line 14 also it finds another setitmeout with delay of 0 ms so it continues to line 20 here it will print six immediately
// then it will go back to the second settimeout which has delay of 0 ms , here it prints first 'four' from line 15 cause this line has the
// delay of 0 ms , after 1000 ms its time to fire line 8 it will print tow cause 1000 ms already is passed
// then it will fire the other settimeout which has no dealy on line 10 and prints 'three'. then it continues to line 14 and fire the
// settimeout from line 16 which has also delay of 1000ms.

// the output will be the same on all browsers who suppout settimeout function >> otherwise it will be different.