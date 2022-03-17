var args = process.argv.slice(2)
var nonNums = []



var str = args[0]

//extract the version number from the string
var buildNum= str.substring(
    str.indexOf("- ")+2,
    str.lastIndexOf(".zip")
)
//extract the file name from the string
var fileName = str.substring(
    str.indexOf("R"),
    str.lastIndexOf(" -")+3
)
//Find indicies of the non numeric chars and stuff them into an array for later
for(var i=0; i<buildNum.length; i++){
    if(buildNum[i] === "_" || buildNum[i] === "."){

        nonNums.push(i)
    }
}
//convert the build number into an integer and increment it by 1
var newBuildNum = parseInt(buildNum.replace(/\D/g,'')) +1



//convert back to string and insert underscores at all previous indicies
newBuildNum = newBuildNum.toString()

for(var i =0; i <= nonNums.length-1; i++){
      
    newBuildNum = newBuildNum.slice(0, nonNums[i]) + "_" + newBuildNum.slice(nonNums[i])
    
  }
    
    
// remove the last underscore replacing it with a period, rebuild the file name 
console.log(fileName + newBuildNum.substring(0,newBuildNum.lastIndexOf("_")) + "." + newBuildNum.substring(newBuildNum.lastIndexOf("_")+1)+".zip")