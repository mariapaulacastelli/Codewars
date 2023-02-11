// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  const replace = s.replace(/!/g, '');
  return replace;
}
