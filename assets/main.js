const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]


/* Katas 1
 *
 Display the numbers from 1 to 20. (1, 2, 3, …,19, 20) */

 var heading_L3 = document.createElement("h3")
 document.querySelector(".katas-1").append("Katas 1")
 for(let i = 1; i <= 20; i++){
    var number = document.createTextNode(i + ", ")
     if(i === 20){
        var number = document.createTextNode(i)
     }
     heading_L3.appendChild(number)
     document.querySelector(".katas-1").appendChild(heading_L3)
 }


/* Katas 2
Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20) */
var heading_L3 = document.createElement("h3")
document.querySelector(".katas-2").append("Katas 2")
for(let i = 2; i <= 20; i+=2){
   var number = document.createTextNode(i + ", ")
    if(i === 20){
       var number = document.createTextNode(i)
    }
    heading_L3.appendChild(number)
    document.querySelector(".katas-2").appendChild(heading_L3)
}

/* Katas 3
Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19) */
var heading_L3 = document.createElement("h3")
document.querySelector(".katas-3").append("Katas 3")
for(let i = 1; i <= 20; i+=2){
   var number = document.createTextNode(i + ", ")
    if(i === 19){
       var number = document.createTextNode(i)
    }
    heading_L3.appendChild(number)
    document.querySelector(".katas-3").appendChild(heading_L3)
}

/* Katas 4
Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100) */
var heading_L3 = document.createElement("h3")
document.querySelector(".katas-4").append("Katas 4")
for(let i = 5; i <= 100; i+=5){
   var number = document.createTextNode(i + ", ")
    if(i === 100){
       var number = document.createTextNode(i)
    }
    heading_L3.appendChild(number)
    document.querySelector(".katas-4").appendChild(heading_L3)
}

/* Katas 5
Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100) */
var heading_L3 = document.createElement("h3")
document.querySelector(".katas-5").append("Katas 5")
for(let i = 1; (i*i) <= 100; i++){
    var number = document.createTextNode((i*i) + ", ")
     if(i === 100){
        var number = document.createTextNode(i*i)
     }
     heading_L3.appendChild(number)
     document.querySelector(".katas-5").appendChild(heading_L3)
 }

/* Katas 6
Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1) */
var heading_L3 = document.createElement("h3")
document.querySelector(".katas-6").append("Katas 6")
for(let i = 20; i >= 1; i--){
    var number = document.createTextNode(i + ", ")
     if(i === 1){
        var number = document.createTextNode(i)
     }
     heading_L3.appendChild(number)
     document.querySelector(".katas-6").appendChild(heading_L3)
 }

/* Katas 7
Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)*/
var heading_L3 = document.createElement("h3")
document.querySelector(".katas-7").append("Katas 7")
for(let i = 20; i >= 1; i-=2){
   var number = document.createTextNode(i + ", ")
    if(i === 2){
       var number = document.createTextNode(i)
    }
    heading_L3.appendChild(number)
    document.querySelector(".katas-7").appendChild(heading_L3)
}

/* Katas 8
Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1) */
var heading_L3 = document.createElement("h3")
document.querySelector(".katas-8").append("Katas 8")
for(let i = 19; i >= 1; i-=2){
   var number = document.createTextNode(i + ", ")
    if(i === 1){
       var number = document.createTextNode(i)
    }
    heading_L3.appendChild(number)
    document.querySelector(".katas-8").appendChild(heading_L3)
}

/* Katas 9
Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5) */
var heading_L3 = document.createElement("h3")
document.querySelector(".katas-9").append("Katas 9")
for(let i = 100; i >= 5; i-=5){
   var number = document.createTextNode(i + ", ")
    if(i === 5){
       var number = document.createTextNode(i)
    }
    heading_L3.appendChild(number)
    document.querySelector(".katas-9").appendChild(heading_L3)
}

/* Katas 10
Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1) */
var heading_L3 = document.createElement("h3")
document.querySelector(".katas-10").append("Katas 10")
for(let i = 10; i >= 1; i--){
    var number = document.createTextNode((i*i) + ", ")
     if(i === 1){
        var number = document.createTextNode(i*i)
     }
     heading_L3.appendChild(number)
     document.querySelector(".katas-10").appendChild(heading_L3)
 }

