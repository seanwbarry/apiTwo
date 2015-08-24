$(function () {
	$('#searchTerm').submit(function (event) {
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);

	});

	function getRequest(searchTerm) {
		var params = {
			q: searchTerm,
			part:'snippet',
			key:'AIzaSyB-vE_PNo2_1o65I2etL3aITlKRYYhzeFs'
		}
		url = 'https://www.googleapis.com/youtube/v3/search';
		$.getJSON(url, params, function(data) {
			showResults(data);
			console.log(data);
		})

		/*$.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB-vE_PNo2_1o65I2etL3aITlKRYYhzeFs&q='+searchTerm+'', function (data) {
			showResults(data);
		});*/
	}

	function showResults(data) {
		console.log(data.items[0]);
		var html ='';
		for (i=0;i<5;i++) {
			var thumbnail = data.items[i].snippet.thumbnails.default.url;
			var link = data.items[i].id.videoId;
			//$('#search-results').append('<img src="'+thumbnail+'">');
			html += '<p style="display:inline-block; margin:1em;"><a href="https://www.youtube.com/watch?v='+link+'"><img style="height:100px; width:100px;" src="'+thumbnail+'"></a></p>';
		}
		$('#search-results').html(html);
	}


});


/*


//'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB-vE_PNo2_1o65I2etL3aITlKRYYhzeFs&q=you'


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