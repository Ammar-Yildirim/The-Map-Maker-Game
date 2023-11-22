//Data
const board = []
const elements = [
    {
        time: 2,
        type: 'forest',
        shape: [[1,2,1],
                [0,1,0],
                [0,0,0]],
        rowAnchor: 0,
        colAnchor: 1,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[1,1,0],
                [0,2,1],
                [0,0,0]],
        rowAnchor: 1,
        colAnchor: 1,
        mirrored: false  
    },
    {
        time: 1,
        type: 'farm',
        shape: [[0,1,0],
                [1,2,1],
                [0,1,0]],
        rowAnchor: 1,
        colAnchor: 1,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,2,1],
                [0,0,0],
                [0,0,0]],
        rowAnchor: 0,
        colAnchor: 1,
        mirrored: false
    },
    {
        time: 2,
        type: 'town',
        shape: [[1,2,1],
                [0,0,0],
                [0,0,0]],
        rowAnchor: 0,
        colAnchor: 1,
        mirrored: false        
    },
    {
        time: 1,
        type: 'forest',
        shape: [[1,1,0],
                [0,2,1],
                [0,0,0]],
        rowAnchor: 1,
        colAnchor: 1, 
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,1,2],
                [0,0,1],
                [0,0,0]],
        rowAnchor: 0,
        colAnchor: 2,
        mirrored: false  
        },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,2],
                [0,0,1],
                [0,0,0]],
        rowAnchor: 0,
        colAnchor: 2,
        mirrored: false  
    },
    {
        time: 2,
        type: 'farm',
        shape: [[1,2,1],
                [0,1,0],
                [0,0,0]],
        rowAnchor: 0,
        colAnchor: 1,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[2,1,0],
                [1,0,0],
                [0,0,0]],
        rowAnchor: 0,
        colAnchor: 0,
        mirrored: false  
    },
    {
        time: 1,
        type: 'town',
        shape: [[1,1,1],
                [1,2,0],
                [0,0,0]],
        rowAnchor: 1,
        colAnchor: 1,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,0,0],
                [2,1,1],
                [1,0,0]],
        rowAnchor: 1,
        colAnchor: 0,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,2,1],
                [0,0,1]],
        rowAnchor: 1,
        colAnchor: 1,
        mirrored: false  
    },
    {
        time: 2,
        type: 'forest',
        shape: [[1,1,0],
                [0,2,1],
                [0,0,0]],
        rowAnchor: 1,
        colAnchor: 1,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[1,1,0],
                [1,2,0],
                [0,0,0]],
        rowAnchor: 1,
        colAnchor: 1,
        mirrored: false  
    },
    {
        time: 2,
        type: 'water',
        shape: [[2,1,1],
                [1,0,0],
                [1,0,0]],
        rowAnchor: 0,
        colAnchor: 0,
        mirrored: false  
    },
]
const seasons = [
    {
        name:"Spring AB",
        mission1: 0,
        mission2: 0,
        mountainPoint: 0,
    },
    {
        name: "Summer BC",
        mission1: 0,
        mission2: 0,
        mountainPoint: 0,
    },
    {
        name:"Autumn CD",
        mission1: 0,
        mission2: 0,
        mountainPoint: 0,
    },
    {
        name: "Winter DA",
        mission1: 0,
        mission2: 0,
        mountainPoint: 0,
    }
]
let elementCounter = 0;
let seasonCounter = 0;
let elapsedTime = 0;
let gamePoints = 0;

//Selectors
const rotateButton = document.querySelector("#rotate-button");
const flipButton = document.querySelector("#flip-button");
const htmlBoard = document.querySelector(".board");
const elementDisplayGrid = document.querySelector(".elementDisplayGrid");
const elementTimeText = document.querySelector("#element-time");
const elapsedTimeText = document.querySelector("#elapsed-time");
const gamePointsText = document.querySelector("#game-points");
const seasonText = document.querySelector("#season-text");
const missions = document.querySelector(".missions");
const spring = document.querySelector("#spring");
const summer = document.querySelector("#summer");
const autumn = document.querySelector("#autumn");
const winter = document.querySelector("#winter");

