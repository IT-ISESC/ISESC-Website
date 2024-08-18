<script lang="ts">
	import { Calendar } from 'bits-ui';
	import Icon from '../icons/icon.svelte';
	import moment from 'moment';
	import { createCalendar } from '@melt-ui/svelte';
	import { createDialog } from '@melt-ui/svelte';
	import type { News } from '$lib/components/ui/news/newsCard/newsCard';
	import CalendarModal from './calendarModal/calendarAccodion.svelte';
	import CalendarCell from './eventOnCalendarCell.svelte';
	import { onMount } from 'svelte';

	const {
		elements: { heading, prevButton, nextButton },
		states: { months, headingValue }
	} = createCalendar();

	const {
		elements: { trigger, overlay, content, title, description, close, portalled },
		states: { open }
	} = createDialog({
		forceVisible: true
	});

	const isDateUnavailable: Calendar.Props['isDateUnavailable'] = (date) => {
		return false;
	};

	export let news: News[];

	export let colors: Array<string[]>;

	const positions = ['bottom-[2%]', 'bottom-[9%]', 'bottom-[17%]', 'bottom-[25%]'];


	let eventsInDate: any = {};
	let eventsPeriods: any = {};
	let eventsDummyDate: any = {};
	let clickedDate: string;

	const addEventDummy = (eventId: number, date: string) => {
		if (eventsDummyDate[date]) {
			eventsDummyDate[date].push(eventId);
		} else {
			eventsDummyDate[date] = [eventId];
		}
	};

	const addEventToDate = (eventId: number, date: string) => {
		if (eventsInDate[date]) {
			eventsInDate[date].push(eventId);
		} else {
			eventsInDate[date] = [eventId];
		}
	};

	const addEventToPeriod = (eventId: number, startDate: string, endDate: string) => {
		if (eventsPeriods[startDate]) {
			eventsPeriods[startDate].push({
				eventId,
				date: endDate,
				type: 'startDate'
			});
		} else {
			eventsPeriods[startDate] = [
				{
					eventId,
					date: endDate,
					type: 'startDate'
				}
			];
		}
		if (eventsPeriods[endDate]) {
			eventsPeriods[endDate].push({
				eventId,
				date: startDate,
				type: 'endDate'
			});
		} else {
			eventsPeriods[endDate] = [
				{
					eventId,
					date: startDate,
					type: 'endDate'
				}
			];
		}
	};

	const intersect = (arr1: number[], arr2: number[]) => {
		return arr1.filter((val1) => {
			return arr2.indexOf(val1) !== -1;
		});
	};

	$: singleDateIds = eventsInDate[clickedDate] || [];
	$: ids = singleDateIds;

	$: filteredIds = news.map((Onew) => Onew.id);

	const checkEvent = () => {
		if (ids === undefined || ids.length === 0 || intersect(filteredIds, ids).length === 0) {
			$open = false;
		}
	};

	$: {
		eventsInDate = {};
		eventsPeriods = {};
		eventsDummyDate = {};
		for (let Onew of news) {
			for (let eventDate of Onew.dates) {
				if (!eventDate.endDate || eventDate.startDate === eventDate.endDate) {
					addEventToDate(Onew.id, eventDate.startDate);
				} else {
					addEventToPeriod(Onew.id, eventDate.startDate, eventDate.endDate);
					if (moment(eventDate.endDate).month() - moment(eventDate.startDate).month() > 1) {
						for (
							let i = moment(eventDate.startDate).month() + 1;
							i < moment(eventDate.endDate).month();
							i++
						) {
							const dateString = moment().month(i).startOf('month').format('YYYY-MM-DD');
							addEventDummy(Onew.id, dateString);
						}
					}
				}
			}
		}
	}

	let monthsWithEvent: number[];

	$: {
		let monthsWithSingleEvent = Object.keys(eventsInDate).map((dateString) =>
			moment(dateString).month()
		);
		let monthsWithPeriodEvent = Object.keys(eventsPeriods).map((dateString) =>
			moment(dateString).month()
		);
		let monthsWithDummyEvent = Object.keys(eventsDummyDate).map((dateString) =>
			moment(dateString).month()
		);
		let monthsWithEventSet = new Set([
			...monthsWithSingleEvent,
			...monthsWithPeriodEvent,
			...monthsWithDummyEvent
		]);
		monthsWithEvent = [...monthsWithEventSet];
	}

	$: console.log(eventsDummyDate);
</script>

