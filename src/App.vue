<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import Message from 'primevue/message';

// let dialogMessage = "made by Henrique Quintino";

// function showMessage() {
//   const messageElement = document.querySelector('.p-message.p-message-info');
//   messageElement.style.opacity = '1';

//   messageElement.style.animation = 'none';
//   messageElement.offsetHeight;
//   messageElement.style.animation = null;

//   setTimeout(() => {
//     messageElement.style.animation = 'fadeOut 2s';
//     messageElement.style.opacity = '0';
//   }, 2000);
// }

// window.addEventListener('contextmenu', function (event) {
//   event.preventDefault();
//   showMessage();
// });

// window.addEventListener('keyup', function (event) {
//   if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'c' || event.key === 'F12') {
//     showMessage();
//   }
// });

// window.addEventListener('keydown', function (event) {
//   if ((event.ctrlKey || event.metaKey) && event.shiftKey && (event.key.toLowerCase() === 'c') || (event.key === 'F12')) {
//     event.preventDefault();
//   }
// });

</script>

<template>
  <HeaderComponent />

  <Message severity="info" :closable="false">
    {{ dialogMessage }}
  </Message>

  <RouterView />

  <FooterComponent />
</template>

<style>
@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.p-message.p-message-info {
  opacity: 0;
  position: fixed;
  z-index: 99;
  border: none;
  right: 1%;
  top: 10%;
  background: rgba(59, 130, 246, 0.7);
}

.p-message .p-message-text {
  font-size: 12px;
}

.p-message .p-message-wrapper {
  padding: 0.9rem 1.35rem;
}
</style>