//Event Listeners
window.addEventListener("load", setUpDisplays);
flipButton.addEventListener("click", flipShape);
rotateButton.addEventListener("click", rotateShape);


//Displays
function setUpDisplays(){
    setUpGrid();
    setUpDisplayGrid();
}

function setUpGrid(){
    for(let i = 0; i<11; i++){
        let rows = []
        for(let j = 0; j<11; j++){
            let tile = document.createElement("div");
            tile.id = `${i}-${j}`
            tile.addEventListener("click", placeShape)
            document.querySelector(".board").append(tile);
            let obj = {
                type: "",
                tile: tile
            }
            rows.push(obj);
        } 
        board.push(rows);
    }

    //Reserved spots
    board[1][1].type = 'mountain'
    board[1][1].tile.style.backgroundImage = "url(./assets/tiles/mountain_tile.png)";
    board[3][8].type = 'mountain'
    board[3][8].tile.style.backgroundImage = "url(./assets/tiles/mountain_tile.png)";
    board[5][3].type = 'mountain'
    board[5][3].tile.style.backgroundImage = "url(./assets/tiles/mountain_tile.png)";
    board[9][5].type = 'mountain'
    board[9][5].tile.style.backgroundImage = "url(./assets/tiles/mountain_tile.png)";
    board[8][9].type = 'mountain'
    board[8][9].tile.style.backgroundImage = "url(./assets/tiles/mountain_tile.png)";
}

function clearGrid(){
    htmlBoard.replaceChildren();
}

function setUpDisplayGrid(){
    for(let i = 0; i<3; i++){
        for(let j = 0; j<3; j++){
            let tile = document.createElement("div");
            if(elements[elementCounter].shape[i][j] > 0){
                let rowAnchor = elements[elementCounter].rowAnchor;
                let colAnchor = elements[elementCounter].colAnchor;
                if(i == rowAnchor && j == colAnchor){
                    tile.classList.add("anchor");
                    tile.textContent = "•";
                } 
                tile.style.backgroundImage = `url(./assets/tiles/${elements[elementCounter].type}_tile.png)`
            }
            elementDisplayGrid.append(tile);
        }
    }
    elementTimeText.textContent = elements[elementCounter].time;
}

function clearDisplayGrid(){
    elementDisplayGrid.replaceChildren();
}

//Placing the shapes
function placeShape(e){
    //Stop condition
    if(elapsedTime >= 28){
        seasonText.textContent = "Game Ended!"
        seasonText.style.backgroundColor = "red";
        seasonText.style.textAlign = "center";
        seasonText.style.color = "white"
        seasonText.style.padding = "7px"
        return
    }
    const r = parseInt(e.target.id.split("-")[0]);
    const c = parseInt(e.target.id.split("-")[1]);
    //Collision Detector
    if(!canPlaceShape(r,c)){
        for(let i = 0; i<3; i++){
            for(let j=0; j<3; j++){
                if(elements[elementCounter].shape[i][j] > 0){
                    let rowAnchor = elements[elementCounter].rowAnchor;
                    let colAnchor = elements[elementCounter].colAnchor;
                    board[r+i-rowAnchor][c+j-colAnchor].tile.classList.add("wrong-placement");
                } 
            }
        }
        setTimeout(() => {
            for(let i = 0; i<3; i++){
                for(let j=0; j<3; j++){
                    if(elements[elementCounter].shape[i][j] > 0){
                        let rowAnchor = elements[elementCounter].rowAnchor;
                        let colAnchor = elements[elementCounter].colAnchor;
                        board[r+i-rowAnchor][c+j-colAnchor].tile.classList.remove("wrong-placement");
                    } 
                }
            }
        },200);

        return;
    }
    //Shape Placer
    for(let i = 0; i<3; i++){
        for(let j=0; j<3; j++){
            if(elements[elementCounter].shape[i][j] > 0){
                let rowAnchor = elements[elementCounter].rowAnchor;
                let colAnchor = elements[elementCounter].colAnchor;
                board[r+i-rowAnchor][c+j-colAnchor].tile.style.backgroundImage = `url(./assets/tiles/${elements[elementCounter].type}_tile.png)`
                board[r+i-rowAnchor][c+j-colAnchor].type = elements[elementCounter].type;
            } 
        }
    }
    //Update time + Season
    elapsedTime += elements[elementCounter].time;
    elapsedTimeText.textContent = `Elapsed time in current season: ${elapsedTime % 7}/7`
    //Right before the change of season, we calculate the current seasons points
    if(seasonCounter != Math.floor(elapsedTime / 7) && seasonCounter < 4){
        calcSeasonPoints(seasonCounter);
    }
    seasonCounter = Math.floor(elapsedTime / 7);
    seasonText.textContent = `Current Season: ${seasons[seasonCounter].name}`;
    highlightMissions();
    
    //Next Element
    elementCounter = Math.floor(Math.random() * 16);
    
    //Display next element
    clearDisplayGrid();
    setUpDisplayGrid();
}

