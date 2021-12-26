export const callbackPrompt = {
  message: 'Tell me your number',
  showPrompt() {
    const phoneNum = prompt(this.message);
    console.log(phoneNum);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

callbackPrompt.showDeferredPrompt(1000);
