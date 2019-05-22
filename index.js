// Insert copy to clipboard button before .highlight
function addClipboardButtonToHighlight () {
  $('.highlight').each(function () {
    var btnHtml = '<div class="bd-clipboard"><span class="btn-clipboard" title="Copy to clipboard">Copy</span></div>'
    $(this).before(btnHtml)
  })

  var clipboard = new Clipboard('.btn-clipboard', {
    target: function (trigger) {
      return trigger.parentNode.nextElementSibling
    }
  })

  clipboard.on('success', function (e) {
    e.clearSelection()
  })
}

document.addEventListener('DOMContentLoaded', function () {
  addClipboardButtonToHighlight()
})
