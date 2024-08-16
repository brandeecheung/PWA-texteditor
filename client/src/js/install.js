const butInstall = document.getElementById('buttonInstall');

// Variable to hold the beforeinstallprompt event
let deferredPrompt;

// Show the install button when the beforeinstallprompt event is fired
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = event;
  butInstall.style.display = 'block';
});

// Implement a click event handler on the butInstall element
butInstall.addEventListener('click', async () => {
  // Hide the install button
  butInstall.style.display = 'none';
  // Show the install prompt
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
    // Clear the deferredPrompt variable
    deferredPrompt = null;
  }
});

// Add a handler for the appinstalled event
window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
  });
  
