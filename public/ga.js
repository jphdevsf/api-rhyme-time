window.dataLayer = window.dataLayer || []

function gtag() {
  dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', 'UA-162903575-1');
// Google Tag Manager
(function (w, d, s, l, i) {
  w[l] = w[l] || []
  w[l].push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  })
  var f = d.getElementsByTagName(s)[0]
  var j = d.createElement(s)
  var dl = l !== 'dataLayer' ? '&l=' + l : ''
  j.async = true
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
  f.parentNode.insertBefore(j, f)
})(window, document, 'script', 'dataLayer', 'GTM-P74VWZH')
