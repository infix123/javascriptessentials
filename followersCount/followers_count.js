let count =0;

function  increaseCount(){
    count++;
    displaycount();
    checkCountValue();

}

function displaycount(){
    document.getElementById('countDisplay').innerHTML = count;
}

function checkCountValue(){
    if (count === 10){
        alert ("Your instagram post gained 10 followers! Congratulatios");
    }else if(count === 20){
        alert ("your instagram post gained 20 followers! Keep it up");
        }
 }
