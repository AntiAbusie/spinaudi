const LINK_REDIRECT_URL = 'https://zoometracker.com/dbae1e3a0'

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.faq-header').forEach((faq) => {
    faq.addEventListener('click', () => {
      faq.parentElement.classList.toggle('active')
      const panel = faq.nextElementSibling

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px'
      }
    })
  })

  document.querySelectorAll('a').forEach((link) => {
    link.href = LINK_REDIRECT_URL
  })
})
