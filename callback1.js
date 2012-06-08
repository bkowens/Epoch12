function whoopsy(yesOrNo) {
        console.log(yesOrNo ? "Booya!" : "Nope try again!");
    };

function doSomething(param1, param2, callback, callback2) {
    if (callback.name == 'ducky') {
        console.log(callback.name);
        callback(true);
	    callback2(false);
    } else {
      console.log("Things are NOT ducky! THey are in fact:" + callback.name);
    }  
}

doSomething('biff', 'bonk', whoopsy, whoopsy);