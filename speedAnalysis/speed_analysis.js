let testText = "The quick brown fox jumps over the lazy dog."
let startTime, endTime;


function startTest() {
    document.getElementById("inputText").value = testText;

    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;

}


function endTest() {
    endTime = new Date().getTime();

    document.getElementById("userInput").readOnly = true;

    var timeelapsed = (endTime - startTime) / 1000
    var userTypedText = document.getElementById("userInput").value;

    var typedwords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var ty = userTypedText.split(/\s+/);
    console.log(ty);


    var wpm = 0;

    if (timeelapsed !== 0 && !isNaN(typedwords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);

    }


    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";

    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}