// long 1 (iterators)
 var words = ['hello', 'what', 'is', 'up', 'dude']
 var newWords = words.map (function (wordLength) {
   return wordLength.length
 })

 console.log(newWords)

 //  short 7 (iterator)
 words = ['pizza', 'bicycle', 'fast', 'one']
 var longestWords = words.reduce (function (x, y) {
   var longWord = (x.length < y.length) ? y : x
   return longWord
 })
 console.log(longestWords)

// short 8 (iterators)
 function words (arr, num) {
   var newlong = arr.filter (function (longName) {
     if (longName.length > num) {
       return longName
     }
   })
   return newlong
 }
 console.log(words(['DearGod', 'goat', 'barber', 'gorengpisang'], 5))
