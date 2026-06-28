//your JS code here. If required.

function isLeapYear(year){
if(year%400 === 0) return true;
else if(year%100 === 0) return false;
else if(year%4 === 0) return true;
else return false;

}

function daysOfAYear(year){
	if(isLeapYear(year)){
return 366;
	}
	else{
return 365;
	}
}



daysOfAYear(2024);
