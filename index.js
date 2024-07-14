


function distanceFromHqInBlocks(blockNumber) {
   
   return Math.abs(blockNumber - 42) 
    }

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet)*264

}
function distanceTravelledInFeet(start,destination){
    return Math.abs(destination-start)*264
}
function calculatesFarePrice(start,destination){
  const distanceInFeet = distanceTravelledInFeet (start, destination);
  if (distanceInFeet <= 400){
  return 0}
  else if( distanceInFeet > 400 && distanceInFeet <= 2000){
    return (distanceInFeet - 400) * 0.02

}
else if (distanceInFeet> 2000 && distanceInFeet <= 2500){
    return 25
}
else if (distanceInFeet> 2500){
    return 'cannot travel that far'
}
}
