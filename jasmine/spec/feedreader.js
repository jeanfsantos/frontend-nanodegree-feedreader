/* global allFeeds, loadFeed */
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function a(win, doc) {
	/* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
	describe('RSS Feeds', function() {
		/* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		/**
		 * verificado se propriedade url esta definido em cada feed 
		 * e maior que 0 de comprimento
		 */
		it('URL are defined', function() {
			allFeeds.forEach(feed => {
				expect(feed.url).toBeDefined();
				expect(feed.url.length).toBeGreaterThan(0);
			});
		});

		/**
		 * validar se a propriedade name esta definido em cada feed
		 * e maior que 0 de comprimento
		 */
		it('name are defined', function() {
			allFeeds.forEach(feed => {
				expect(feed.name).toBeDefined();
				expect(feed.name.length).toBeGreaterThan(0);
			});
		});
	});

	// The Menu
	describe('The menu', function() {
		let $body = null;
		let $slideMenu = null;

		beforeEach(function() {
			$body = doc.body;
			$slideMenu = doc.querySelector('.slide-menu');
		});

		// valida se por default o menu esta escondido
		it('is hidden by default', function() {
			expect($body.classList.contains('menu-hidden')).toBe(true);
			expect(
				win.getComputedStyle($slideMenu).getPropertyValue('transform')
			).toContain('matrix(1, 0, 0, 1, -192, 0)');
		});

		// valida a mudanca do menu quando clicado uma vez e segunda vez
		it('is show/hide when the menu icon is clicked', function() {
			const $menuIconLink = doc.querySelector('.menu-icon-link');
			$menuIconLink.click();
			expect($body.classList.contains('menu-hidden')).toBe(false);
			$menuIconLink.click();
			expect($body.classList.contains('menu-hidden')).toBe(true);
		});
	});

	/* Initial Entries */
	describe('Initial Entries', function() {
		// carrega os feeds antes de executar cada teste
		beforeEach(function(done) {
			loadFeed(0, done);
		});

		// verifica se os feeds estao carregado apos o loadFeed
		it('There must be at least one .entry element in the .feed container', function(done) {
			expect(doc.querySelectorAll('.feed .entry').length > 0).toBe(true);
			done();
		});
	});

	/* New Feed Selection */
	describe('New Feed Selection', function() {
		let oldFeed = null;
		// carrega os feeds antes de executar cada teste
		beforeEach(function(done) {
			loadFeed(0, function() {
				oldFeed = _selectFirstEntryText();
				loadFeed(1, done);				
			});
		});

		// funcao para selecionar o primeiro texto .entry dentro de .feed
		function _selectFirstEntryText () {
			return doc.querySelector('.feed .entry').querySelector('h2').innerHTML;
		}

		// verifica se o primeiro feed foi alterado apos carregar outro feed
		it('should change the feed list when a new feed loads', function(done) {
			const newFeed = _selectFirstEntryText();
			expect(oldFeed !== newFeed).toBe(true);
			done();
		});
	});
}(window, document));
