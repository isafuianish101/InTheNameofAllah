toggleArabicButton = document.querySelectorAll('.toggleArabic')
togglePhoneticButton = document.querySelectorAll('.togglePhonetic')
toggleEnglishButton = document.querySelectorAll('.toggleEnglish')

toggleArabicButton.forEach(button => {
  button.addEventListener("click", event => {
    surah = event.srcElement.parentNode.parentNode.parentNode
    surah.querySelectorAll('.surah-text-arabic').forEach(arabicText => {
      if (arabicText.classList.contains('focus')) {
        arabicText.classList.remove('focus')
        arabicText.classList.add('hide')
        event.srcElement.classList.remove('focus')
        event.srcElement.classList.add('hide')
      } else if (arabicText.classList.contains('hide')) {
        arabicText.classList.remove('focus')
        arabicText.classList.remove('hide')
        event.srcElement.classList.remove('focus')
        event.srcElement.classList.remove('hide')
      } else {
        arabicText.classList.add('focus')
        event.srcElement.classList.add('focus')
      }
    })
  })
});

togglePhoneticButton.forEach(button => {
  button.addEventListener("click", event => {
    surah = event.srcElement.parentNode.parentNode.parentNode
    surah.querySelectorAll('.surah-text-phonetic').forEach(arabicText => {
      if (arabicText.classList.contains('focus')) {
        arabicText.classList.remove('focus')
        arabicText.classList.add('hide')
        event.srcElement.classList.remove('focus')
        event.srcElement.classList.add('hide')
      } else if (arabicText.classList.contains('hide')) {
        arabicText.classList.remove('focus')
        arabicText.classList.remove('hide')
        event.srcElement.classList.remove('focus')
        event.srcElement.classList.remove('hide')
      } else {
        arabicText.classList.add('focus')
        event.srcElement.classList.add('focus')
      }
    })
  })
});

toggleEnglishButton.forEach(button => {
  button.addEventListener("click", event => {
    surah = event.srcElement.parentNode.parentNode.parentNode
    surah.querySelectorAll('.surah-text-english').forEach(arabicText => {
      if (arabicText.classList.contains('focus')) {
        arabicText.classList.remove('focus')
        arabicText.classList.add('hide')
        event.srcElement.classList.remove('focus')
        event.srcElement.classList.add('hide')
      } else if (arabicText.classList.contains('hide')) {
        arabicText.classList.remove('focus')
        arabicText.classList.remove('hide')
        event.srcElement.classList.remove('focus')
        event.srcElement.classList.remove('hide')
      } else {
        arabicText.classList.add('focus')
        event.srcElement.classList.add('focus')
      }
    })
  })
});