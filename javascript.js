let state = {Batteries: false, Remote: false, ScreenUp: false, ProjectorOn: false}
console.log(state);

function visitLocation(locationName, hotspotId) {
    if (locationName === 'Screen') {
        if (state.ProjectorOn === true && state.ScreenUp === true) {
            locationName = 'Screen-On-Up'
        } else if (state.ProjectorOn === true) {
            locationName = 'Screen-On'
        } else if (state.ScreenUp === true) {
            locationName = 'Screen-Up'
        }
    }
    document.getElementById(hotspotId).classList.add('visited');
    document.getElementById('selection-screen').classList.add('hidden');
    document.getElementById(locationName).classList.remove('hidden');
}

function returnToSelection(puzzleId) {
    document.getElementById(puzzleId).classList.add('hidden');
    document.getElementById('selection-screen').classList.remove('hidden');
}

function checkAnswer(inputId, correctAnswer, puzzleId) {
    const input = document.getElementById(inputId);
    if (input.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById(puzzleId).classList.add('hidden');
        document.getElementById(puzzleId + '-complete').classList.remove('hidden');
    } else {
        alert("Incorrect! Try again.");
    }
}

function turnOnProjector() {
    if (state.Batteries && state.Remote) {
        state.ProjectorOn = true;
        document.getElementById('Projector').classList.add('hidden');
        document.getElementById('Projector-complete').classList.remove('hidden');
    } else if (state.Remote) {
        alert("You need to find some batteries for the remote!");
    } else {
        alert("You'll need to find a remote to turn this projector on!")
    }
    console.log(state);
}

function liftUpScreen(screenState) {
    state.ScreenUp = true;
    document.getElementById(screenState).classList.add('hidden');
    document.getElementById(screenState + '-Up').classList.remove('hidden');
    console.log(state);
}

function pickUpBatteries() {
    state.Batteries = true;
    alert("Batteries added to your Inventory!");
    console.log(state);
}

function pickUpRemote() {
    state.Remote = true;
    alert("Remote added to your Inventory!");
    console.log(state);
}