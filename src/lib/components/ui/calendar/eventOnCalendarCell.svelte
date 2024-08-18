<script lang="ts">
	import { Calendar } from 'bits-ui';
	import type { News } from '../news/newsCard/newsCard';
	import moment from 'moment';
	import Icon from '../icons/icon.svelte';
	import type { TagProps, TagLabel } from '$lib/components/ui/tag/index';

	export let date;
	export let month;
	export let ids: number[] = [];
	export let type: 'single' | 'period' | 'dummy' = 'single';
	export let news: News[];
	export let eventsPeriods;
	export let event: {
		eventId: number;
		date: string;
		type: string;
	} = {
		eventId: -1,
		date: '-1',
		type: '-1'
	};

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

<div class="pr-2 item-center flex h-full w-full justify-start gap-4 overflow-visible bg-gray-200/30">
	<div class="flex w-2 flex-col">
		{#each correctTags as tag, i (i)}
			<div class={`h-full ${tagColors[tag]} w-2`}></div>
		{/each}
	</div>
	{#if type === 'single'}
		<div class="mt-1 flex flex-col gap-0 font-bold text-gray-400">
			<!-- <h1 class="w-20 text-3xl">{day.date()}</h1>
			<h3 class="text-sm">{day.format('MMM')}</h3> -->
			<div class="w-10">
				<h1 class="relative text-3xl">{day.date()}</h1>
			</div>
			<div>
				<h3 class="text-sm">{day.format('MMM')}</h3>
			</div>
		</div>
	{:else if type === 'period'}
		<div class="mt-1 flex flex-col gap-0 font-bold text-gray-400">
			<div class="w-10">
				<h1 class="relative text-3xl">
					{startDay.date()}
					<div class="absolute top-0 mt-1 inline text-base">
						-{endDay.date()}
					</div>
					{#if endDay.month() !== startDay.month()}
						<div class="absolute left-10 top-6 text-xs">{endDay.format('MMM')}</div>
					{/if}
				</h1>
			</div>
			<div>
				<h3 class="text-sm">{startDay.format('MMM')}</h3>
			</div>
		</div>
	{:else}
		<div class="mt-1 flex flex-col gap-0 font-bold text-gray-400">
			<div class="w-10">
				<h1 class="relative text-3xl">
					{moment(dummyNews.dates[dummyEventDateIndex].startDate).date()}
					<div class="absolute top-0 mt-1 inline text-base">
						-{moment(dummyNews.dates[dummyEventDateIndex].endDate).date()}
					</div>
					<div class="absolute left-10 top-6 text-xs">
						{moment(dummyNews.dates[dummyEventDateIndex].endDate).format('MMM')}
					</div>
				</h1>
			</div>
			<div>
				<h3 class="text-sm">
					{moment(dummyNews.dates[dummyEventDateIndex].startDate).format('MMM')}
				</h3>
			</div>
		</div>
	{/if}
	{#if type === 'dummy'}
		<div class="ml-6 flex flex-col">
				<div class="pb-4 pt-1">
					<h1 class="text-lg font-bold text-gray-600">{dummyNews.topic}</h1>
					<div class="flex flex-row items-center gap-1">
						<Icon name="clock" class="fill-none stroke-gray-500 stroke-2" />
						<p class="pb-[0.1rem] text-sm font-semibold text-gray-500">
							{dummyNews.dates[dummyEventDateIndex].time || 'All Day'}
						</p>
					</div>
					<div class="flex flex-row items-center gap-1">
						<Icon name="location" class="fill-none stroke-gray-500 stroke-2" />
						<p class="text-sm font-semibold text-gray-500">
							{dummyNews.dates[dummyEventDateIndex].location || 'TBA'}
						</p>
					</div>
				</div>
		</div>
	
	{:else}
		<div class="ml-6 flex flex-col">
			{#each newsInDate as news, i (i)}
				<div class="pb-4 pt-1">
					<h1 class="text-lg font-bold text-gray-600">{news.topic}</h1>
					<div class="flex flex-row items-center gap-1">
						<Icon name="clock" class="fill-none stroke-gray-500 stroke-2" />
						<p class="pb-[0.1rem] text-sm font-semibold text-gray-500">
							{news.dates[eventDateIndex[i]].time || 'All Day'}
						</p>
					</div>
					<div class="flex flex-row items-center gap-1">
						<Icon name="location" class="fill-none stroke-gray-500 stroke-2" />
						<p class="text-sm font-semibold text-gray-500">
							{news.dates[eventDateIndex[i]].location || 'TBA'}
						</p>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
