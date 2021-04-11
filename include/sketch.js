let bf_url = "https://coolors.co/ccd5ae-e9edc9-fefae0-faedcd-d4a373";
bf_url = bf_url.split("/");
let url = bf_url[3];
//console.log(url);
let color_cd = [];

let new_color = bf_url[3].split("-");

let result_color = "";
//console.log(new_color.length);



for(let i= 0; i < new_color.length; i++) {
  color_cd[i] = "#" + new_color[i];

}


console.log(color_cd);





function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background("#42A8C0");
  
  
 // console.log("reseult:" + color_cd[3]);
  //stroke("#99ff99");
  
  let c = random(color_cd);
  fill(c);
  ellipse(100,100,100,100);
  
  
}