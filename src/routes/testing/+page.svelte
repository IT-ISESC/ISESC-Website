<script>
	import { onMount } from 'svelte';

	import { bookData } from './bookData.js'; // Data from a js file
	import Search from './Search.svelte'; // Basically a search bar component
	import Book from './Book.svelte'; // Staff information component
	import NoResults from './NoResults.svelte'; //To display when there is no results

	let languages = []; // menu built from bookData
	let selectedLang = ''; //  menu selection

	// TODO Basically adds languages to the list of languages
	const getLanguages = () => {
		for (let bookObj of bookData) {
			if (!languages.includes(bookObj.language)) {
				languages = [...languages, bookObj.language];
			}
		}
		languages = languages.sort();
	};
	onMount(() => getLanguages());

	// Query results
	let filteredBooks = [];

	// For Select Menu
	$: if (selectedLang) getBooksByLang();
	$: console.log(filteredBooks, selectedLang);

	// TODO Filters book out by languages
	const getBooksByLang = () => {
		// resets search input if menu is being used
		searchTerm = '';

		if (selectedLang === 'all') {
			return (filteredBooks = []);
		}
		return (filteredBooks = bookData.filter((book) => book.language === selectedLang));
	};

	// For Search Input
	let searchTerm = '';
	// resets language menu if search input is used
	$: if (searchTerm) selectedLang = '';

	// TODO Searches the book name
	const searchBooks = () => {
		return (filteredBooks = bookData.filter((book) => {
			let bookTitle = book.title.toLowerCase();
			return bookTitle.includes(searchTerm.toLowerCase());
		}));
	};
</script>

<section id="query-section">
	<!-- <Menu {languages} bind:selectedLang /> -->
	<Search bind:searchTerm on:input={searchBooks} {languages} bind:selectedLang />
</section>

<main id="bookshelf">
	{#if searchTerm && filteredBooks.length === 0}
		<NoResults />
	{:else if filteredBooks.length > 0}
		{#each filteredBooks as { title, image, language, ebookBundle, pdfLink, appleLink, googleLink, amazonLink }}
			<Book
				{title}
				{image}
				{language}
				{ebookBundle}
				{pdfLink}
				{appleLink}
				{googleLink}
				{amazonLink}
			/>
		{/each}
	{:else}
		{#each bookData as { title, image, language, ebookBundle, pdfLink, appleLink, googleLink, amazonLink }}
			<Book
				{title}
				{image}
				{language}
				{ebookBundle}
				{pdfLink}
				{appleLink}
				{googleLink}
				{amazonLink}
			/>
		{/each}
	{/if}
</main>

<style>
	* {
		box-sizing: border-box;
	}

	#query-section {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2% 0;
	}

	/* General Structure */
	main#bookshelf {
		width: 100%;
		margin: 10px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
	}
</style>
