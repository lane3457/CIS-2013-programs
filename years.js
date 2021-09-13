var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter your age in years"));
     floatDays = floatAge*365.25;
     floatMonths = floatAge * 12;
     intWeeks = floatDays / 7;
     intFortnights = floatDays/ 14;
     alert("You are " + floatAge + " Years old. " + "Your age in Days is: " + floatDays + ". " + "You are " + intWeeks.toFixed(2) + " Weeks old." + " You are " + floatMonths + " Months old." + " You are " + intFortnights.toFixed(2) + " Fortnights old.");