/* Katas 11
Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472) */
var heading_L3 = document.createElement("h3")
document.querySelector(".katas-11").append("Katas 11")
for(let i = 0; i < sampleArray.length; i++){
    var number = document.createTextNode(sampleArray[i] + ", ")
     if(i == sampleArray.length-1){
        var number = document.createTextNode(sampleArray[i])
     }
     heading_L3.appendChild(number)
     document.querySelector(".katas-11").appendChild(heading_L3)
 }

/* Katas 12
Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472) */
var heading_L3 = document.createElement("h3")
document.querySelector(".katas-12").append("Katas 12")
for(let i = 0; i < sampleArray.length; i++){
    if(sampleArray[i] % 2 == 0){
        var number = document.createTextNode(sampleArray[i] + ", ")
    }
     heading_L3.appendChild(number)
     document.querySelector(".katas-12").appendChild(heading_L3)
 }

/* Katas 13
Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535) */
var heading_L3 = document.createElement("h3")
document.querySelector(".katas-13").append("Katas 13")
for(let i = 0; i < sampleArray.length; i++){
    if(sampleArray[i] % 2 == 1){
        var number = document.createTextNode(sampleArray[i] + ", ")
    }
     heading_L3.appendChild(number)
     document.querySelector(".katas-13").appendChild(heading_L3)
 }

/* Katas 14
Display the square of each element in sampleArray. (219961, 570025, …, 222784) */
var heading_L3 = document.createElement("h3")
document.querySelector(".katas-14").append("Katas 14")
for(let i = 0; i < sampleArray.length; i++){
    var number = document.createTextNode(sampleArray[i]*sampleArray[i] + ", ")
    if(i == sampleArray.length-1){
        var number = document.createTextNode(sampleArray[i]*sampleArray[i])
    }
     heading_L3.appendChild(number)
     document.querySelector(".katas-14").appendChild(heading_L3)
 }


/* Katas 15
Display the sum of all the numbers from 1 to 20. */
var heading_L3 = document.createElement("h3")
document.querySelector(".katas-15").append("Katas 15")
var sum = 0
for(let i = 1; i <= 20; i++){
    sum+=i
}
var number = document.createTextNode( sum)
heading_L3.appendChild(number)
document.querySelector(".katas-15").appendChild(heading_L3)

/* Katas 16
Display the sum of all the elements in sampleArray. */
var heading_L3 = document.createElement("h3")
document.querySelector(".katas-16").append("Katas 16")
var sum = 0
for(let i = 0; i < sampleArray.length; i++){
    sum+=sampleArray[i]
}
var number = document.createTextNode(sum)
heading_L3.appendChild(number)
document.querySelector(".katas-16").appendChild(heading_L3)

/* Katas 17
Display the smallest element in sampleArray. */
var heading_L3 = document.createElement("h3")
document.querySelector(".katas-17").append("Katas 17")
var leastNumber = sampleArray[0]
for(let i = 1; i < sampleArray.length; i++){
    if(sampleArray[i] < leastNumber){
        leastNumber = sampleArray[i]
    }
}
var number = document.createTextNode(leastNumber)
heading_L3.appendChild(number)
document.querySelector(".katas-17").appendChild(heading_L3)

/* Katas 18
Display the largest element in sampleArray. */
var heading_L3 = document.createElement("h3")
document.querySelector(".katas-18").append("Katas 18")
var largestNumber = sampleArray[0]
for(let i = 1; i < sampleArray.length; i++){
    if(sampleArray[i] > largestNumber){
        largestNumber = sampleArray[i]
    }
}
var number = document.createTextNode(largestNumber)
heading_L3.appendChild(number)
document.querySelector(".katas-18").appendChild(heading_L3)


/* Display 20 solid gray rectangles, each 20px high and 100px wide. */
var greyRectangle = document.createElement("canvas")
var ctx = greyRectangle.getContext("2d")
ctx.fillRect(50, 50, 20, 100)
/* Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above). */

/* Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray. */

/* As in #21, but alternate colors so that every other rectangle is red. */

/* As in #21, but color the rectangles with even widths red. */