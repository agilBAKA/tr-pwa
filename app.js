if (navigator.serviceWorker.controller) {
  console.log('SW registered!')
} else {
  navigator.serviceWorker.register('service-worker.js', {
    scope: './'
  }).then(function(reg) {
    console.log('Service worker has been registered for scope:'+ reg.scope);
  });
}

