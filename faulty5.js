function compareValues(a, b) {
  // BAD: Use '===' for comparison to avoid type coercion
  if (a == b) {
    console.log('Values are equal');
  } else {
    console.log('Values are not equal');
  }
}

compareValues('5', 5);  // This will log 'Values are equal' because '==' allows type coercion
