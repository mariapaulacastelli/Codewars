// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
  const userName = name.toUpperCase();
  console.log(userName);
  const nameSplit = userName.split(' ');
  const firstName = nameSplit[0];
  const secondName = nameSplit[1];
  return `${firstName.charAt(0)}.${secondName.charAt(0)}`;
}

abbrevName('Sam Harris');
