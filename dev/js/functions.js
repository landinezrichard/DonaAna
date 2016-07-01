$(document).ready(function() {

	/*Banner Index*/

	$('.Banner').owlCarousel({
		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		// Navigation
		navigationText : ['Anterior','Siguiente'],
		rewindNav : true,
		scrollPerPage : true,
		//Pagination
		pagination : true,
		paginationNumbers: false
	});

	/*slides Emprendimientos*/

	$('.Empre-slide').owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,		
		// Navigation
		navigationText : ['<','>'],
		rewindNav : true,
		scrollPerPage : true,
		//Pagination
		pagination : false,
		paginationNumbers: false,
		//Items
		itemsCustom : [
			[0, 1],
			[600, 2],			
			[1000, 3]
		]
	});

});