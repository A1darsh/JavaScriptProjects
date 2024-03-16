//question 1 string reversal
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

const originalString = "Adarsh";
const reversedString = reverseString(originalString);
//console.log(reversedString);

//question 2 annagram
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

const str1 = "listen";
const str2 = "silent";
//console.log(areAnagrams(str1, str2)); 

//question 3 Array Intersection

function arrayIntersection(arr1, arr2) {
    const set = new Set(arr1);
    return arr2.filter(item => set.has(item));
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
//console.log(arrayIntersection(array1, array2)); 


//question 4 Palindrome

function isPalindrome(str) {
    
    const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversedStr = alphanumericStr.split('').reverse().join('');
    return alphanumericStr === reversedStr;
}

const strr = "madam";
//console.log(isPalindrome(strr)); 


//question 5 Araay rotation
function rotateArrayRight(arr, positions) {
    if (arr.length === 0) {
        return arr;
    }

    const n = arr.length;
    const actualPositions = positions % n;
    return arr.slice(n - actualPositions).concat(arr.slice(0, n - actualPositions));
}

const array = [1, 2, 3, 4, 5];
const positions = 2;
//console.log(rotateArrayRight(array, positions));


//question 6 String Compression

function compressString(str) {
    let compressedStr = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressedStr += str[i] + count;
            count = 1;
        }
    }

    return compressedStr.length < str.length ? compressedStr : str;
}

const ans = "aabcccccaaa";
//console.log(compressString(ans)); 


//question 7 Array Sum

function findPairWithSum(arr, targetSum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                return [i, j];
            }
        }
    }
    return null;
}

const data = [2, 7, 11, 15];
const targetSum = 9;
//console.log(findPairWithSum(data, targetSum));

//question 8 Longest Substring Without Repeating Characters:
function longestSubstringWithoutRepeatingCharacters(str) {
    const charMap = {}; 
    let maxLength = 0;
    let start = 0; 

    for (let end = 0; end < str.length; end++) {
        const char = str[end];
        if (charMap[char] !== undefined && charMap[char] >= start) {
            start = charMap[char] + 1; 
        }
        charMap[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}
const inputString = "abcabcbb";
console.log(longestSubstringWithoutRepeatingCharacters(inputString));




