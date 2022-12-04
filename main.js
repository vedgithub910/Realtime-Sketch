function setup(){
c1=createCanvas(280,280);
c1.center()
background ("white")
c1.mouseReleased(classifycanvas)
sapi=window.speechSynthesis
} 
function classifycanvas(){
mymodel.classify(c1,gotResult)



}
function preload(){
mymodel=ml5.imageClassifier("DoodleNet")



}
function clearcanvas(){
background("white")





}
function draw(){
strokeWeight(13);
stroke(0)
if(mouseIsPressed){
line (pmouseX,pmouseY,mouseX,mouseY)




}



}
function gotResult(error,results){
if (error){
console.log(error)

}else{
console.log(results)
document.getElementById("label").innerHTML="You Have Drawn "+results[0].label
document.getElementById ("accuracy").innerHTML="accuracy: "+Math.round(results[0].confidence*100)+' % '
Bolo=new SpeechSynthesisUtterance(results[0].label)
sapi.speak(Bolo)
}



}





