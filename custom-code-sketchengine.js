V2 TIPPY
  <!-- Tippy.js libraries -->
<script src="https://unpkg.com/@@2
pkg.com/tippy.js@6"></script>

<!-- Example help icon -->
<span id="help-upload" style="cursor:pointer;">❓</span>

<script>
document.addEventListener('DOMContentLoaded', function () {
  tippy('#help-upload', {
    content: 'Upload your data file here to begin.',
    trigger: 'click',
    interactive: true,
    placement: 'right'
  });
});
</script>
