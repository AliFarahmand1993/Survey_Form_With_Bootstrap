const goToStep2Trigger = document.querySelector('#go-to-step-2');
goToStep2Trigger.addEventListener('click', function() {
  scrollToTop();
  setTimeout(function() {
    const step2TabElement = document.querySelector('#step-2-tab');
    const step2Tab = new bootstrap.Tab(step2TabElement);
    step2Tab.show();
  }, 1000)
})

const goToStep3Trigger = document.querySelector('#go-to-step-3');
goToStep3Trigger.addEventListener('click', function() {
  scrollToTop();
  setTimeout(function() {
    const step3TabElement = document.querySelector('#step-3-tab');
    const step3Tab = new bootstrap.Tab(step3TabElement);
    step3Tab.show();
  }, 1000)
})

function scrollToTop() {
  scroll({
    top: 0,
    behavior: "smooth"
  });
}
const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function() {
  setTimeout(function() {
    window.location.href = 'result.html';
  }, 1000)
})
