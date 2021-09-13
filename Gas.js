var floatMile, floatGallons, floatMpg;
     floatMile = parseFloat(prompt("Enter miles driven"));
     floatGallons = parseFloat(prompt("Enter gallons of gas used"));
     floatMpg = parseFloat(floatMile/floatGallons);
     alert("Miles per gallon = " + floatMpg.toFixed(2));