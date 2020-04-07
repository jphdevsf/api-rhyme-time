window.addEventListener('load',
  function () {
    //
    // form validation
    const form = document.getElementById('rhymeForm')
    const rhymeText = document.getElementById('rhymeText')
    const textError = document.querySelector('#rhymeText + span.error')
    if (rhymeText.classList.contains('invalid')) {
      rhymeText.classList.toggle('invalid')
    }

    form.addEventListener('submit', function (event) {
      // if the field is valid, we let the form submit
      if (!rhymeText.validity.valid) {
        rhymeText.classList.toggle('invalid')
        showError()
        event.preventDefault()
      }
    })

    function showError () {
      if (rhymeText.validity.valueMissing) {
        textError.textContent = 'You need to enter a word.'
      } else if (rhymeText.validity.patternMismatch) {
        textError.textContent = 'Entered value needs to be text characters only.'
      } else if (rhymeText.validity.tooShort) {
        textError.textContent = `Please enter ${rhymeText.maxLength} characters or less.`
      }
      // Set the styling appropriately
      textError.className = 'error active'
    }
    //
  }, false)
