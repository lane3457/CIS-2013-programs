var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter your age in years"));
     floatDays = floatAge*365.25; // multiplying users age by 365.25 to get how many days old they are
     floatMonths = floatAge * 12; // multilpying age by 12 to get age in months
     intWeeks = floatDays / 7; // dividing how many days old they are by 7 to calculate how many weeks old they are
     intFortnights = floatDays/ 14; // dividing the users age in days by 14 to calculate their age expressed in fortnights
     alert("You are " + floatAge + " Years old. " + "Your age in Days is: " + floatDays + ". " + "You are " + intWeeks.toFixed(2) + " Weeks old." + " You are " + floatMonths + " Months old." + " You are " + intFortnights.toFixed(2) + " Fortnights old.");
