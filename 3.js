// 4. Write a program to get total vowel count from String ?

// input amarakbar

function getTotalVowelCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const totalVowelCount = {};
  str
    .toLowerCase()
    .split("")
    .forEach((strItem) => {
      vowels.forEach((vowel) => {
        if (vowel === strItem) {
          if (!totalVowelCount[vowel]) {
            totalVowelCount[vowel] = 1;
          } else {
            totalVowelCount[vowel]++;
          }
        }
      });
    });

  return totalVowelCount;
}

console.log(getTotalVowelCount("abdsdsae"));
