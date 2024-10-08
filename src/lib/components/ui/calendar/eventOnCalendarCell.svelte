<script lang="ts">
	import type { News } from '../news/newsCard/newsCard';
	import moment from 'moment';
	import Icon from '../icons/icon.svelte';
	import type { TagProps, TagLabel } from '$lib/components/ui/tag/index';
	import Tag from '$lib/components/ui/tag/tag.svelte';
	import { onMount } from 'svelte';
	import clock from '$lib/assets/icons/clock.svg';
	import location from '$lib/assets/icons/location.svg';

	export let date;
	export let ids: number[] = [];
	export let type: 'single' | 'period' | 'dummy' = 'single';
	export let news: News[];
	export let event: {
		eventId: number;
		date: string;
		type: string;
	} = {
		eventId: -1,
		date: '-1',
		type: '-1'
	};
	export let color;

	const day = moment(date.toString());
	let startDay, endDay;
	if (event.type === 'startDate') {
		startDay = moment(date.toString());
		endDay = moment(event.date);
	} else {
		startDay = moment(event.date);
		endDay = moment(date.toString());
	}
	let newsInDate: News[];

	switch (type) {
		case 'single':
			newsInDate = news.filter((Onew) => ids.includes(Onew.id));
			break;
		case 'period':
			newsInDate = news.filter((Onew) => Onew.id === event.eventId);
			break;
		case 'dummy':
			newsInDate = news.filter((Onew) => Onew.id === ids[0]);
	}

	$: if (type === 'single') {
		newsInDate = news.filter((Onew) => ids.includes(Onew.id));
	}

	const dummyNews = newsInDate[0];

	let allTags: Array<Array<{ label: TagLabel; props?: TagProps }>>;
	let flattenTags: Array<{ label: TagLabel; props?: TagProps }>;
	let allLabels: Array<TagLabel>;
	let correctTags: Array<TagLabel>;
	if (newsInDate) {
		allTags = newsInDate.map((Onew) => Onew.tags);
		flattenTags = allTags.flat(1);
		allLabels = flattenTags.map((tag) => tag.label);
		correctTags = [...new Set(allLabels)].sort();
	}

	const tagColors = {
		Innovation: 'bg-yellow-800/60',
		Competition: 'bg-amber-800/60',
		Case: 'bg-secondary-red/60',
		Hackathon: 'bg-violet-900/60'
	};

	const eventDateIndex = newsInDate.map((news) => {
		for (let i = 0; i < news.dates.length; i++) {
			if (
				news.dates[i].startDate === date.toString() ||
				news.dates[i].endDate === date.toString()
			) {
				return i;
			}
		}
		return -1;
	});

	let dummyEventDateIndex: number;
	for (let i = 0; i < dummyNews.dates.length; i++) {
		if (!dummyNews.dates[i].endDate) {
			continue;
		}
		if (day.isBetween(moment(dummyNews.dates[i].startDate), moment(dummyNews.dates[i].endDate))) {
			dummyEventDateIndex = i;
		}
	}
</script>

<div
	class="cursor-pointer item-center flex h-full w-full justify-start gap-4 overflow-visible bg-gray-200/30 pr-2"
