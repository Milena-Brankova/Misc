/* -------- LOCKERS problem ----------------------*/
function solveLockersRiddle(){

var locker = new Array();
var changes = new Array();
var numOpenLockers = 0;

// First student opens all	
for(var i = 1; i < 101; i++){
	locker[i] = 1;
	changes[i] = 0;
	numOpenLockers++;	
}

// Next students.
for(var i = 2; i < 101; i++){
	for(var j = 1; j< 101; j++) {
		if(j % i == 0) {
			if(locker[j]==0){
				locker[j]=1;
				changes[j]++;
				numOpenLockers++; //  I printed this for each locker
			} else {
				numOpenLockers--;
				locker[j]=0;
				changes[j]++;	
			} 
		}	
	}	
}

var maxChanges = 0; // Was printed before

var outSolution = "";
/*
outSolution += '<p><strong>List of the open lockers:</strong></p>';

for(var i = 1; i < 101; i++){
	if (locker[i]==1) {
		outSolution += 'Locker '+ i + ' is open! ' + '<br>';
	}
}
*/
document.getElementById('container').innerHTML += outSolution;

document.getElementById('btn').style.visibility = "hidden"; 
document.getElementById('outdiv').style.visibility = "visible";

var outTable = '';
outTable += '<h3>Total number of open lockers: ' + numOpenLockers + '</h3>';
outTable += '<table>';
for(var i = 0; i < 10; i++){
	outTable +=  '<tr>';
	for (var j = 1; j < 11; j++) {
		if (locker[i*10 + j]==1) {
			outTable +=  '<td class="open">' + (i*10 + j) + '</td>';
		} else {
			outTable +=  '<td class="closed">-</td>';
		}
	}
	outTable +=  '</tr>';
}
outTable +=  '</table>';
document.getElementById('outdiv').innerHTML += outTable;
} // END OF function solveLockersRiddle()