<Calendar.Root
	class="border-dark-10 bg-background-alt mt-6 rounded-[0.9375rem] border px-4 py-[1.375rem] shadow-card"
	{isDateUnavailable}
	let:weekdays
	weekdayFormat="short"
	fixedWeeks={true}
>
	<Calendar.Header class="flex items-center justify-between gap-2">
		<div class="text-2xl font-bold" {...$heading} use:heading>
			{$headingValue}
		</div>
		<div class="flex items-center justify-end">
			<div
				class="bg-background-alt active:scale-98 inline-flex size-10 items-center justify-center rounded-[0.5625rem] font-bold hover:bg-muted active:transition-all"
				{...$prevButton}
				use:prevButton
			>
				<Icon name="chevronLeft" class="size-auto fill-current stroke-black stroke-0" />
			</div>
			<div
				class="bg-background-alt active:scale-98 inline-flex size-10 items-center justify-center rounded-[0.5625rem] font-bold hover:bg-muted active:transition-all"
				{...$nextButton}
				use:nextButton
			>
				<Icon name="chevronRight" class="size-auto fill-current stroke-black stroke-0" />
			</div>
		</div>
	</Calendar.Header>
	<div class="flex w-full flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
		{#each $months as month, i (i)}
			<div class="w-full border-collapse select-none space-y-1">
				<!-- <Calendar.GridHead>
					<Calendar.GridRow class="mb-1 flex w-full justify-between"></Calendar.GridRow>
				</Calendar.GridHead> -->
				<div class="border-r-2 border-t-2 border-gray-200">
					{#if !monthsWithEvent.includes(month.value.month - 1)}
						<div
							class="flex h-32 w-full flex-row items-center justify-center border-b-2 border-l-2 border-gray-200 bg-gray-200/30 text-center"
						>
							<h1 class="text-3xl font-bold text-gray-400">No Events...</h1>
						</div>
					{:else}
						{#each month.weeks as weekDates}
							<div class="flex w-full flex-col">
								{#each weekDates as date}
									{#if Object.keys(eventsDummyDate).includes(date.toString()) && moment(date.toString()).month() + 1 === month.value.month}
										{#each eventsDummyDate[date.toString()] as event}
											<!-- Dummy events -->
											<!-- svelte-ignore a11y-click-events-have-key-events -->
											<!-- svelte-ignore a11y-no-static-element-interactions -->
											<div
												{...$trigger}
												use:trigger
												class="h-full w-full border-b-2 border-l-2 border-gray-200"
												on:click={() => {
													ids = [event];
												}}
											>
												<CalendarCell
													{news}
													type={'dummy'}
													{date}
													{month}
													ids={[event]}
													bind:eventsPeriods
												/>
											</div>
										{/each}
									{/if}
									{#if Object.keys(eventsInDate).includes(date.toString()) && moment(date.toString()).month() + 1 === month.value.month}
										<!-- Single date events -->
										<!-- svelte-ignore a11y-click-events-have-key-events -->
										<!-- svelte-ignore a11y-no-static-element-interactions -->
										<div
											{...$trigger}
											use:trigger
											class="h-full w-full border-b-2 border-l-2 border-gray-200"
											on:mouseenter={() => {
												clickedDate = date.toString();
											}}
											on:click={checkEvent}
										>
											<CalendarCell
												{news}
												type={'single'}
												{date}
												{month}
												ids={eventsInDate[date.toString()]}
												bind:eventsPeriods
											/>
										</div>
									{/if}
									{#if Object.keys(eventsPeriods).includes(date.toString()) && moment(date.toString()).month() + 1 === month.value.month}
										{#each eventsPeriods[date.toString()] as event}
											{#if !(event.type === 'endDate' && moment(event.date).month() === moment(date.toString()).month())}
												<!-- Period events -->
												<!-- svelte-ignore a11y-click-events-have-key-events -->
												<!-- svelte-ignore a11y-no-static-element-interactions -->
												<div
													{...$trigger}
													use:trigger
													class="h-full w-full border-b-2 border-l-2 border-gray-200"
													on:click={() => {
														ids = [event.eventId];
													}}
												>
													<CalendarCell
														{news}
														type={'period'}
														{date}
														{month}
														bind:eventsPeriods
														{event}
													/>
												</div>
											{/if}
										{/each}
									{/if}
								{/each}
							</div>
						{/each}
					{/if}
				</div>
			</div>
		{/each}
	</div>
</Calendar.Root>

{#if $open}
	<CalendarModal
		{news}
		bind:ids
		{overlay}
		modalContent={content}
		{title}
		{description}
		{close}
		{portalled}
	/>
{/if}
