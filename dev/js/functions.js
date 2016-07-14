$(document).ready(function() {

	/*Mostrar Menu en Movil*/
	$('.Menu-btn').click(function(event){
		event.preventDefault();
		$('.Menu').slideToggle();
	});


	/*Flechas navegación sliders*/
	var arrow_izq ='<span class="icon-chevron-left"></span>';
	var arrow_der ='<span class="icon-chevron-right"></span>';

	/*Banner "Index"*/

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

	/*slides "Emprendimientos"*/

	$('.Empre-slide').owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		// Navigation
		navigationText : [arrow_izq, arrow_der],
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

	/*slides "Aliados"*/

	$('.Aliados-list').owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		// Navigation
		navigationText : [arrow_izq, arrow_der],
		rewindNav : true,
		scrollPerPage : true,
		//Pagination
		pagination : false,
		paginationNumbers: false,
		//Items
		itemsCustom : [
			[0, 2],
			[500, 3],
			[750,4],
			[1000, 5]
		],
		itemsScaleUp:true,
		items: 7
	});

	/*Carrusel imagenes "quienes somos"*/

	$('.About-fotos').owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		// Navigation
		navigationText : [arrow_izq, arrow_der],
		rewindNav : true,
		scrollPerPage : true,
		//Pagination
		pagination : false,
		paginationNumbers: false,
		//Items
		itemsCustom : [
			[0, 1],
			[720, 2],
			[1024, 3]
		]
	});

	/*Carrusel videos "quienes somos"*/

	$('.About-videos').owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		// Navigation
		navigationText : [arrow_izq, arrow_der],
		rewindNav : true,
		scrollPerPage : true,
		//Pagination
		pagination : false,
		paginationNumbers: false,
		//Items
		itemsCustom : [
			[0, 1],
			[720, 2],
			[1024, 3]
		]
	});

	/*Carrusel "noticias"*/

	$('.News-list').owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		// Navigation
		navigationText : [arrow_izq, arrow_der],
		rewindNav : true,
		scrollPerPage : true,
		//Pagination
		pagination : false,
		paginationNumbers: false,
		//Items
		itemsCustom : [
			[0, 1],
			[720, 2],
			[1024, 3]
		]
	});

	/*Album "interna Emprendimientos"*/

	$('.Empre-intImgAlbum').owlCarousel({
		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		// Navigation		
		rewindNav : true,		
		//Pagination
		pagination : false,
		paginationNumbers: false,
		singleItem:true,
		transitionStyle : 'fadeUp',
		autoPlay: 2000
	});

});