>
	<div class="flex w-2 flex-col">
		<!-- {#each correctTags as tag, i (i)}
			<div class={`h-full ${tagColors[tag]} w-2`}></div>
		{/each} -->
		<div class={`h-full ${color} w-2`}></div>
	</div>
	<div class="grid w-full grid-cols-10 gap-0">
		{#if type === 'single'}
			<div class="col-span-2 mt-1 gap-0 font-bold text-gray-700">
				<div class="w-full">
					<h1 class="text-3xl">{day.date()}</h1>
				</div>
				<div>
					<h3 class="text-sm">{day.format('MMM')}</h3>
				</div>
			</div>
		{:else if type === 'period'}
			<div class="col-span-2 mt-1 flex flex-row gap-1 font-bold text-gray-700">
				<div>
					<div class="w-full">
						<h1 class="flex text-3xl">
							{startDay.date()}
						</h1>
					</div>
					<div>
						<h3 class="-mt-1 text-sm">{startDay.format('MMM')}</h3>
					</div>
				</div>
				<div class="mt-1 flex flex-col text-base">
					-{endDay.date()}
					{#if endDay.month() !== startDay.month()}
						<div class="ml-1 text-xs">{endDay.format('MMM')}</div>
					{/if}
				</div>
			</div>
		{:else}
			<div class="col-span-2 mt-1 flex flex-row gap-1 font-bold text-gray-700">
				<div>
					<div class="w-full">
						<h1 class="flex text-3xl">
							{moment(dummyNews.dates[dummyEventDateIndex].startDate).date()}
						</h1>
					</div>
					<div>
						<h3 class="-mt-1 text-sm">
							{moment(dummyNews.dates[dummyEventDateIndex].startDate).format('MMM')}
						</h3>
					</div>
				</div>
				<div class="mt-1 flex flex-col text-base">
					-{moment(dummyNews.dates[dummyEventDateIndex].endDate).date()}
				<div class="ml-1 text-xs">
					{moment(dummyNews.dates[dummyEventDateIndex].endDate).format('MMM')}
				</div>
				</div>
			</div>
		{/if}
		{#if type === 'dummy'}
			<div class="col-span-7 col-start-4 ml-6 md:col-start-3">
				<div class="pb-4 pt-1">
					<h1 class="text-lg font-bold text-gray-700">{dummyNews.topic}</h1>
					{#if dummyNews.dates[dummyEventDateIndex].time}
						<div class="flex flex-row items-center gap-1">
							<!-- <Icon name="clock" class="fill-none stroke-gray-500 stroke-2" /> -->
							<img class="size-6" id="clock" alt="clock" src={clock} />
							<p class="pb-[0.1rem] text-sm font-semibold text-gray-700">
								{dummyNews.dates[dummyEventDateIndex].time || '-'}
							</p>
						</div>
					{/if}
					{#if dummyNews.dates[dummyEventDateIndex].location}
						<div class="flex flex-row items-center gap-1">
							<!-- <Icon name="location" class="fill-none stroke-gray-500 stroke-2" /> -->
							<img class="size-6" id="location" alt="location" src={location} />
							<p class="text-sm font-semibold text-gray-700">
								{dummyNews.dates[dummyEventDateIndex].location || '-'}
							</p>
						</div>
					{/if}
					<div class="flex flex-row flex-wrap gap-2 pt-2">
						{#each dummyNews.tags as tag}
							<Tag {...tag.props} class="bg-opacity-50">
								{tag.label}
							</Tag>
						{/each}
					</div>
				</div>
			</div>
		{:else}
			<div class="col-span-7 col-start-4 ml-6 md:col-start-3">
				{#if newsInDate.length > 2}
					{#each newsInDate.slice(0, 2) as news, i (i)}
						<div class="pb-4 pt-1">
							<h1 class="text-lg font-bold text-gray-700">{news.topic}</h1>
							{#if news.dates[eventDateIndex[i]].time}
								<div class="flex flex-row items-center gap-1">
									<!-- <Icon name="clock" class="fill-none stroke-gray-500 stroke-2" /> -->
									<img class="size-6" id="clock" alt="clock" src={clock} />
									<p class="pb-[0.1rem] text-sm font-semibold text-gray-700">
										{news.dates[eventDateIndex[i]].time || '-'}
									</p>
								</div>
							{/if}
							{#if news.dates[eventDateIndex[i]].location}
								<div class="flex flex-row items-center gap-1">
									<!-- <Icon name="location" class="fill-none stroke-gray-500 stroke-2" /> -->
									<img class="size-6" id="location" alt="location" src={location} />
									<p class="text-sm font-semibold text-gray-700">
										{news.dates[eventDateIndex[i]].location || '-'}
									</p>
								</div>
							{/if}
							<div class="flex flex-row flex-wrap gap-2 pt-2">
								{#each news.tags as tag}
									<Tag {...tag.props} class="bg-opacity-50">
										{tag.label}
									</Tag>
								{/each}
							</div>
						</div>
					{/each}
					<div class="lpt-1 pb-4 text-lg font-bold tracking-wider text-gray-400">...More</div>
				{:else}
					{#each newsInDate as news, i (i)}
						<div class="pb-4 pt-1">
							<h1 class="text-lg font-bold text-gray-700">{news.topic}</h1>
							{#if news.dates[eventDateIndex[i]].time}
								<div class="flex flex-row items-center gap-1">
									<!-- <Icon name="clock" class="fill-none stroke-gray-500 stroke-2" /> -->
									<img class="size-6" id="clock" alt="clock" src={clock} />
									<p class="pb-[0.1rem] text-sm font-semibold text-gray-700">
										{news.dates[eventDateIndex[i]].time || '-'}
									</p>
								</div>
							{/if}
							{#if news.dates[eventDateIndex[i]].location}
								<div class="flex flex-row items-center gap-1">
									<!-- <Icon name="location" class="fill-none stroke-gray-500 stroke-2" /> -->
									<img class="size-6" id="location" alt="location" src={location} />
									<p class="text-sm font-semibold text-gray-700">
										{news.dates[eventDateIndex[i]].location || '-'}
									</p>
								</div>
							{/if}
							<div class="flex flex-row flex-wrap gap-2 pt-2">
								{#each news.tags as tag}
									<Tag {...tag.props} class="bg-opacity-50">
										{tag.label}
									</Tag>
								{/each}
							</div>
						</div>
					{/each}
				{/if}
			</div>
		{/if}
	</div>
</div>
