let generatedItems = [];

function randomPickup(items) {
  return items[Math.floor(Math.random()*items.length)];
}

function generateImage(jsonData) { 
  
  // Iterate 5 times
  for (i = 0; i < 5; i++) {
    const d = Math.random();
    
    let txt;
  
    // 85% of chance
    if (d < 0.85) txt = randomPickup(jsonData["common"]) 

    // 18% of chance
    else if (d < 0.18) txt = randomPickup(jsonData['rare']) 

    // 2% of chance
    else txt = randomPickup(jsonData['legendary']); 
  
    text(txt, 20, 20 + (i * 25), 250, 50);
  }
  
}

function setup() {
  createCanvas(400, 400);
  background(0);

  fill(250);
  textSize(24)
  
  loadJSON('items.json', generateImage);
}

function draw() {}
