// var x =["a","b","c","d",1,2,3,4]


// function myforeach(list,cb){
// 	cb(list)

// }
// function callback(list){
// 	for (var i = 0 ; i < list.length ; i ++){
// 		console.log(list[i])
// 	}
// }

// myforeach(x,callback)
// console.log(x.forEach(function(element)){
// 	console.log(element)
// });
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i); 
      //console.log( "index:"+ i )   // execute callback
    }
  }
}

function actionWhenFound(index) {
  console.log("Found him! at index :" , index );
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound)