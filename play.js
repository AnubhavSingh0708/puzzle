var nums = [1,2,3,4,5,6,7,8],//all numbers to be randomized
    ranNums = [],
    i = nums.length,
    j = 0;

while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}
var c = document.getElementById("gCanvas");
var ctx = c.getContext("2d");
var w = c.width;
var h = c.height;
var a1=[1,1];
var a2=[w/3,1];
var a3=[w*2/3,1];
var b1=[1,h/3];
var b2=[w/3,h/3];
var b3=[w*2/3,h/3];
var c1=[1,h*2/3];
var c2=[w/3,h*2/3];
var c3=[w*2/3,h*2/3];
ctx.font = "30px Arial";
ctx.strokeText(ranNums[0], a1[0]+40, a1[1]+40); 

ctx.strokeText(ranNums[1], a2[0]+40, a2[1]+40); 

ctx.strokeText(ranNums[2], a3[0]+40, a3[1]+40); 

ctx.strokeText(ranNums[3], b1[0]+40, b1[1]+40); 

ctx.strokeText(ranNums[4], b2[0]+40, b2[1]+40); 

ctx.strokeText(ranNums[5], b3[0]+40, b2[1]+40); 

ctx.strokeText(ranNums[6], c1[0]+40, c1[1]+40); 

ctx.strokeText(ranNums[7], c2[0]+40, c2[1]+40); 

c.addEventListener("click",function() {

},false)
