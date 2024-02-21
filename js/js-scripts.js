function playAudio() {
    const text = document.getElementById('text').innerText
    const btn = document.getElementById('play')
    
    // Create a new SpeechSynthesisUtterance object
    let utterance = new SpeechSynthesisUtterance()
    
    // Set the text and voice of the utterance
    utterance.text = text
    utterance.voice = window.speechSynthesis.getVoices()[3]
    
    // Speak the text
    if('speechSynthesis' in window) {
        console.log(text)
        window.speechSynthesis.speak(utterance)
        
    } else {
        console.log('Audio not supported')
    }    
}