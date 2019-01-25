function calculateCurrentGrade(){

    //grab the values from page
    var hwGrades = document.getElementById("homework").value;
    var cwGrades = document.getElementById("classwork").value;
    var asGrades = document.getElementById("assessment").value;
    var ptGrades = document.getElementById("participation").value;

    //call convertArrayStringToNumber
    var hwNumbers = convertArrayStringToNumber(hwGrades);
    var cwNumbers = convertArrayStringToNumber(cwGrades);
    var asNumbers = convertArrayStringToNumber(asGrades);
    var ptNumbers = convertArrayStringToNumber(ptGrades);


    //call average array
    var hwAverage = averageArray(hwNumbers);
    var cwAverage = averageArray(cwNumbers);
    var asAverage = averageArray(asNumbers);
    var ptAverage = averageArray(ptNumbers);
    console.log(hwAverage);
    console.log(cwAverage);
    console.log(asAverage);
    console.log(ptAverage);

    //get weights from page

    var hwWeight = parseInt(document.getElementById("homeworkWeight").value);
    var cwWeight = parseInt(document.getElementById("classworkWeight").value);
    var asWeight = parseInt(document.getElementById("assessmentWeight").value);
    var ptWeight = parseInt(document.getElementById("participationWeight").value);

    hwWeight = hwWeight /100;
    cwWeight = cwWeight /100;
    asWeight = asWeight /100;
    ptWeight = ptWeight /100;
    var finalWeight = 1- (hwWeight + cwWeight + asWeight + ptWeight);


    var hwGrade = hwAverage * hwWeight;
    var cwGrade = cwAverage * cwWeight;
    var asGrade = asAverage * asWeight;
    var ptGrade = ptAverage * ptWeight;

    var finalGrade = hwGrade + cwGrade + asGrade + ptGrade;
    finalGrade = finalGrade / (hwWeight + cwWeight + asWeight + ptWeight);
    document.getElementById("currentGrade").innerHTML = finalGrade;
    return [finalGrade,finalWeight];

}

function convertArrayStringToNumber(value){

    var arr = value.split(",");
    console.log(arr);

        for(var i = 0;i<arr.length;i++) {

            arr[i] = parseInt(arr[i]);
        }

    return arr;

}

function averageArray(arr){
    var average = 0;

    for(var i = 0;i<arr.length;i++){
        average += arr[i];


    }

    return average/ arr.length;
}












function calculateGradeNeeded(){
    var currentGrade = calculateCurrentGrade()[0];
    var finalWeight = calculateCurrentGrade()[1];
    var finalDesired = parseInt(document.getElementById("final").value);

    var currentWeight = 1 - (finalWeight/100);
    var weightedCurrent = currentWeight * currentGrade;
    var finalGradeRequired = (finalDesired - weightedCurrent) / (finalWeight/100);

    document.getElementById("finalGrade").innerHTML= finalGradeRequired + " % required to get a " + finalDesired;
    return finalGradeRequired;
}









/*function calculateFinal(){
    var finalWeight = parseInt(document.getElementById("finalWeight").value);

    var finalDesired = parseInt(document.getElementById("final").value);
    var currentWeight = 1 - (finalWeight/100);
    var weightedCurrent = currentGrade * currentWeight;
    var finalGradeRequired = (finalDesired - weightedCurrent) / (finalWeight/100);
    document.getElementById("finalCalc").style.marginBottom = "0px";
    document.getElementById("gradeRequired").innerHTML = finalGradeRequired.toString().slice(0,5) + "% required to get a " + finalDesired;
    console.log(finalGradeRequired);
        console.log(finalGradeRequired);








console.log(  parseInt("50") );



*/