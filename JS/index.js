<script>
$('.box_box').hide();
$('.box_heading').click(function(){
$(this).next('.box_box').fadeToggle('slow');
$(this).find('a').toggleClass('active');
$(this).toggleClass('change');
});
</script>