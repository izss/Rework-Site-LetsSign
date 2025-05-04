
document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timer');
    const progressCircle = document.querySelector('.progress');
    const totalTime = 25 * 60; // 25 minutos em segundos
    let timeLeft = totalTime;
    
    // Circunferência do círculo 
    progressCircle.style.strokeDasharray = circumference;
    
    const timer = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      
      // Atualiza o display
      timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      
      // Atualiza a barra de progresso
      const offset = circumference - (timeLeft / totalTime) * circumference;
      progressCircle.style.strokeDashoffset = offset;
      
      // Finaliza quando chegar a 0
      if (timeLeft-- <= 0) clearInterval(timer);
    }, 1000);
  });