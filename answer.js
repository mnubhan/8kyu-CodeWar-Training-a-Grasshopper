function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}

function getGrade (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}

function getGrade(...scores) {
  let average = scores.reduce((a, b) => a + b) / scores.length
  
  if (average >= 90) return 'A'
  else if (average >= 80) return 'B'
  else if (average >= 70) return 'C'
  else if (average >= 60) return 'D'
  else return 'F'
}

function getGrade (s1, s2, s3) {
  var averageScore = Math.round((s1+s2+s3)/3)
  if (averageScore >= 90){
    grade ="A"
  }
  else if( averageScore >= 80){
    grade = "B"
  }
    else if( averageScore >= 70){
      grade = "C"
  }
    else if( averageScore >= 60 ){
      grade = "D"
  }
    else{
      grade ="F"
  }
  return grade
}
