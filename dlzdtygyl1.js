(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️",
    "Do you really mean it?",  
    "Like, absolutely certain??",  
    "One hundred percent sure?",  
    "Oh come on, bestie...",  
    "Take a moment, reconsider!",  
    "If you say no, my heart will shatter...",  
    "I'll be devastated...",  
    "I'll be utterly inconsolable...",  
    "Alright, alright, I'll stop...",  
    "Just messing with you—please say yes! ❤️"  

];

let messageIndex = 0;
let isHandlingClick = false; // 防止重复点击





function handleNoClick() {
    if (isHandlingClick) return;
    isHandlingClick = true;
    

    
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    
    setTimeout(function() {
        isHandlingClick = false;
    }, 200);
}

function handleYesClick() {
    if (isHandlingClick) return;
    isHandlingClick = true;
    

    

    
    // 立即跳转页面
    window.location.href = "jfgq76rd7v.html";
}