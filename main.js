const Marksheetdiv = document.querySelector('#Marksheet')
const studentname = prompt("What is your Name")
const fname = prompt("What is your Father Name")
const obt = parseFloat(prompt("What is your obtain marks"))
const total = parseFloat(prompt("What is you total marks"))
const per = (obt/total)*100 


let Grade ,Remarks ;

if(per <=100 && per >= 80){
    Grade = 'A+';
    Remarks = 'Excellent';
}

else if (per <= 79 && per >= 70){
    Grade = "A";
    Remarks = "Very Good"
}
else if (per <= 69 && per >= 60){
    Grade = "B"
    Remarks = "Good" 
}
else if (per <= 59 && per >= 50){
    Grade = "C";
    Remarks = "Satisfactory"
}
else if (per <= 49 && per >= 35){
    Grade = "D"
    Remarks = "Nice"
}
else{
    Grade = "F"
    Remarks = "Fail. Better Luck Next Time!"
}


document.write(per)
Marksheet.innerHTML =   `<p>Name::${studentname}</p>  
                         <p>Father Name:${fname}</p>
                         <p>Obtain Marks:${obt}</p>
                        <p>Total Marks:${total} 
                        <p>Grade:${Grade}</p> 
                        <p>${Remarks}</p>`