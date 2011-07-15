$('#profile_action_remove_friend').children().first().attr('id', 'chrome_unfriend');
$('#pagelet_profile_picture').before($('#chrome_unfriend'));
$('#chrome_unfriend').css({'font-size':'30px', 'margin-bottom':'10px', 'color':'white'});
$('#chrome_unfriend').addClass('uiButton uiButtonLarge uiButtonConfirm');