function canPlaceShape(r,c){
    for(let i = 0; i<3; i++){
        for(let j=0; j<3; j++){
            let rowAnchor = elements[elementCounter].rowAnchor;
            let colAnchor = elements[elementCounter].colAnchor;
            //Checks for overflow
            if(elements[elementCounter].shape[i][j] > 0 && (r+i-rowAnchor > 11 || c+j-colAnchor > 11)) return false
            //Checks if there's an existing element
            if(elements[elementCounter].shape[i][j] > 0 && board[r+i-rowAnchor][c+j-colAnchor].type != "") return false;
        }
    }
    return true;
}

//Modifying the shape
function flipShape() {
    let shape = elements[elementCounter];
    //Reverse the matrix
    shape.mirrored = !shape.mirrored;
    shape.shape = shape.shape.map(row => row.slice().reverse());
    //Update anchors
    updateAnchors(elements[elementCounter])
    //Clear the display grid and draw the reversed shape
    clearDisplayGrid();
    setUpDisplayGrid();
}

function rotateShape() {
    let newShape = [];
    let currentElement = elements[elementCounter];
    let matrix = currentElement.shape;
    
    for (let i = 0; i < 3; i++) {
        for (let j = i + 1; j < 3; j++) {
            // Swap matrix[i][j] and matrix[j][i]
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    // Reverse the order of the rows
    matrix.forEach(row => row.reverse());

    updateAnchors(currentElement);

    clearDisplayGrid();
    setUpDisplayGrid();
}

//Modifying the anchor after rotation
function updateAnchors(element) {
    shape = element.shape;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(shape[i][j] == 2){
                element.rowAnchor = i;
                element.colAnchor = j;
            }
        }
    }
}

//Missions and Point Calculation
function calcTotalPoints(){
    gamePoints = 0;
    for(let i = 0; i<seasons.length ; i++){
        gamePoints += (parseInt(seasons[i].mission1) + parseInt(seasons[i].mission2) + parseInt(seasons[i].mountainPoint));
    }
    gamePointsText.textContent = `Total: ${gamePoints} Points`
}

