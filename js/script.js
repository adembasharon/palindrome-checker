/*select document elements */ 
const myText=document.getElementById("text-btn");

const checkButton=document.getElementById("check-button");
const myMessage=document.getElementById("message")
const myNotice=document.getElementById("blank")
checkButton.addEventListener("click",
()=>{
if(myText.value=="") {
    myNotice.textContent=`please enter a word or phrase`
}
else{
    myNotice.textContent="";
    myPalindrome(myText.value)

}
    
    
}

)

function myPalindrome(name){
const answer=name.toLowerCase();
const splitString=name.split("");

const reverseSplit=splitString.reverse("");
const joinedString=reverseSplit.join("");
const lower=joinedString.toLowerCase();
if (answer==lower){
myMessage.textContent=`${answer} is a palindrome`;
myMessage.classList.add("success")
myMessage.classList.remove("error")
}
else {
myMessage.textContent=`${answer} is not a palindrome`;
myMessage.classList.add("error")
myMessage.classList.remove("success")
}

}


console.log(myText);
console.log(checkButton);






























