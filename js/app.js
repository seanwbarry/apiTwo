$(function () {
	$('#search-term').submit(function (event) {
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	});

	function getRequest(searchTerm) {
	var params = {
		part: 'snippet',
		key: 'AIzaSyB-vE_PNo2_1o65I2etL3aITlKRYYhzeFs',
		q: searchTerm
	};
	url = 'https://www.googleapis.com/youtube/v3/search';
	$.getJSON(url, params, function (data) {
		var myData = data.items[0].snippet.thumbnails.default.url;
		$('#search-results').html('<img src="'+myData+'">');
	});
	//'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB-vE_PNo2_1o65I2etL3aITlKRYYhzeFs&q=you'
	}

	getRequest(searchTerm);


});


/*
function getRequest(searchTerm) {
	var params = {
		part: 'snippet',
		key: 'AIzaSyB-vE_PNo2_1o65I2etL3aITlKRYYhzeFs',
		q: searchTerm
	};
	url = 'https://www.googleapis.com/youtube/v3/search';
	$.getJSON(url, params, function(data) {
			showResults(data.Search);
	});
	
}


function showResults (array) {
	var html = "";
	$.each(array, function(index,value) {
		console.log(value);
		html += '<p>'+value+'</p>';
	});
	$('#search-results').html(html);
}


 */