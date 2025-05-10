// Sakura petals animation
for (let i = 0; i < 20; i++) {
    const petal = document.createElement('div');
    petal.className = 'sakura';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
    petal.style.animationDelay = Math.random() * 10 + 's';
    document.body.appendChild(petal);
  }
  
  // Tab switching function
  function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    if (window.innerWidth <= 700) {
      document.getElementById("menu").style.display = "none";
    }
  }

  // Toggle menu for small screens
  function toggleMenu() {
    const menu = document.getElementById("menu");
    const currentDisplay = menu.style.display;
    if (currentDisplay === "flex" || currentDisplay === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }
