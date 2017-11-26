var socket = io();
var selectedCoin;

socket.on('refreshData', function(data) {
	$('#block-container').html('');
	createBlockHtml(data.header, data.data);
});

$(document).on('change', '.selectpicker', function() {
	var title = $('.selectpicker option:selected').text();
	var selectedCoin = $(this).val();
	
	// clear container
	$('#block-container').html('');
	
	// render
	createBlockHtml(title, 'lultest'); 
});

function createBlockHtml(title, data) {
	var template = $('.block-template');
	
	template.find('.block-header').html(title);
	template.find('.block-data').html(data);
	
	$('#block-container').append(template.html());
}
