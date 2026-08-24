<!-- Tippy.js -->
https://unpkg.com/@popperjs/core@2>
https://unpkg.com/tippy.js@6script>

<!-- Example help icons -->
<span id="help-upload" style="cursor:pointer;">❓</span>
<span id="help-search" style="cursor:pointer;">❓</span>
<span id="help-results" style="cursor:pointer;">❓</span>

<script>
document.addEventListener('DOMContentLoaded', function () {

  tippy('#help-upload', {
    content: 'Upload your data file here to begin.',
    trigger: 'click',
    interactive: true,
    placement: 'right'
  });

  tippy('#help-search', {
    content: 'Search for records using keywords or filters.',
    trigger: 'click',
    interactive: true,
    placement: 'right'
  });

  tippy('#help-results', {
    content: 'Your results will appear in this section after processing.',
    trigger: 'click',
    interactive: true,
    placement: 'right'
  });

});
</script>