function calcSeasonPoints(seasonCounter){
    currentSeason = seasons[seasonCounter];
    switch (seasonCounter) {
        case 0:
            currentSeason.mission1 = mission1();
            console.log("Mission1 :" + mission1());
            currentSeason.mission2 = mission2();
            console.log("Mission2 :" + mission2());
            currentSeason.mountainPoint = mountainMission();
            console.log("mountain :" + mountainMission());
            spring.innerHTML = `Spring: <br> ${currentSeason.mission1+currentSeason.mission2+currentSeason.mountainPoint} Points`
            break;
        case 1:
            currentSeason.mission1 = mission2()
            currentSeason.mission2 = mission3();
            currentSeason.mountainPoint = mountainMission();
            console.log("mountain :" + mountainMission());
            summer.innerHTML = `Summer: <br> ${currentSeason.mission1+currentSeason.mission2+currentSeason.mountainPoint} Points`
            break;
        case 2:
            currentSeason.mission1 = mission3();
            currentSeason.mission2 = mission4();
            currentSeason.mountainPoint = mountainMission();
            autumn.innerHTML = `Autumn: <br> ${currentSeason.mission1+currentSeason.mission2+currentSeason.mountainPoint} Points`
            break;
        case 3:
            currentSeason.mission1 = mission4();
            currentSeason.mission2 = mission1();
            currentSeason.mountainPoint = mountainMission();
            winter.innerHTML = `Winter: <br> ${currentSeason.mission1+currentSeason.mission2+currentSeason.mountainPoint} Points`
            break;     
        default:
            break;
    }
    calcTotalPoints();
}

function mission1() {
    let points = 0;
    //This function calculates point for Edge of the Forest
    //1 point for each forest field adjacent to the map
    let row0 = 0; 
    let row10 = 10;
    for (let j = 0; j < 11; j++) {
        if(board[row0][j].type == "forest"){
            points++;
        }
        if(board[row10][j].type == "forest"){
            points++;
        }
    }
    let col0 = 0;
    let col10 = 10;
    for (let i = 1; i < 10; i++) {
        if(board[i][col10].type == "forest"){
            points++;
        }
        if (board[i][col0].type == "forest") {
            points++;
        }
    }

    return points;
}

function mission2(){
    //Watering potatoes - Two points for each water field adjacent to your farm fields
    let points = 0;
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            if(board[i][j].type == 'water' && getAdjacentTiles(i,j).some( x => x.type == 'farm')){
                points += 2;
            }
        }
    }
    return points;
}

function getAdjacentTiles(i,j){
    adjacentTiles = [];
    if( i-1 >= 0){
        adjacentTiles.push(board[i-1][j])
    }
    if( i+1 <= 10){
        adjacentTiles.push(board[i+1][j])
    }
    if( j-1 >= 0){
        adjacentTiles.push(board[i][j-1])
    }
    if( j+1 <= 10){
        adjacentTiles.push(board[i][j+1])
    }
    return adjacentTiles;
}

function mission3(){
    //Sleepy Valley
    let points = 0;
    for (let i = 0; i < 11; i++) {
        if(board[i].filter( x => x.type == 'forest').length == 3){
            points += 4;
        }
    }

    return points;
}

function mission4(){
    //Borderlands
    let points = 0;
    for (let i = 0; i < 11; i++) {
        if(board[i].every( x=> x.type !== "")){
            points += 6;
        }
    }
    
    for (let j = 0; j < 11; j++) {
        // Check if the column is full
        if (board.every(row => row[j].type !== "")) {
            points += 6; // Add points for a full column
        }
    }
    
    return points;
}

function mountainMission(){
    let points = 0;
    if(getAdjacentTiles(1,1).every(x=>x.type !== "")){
        console.log("1,1");
        points++;
    }
    if(getAdjacentTiles(3,8).every(x=>x.type !== "")){
        console.log("3,8");
        points++;
    }
    if(getAdjacentTiles(9,5).every(x=>x.type !== "")){
        console.log("9,5");
        points++;
    }
    if(getAdjacentTiles(8,9).every(x=>x.type !== "")){
        console.log("8,9");
        points++;
    }

    return points;
}
//Highlight missions
function highlightMissions(){
    if(seasonCounter == 1){
        missions.childNodes[1].classList.remove("highlightImage");
        missions.childNodes[5].classList.add("highlightImage");
    }
    else if(seasonCounter == 2){
        missions.childNodes[3].classList.remove("highlightImage");
        missions.childNodes[7].classList.add("highlightImage");
    }
    else if(seasonCounter == 3){
        missions.childNodes[5].classList.remove("highlightImage");
        missions.childNodes[1].classList.add("highlightImage");
    }
}

