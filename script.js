const keySoundMap = {
    w: "sounds/crash.wav",
    a: "sounds/kick.wav",
    s: "sounds/snare.wav",
    d: "sounds/tom1.wav",
    j: "sounds/tom2.wav",
    k: "sounds/tom3.wav",
    l: "sounds/hihat.wav"
  };
  
  function playSound(key) {
    const soundFile = keySoundMap[key];
    if (soundFile) {
      const audio = new Audio(soundFile);
      audio.play();
      animateButton(key);
    }
  }
  
  function animateButton(key) {
    const button = document.querySelector(`.drum[data-key="${key}"]`);
    if (button) {
      button.classList.add("pressed");
      setTimeout(() => {
        button.classList.remove("pressed");
      }, 150);
    }
  }
  
  // Mouse tıklama
  document.querySelectorAll(".drum").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-key");
      playSound(key);
    });
  });
  
  // Klavye ile oynatma
  document.addEventListener("keydown", e => {
    playSound(e.key.toLowerCase());
  });
  