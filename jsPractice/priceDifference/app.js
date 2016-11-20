// Log simple directions to the console
console.log('Use the priceDifference(originalVal, newVal) function to ' +
  'calculate different prices and percentages. Example: priceDifference(1, 11);'
);

function priceDifference(originalVal, newVal) {
  // Change a to an if needed
  var article = 'a ';

  // Write condition that logs error to console
  if (isNaN(originalVal) || isNaN(newVal)) {
    return console.log('Error: please, provide only numeric data.')
  } else if (originalVal <= 0) {
    return console.log('Error: to calculate percentage difference,' + 
      ' the original value needs to be greater than zero.'
    );
  }

  if (newVal > originalVal) {
    var increase = newVal - originalVal;

    var perctInc = (increase / originalVal) * 100;

    if (perctInc.toString().charAt(0) == 8) {
      article = 'an ';
    }

    // After determining perctInc, fix decimals if condition true
    if (increase % 1 != 0) {
      increase = increase.toFixed(2);
    }
    // Log results to console, fixing percentage to two decimal places
    console.log('The original value (' + '$' + originalVal + ') has increased by ' +
      '$' + increase + ', ' + article + perctInc.toFixed(2) + '% increase.'
    );
  } else {
    var decrease = originalVal - newVal;

    var perctDec = (decrease / originalVal) * 100;

    if (perctDec.toString().charAt(0) == 8) {
      article = 'an ';
    }

    // After determining perctDec, fix decimals if condition true
    if (decrease % 1 != 0) {
      decrease = decrease.toFixed(2);
    }
    // Log results to console, fixing percentage to two decimal places
    console.log('The original price (' + '$' + originalVal + ') has decreased by ' +
      '$' + decrease + ', ' + article + perctDec.toFixed(2) + '% decrease.'
    );
  }
}
