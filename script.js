// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const newDate = new Date()
const todayDay = newDate.getDay()
const dayName = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"]
// console.log("Today' is:",dayName[todayDay])
// console.log(`Today's Date: ${newDate}`)
let hours = newDate.getHours()
const min = newDate.getMinutes()
const sec = newDate.getSeconds()

const amORpm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12

// console.log(`Current time is : ${hours} ${amORpm} : ${min} : ${sec}`)
// console.log(hours)


// 4. Write a JavaScript function that returns  a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

let strings = "webmaster"
function sortOrder(strings) {
    // console.log(strings.split("").sort().join(""))
}
sortOrder(strings)

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

const newString = 'the quick brown fox'

function upperCase(newString) {
    var arr1 = newString.split(" ")
    var newarr1 = []
    for (var x = 0; x < arr1.length; x++) {
        newarr1.push(arr1[x].charAt(0).toUpperCase() + arr1[x].slice(1))
    }
    // console.log(newarr1)
    return newarr1.join(' ')
}
upperCase(newString)


// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

const ar = [1, 2, 3, 4, 5];

function findSecondLowestAndGreatest(ar) {
    const secondLowest = ar[1]
    const secondGreatestNumber = ar[ar.length - 2]

    return [secondLowest, secondGreatestNumber]
}

// console.log(findSecondLowestAndGreatest(ar))

// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

const names = ["Australia", "Germany", "United States of America"]

function longestName(names) {
    let longestName = ""

    for (const name of names) {
        if (name.length > longestName.length) {
            longestName = name
        }
    }
    return longestName
}
// console.log(longestName(names))


const beasts = "abacddbec";

function repeatedCharacter(beasts) {
    for (let i = 0; i < beasts.length; i++) {
        const chr = beasts[i]
        if(beasts.indexOf(chr) === i && beasts.lastIndexOf(chr) === i) {
            return chr
        }
    }
}

console.log(repeatedCharacter(beasts))


const header = document.querySelector('.sticky-header');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up, show the header
    header.style.top = '0';
  } else {
    // Scrolling down, hide the header
    header.style.top = '-100px';
  }
  prevScrollPos = currentScrollPos;
});