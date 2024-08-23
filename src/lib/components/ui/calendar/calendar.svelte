<script lang="ts">
	import { Calendar } from 'bits-ui';
	import Icon from '../icons/icon.svelte';
	import moment from 'moment';
	import { createCalendar } from '@melt-ui/svelte';
	import { createDialog } from '@melt-ui/svelte'
	import type { News } from '$lib/components/ui/news/newsCard/newsCard';
	import CalendarModal from './calendarModal/calendarAccodion.svelte'

	const {
		elements: { heading, prevButton, nextButton },
		states: { months, headingValue }
	} = createCalendar();

	const {
		elements: {
			trigger,
			overlay,
			content,
			title,
			description,
			close,
			portalled,
		},
		states: { open },
	} = createDialog({
		forceVisible: true,
	})

	const isDateUnavailable: Calendar.Props['isDateUnavailable'] = (date) => {
		return false;
	};

	export let news: News[];

	export let colors: Array<string[]>

	const positions = [
		'bottom-[2%]',
		'bottom-[9%]',
		'bottom-[17%]',
		'bottom-[25%]'
	]

	let eventsInDate: any = {}
	let clickedDate: string

	const addEventToDate = (eventId: number, date: string) => {
		if (eventsInDate[date]) {
			eventsInDate[date].push(eventId)
		} else {
			eventsInDate[date] = [eventId]
		}
		return ''
	}

	const intersect = (arr1: number[], arr2: number[]) => {
		return arr1.filter((val1) => {
			return arr2.indexOf(val1) !== -1
		})
	}

	$: ids = eventsInDate[clickedDate] || []

	$: filteredIds = news.map((Onew) => Onew.id)

	const checkEvent = () => {
		if (ids === undefined || ids.length === 0 || intersect(filteredIds, ids).length === 0) {
			$open = false
		}
	}

</script>

<Calendar.Root
	class="border-dark-10 bg-background-alt mt-6 rounded-[0.9375rem] border p-[1.375rem] shadow-card"
	{isDateUnavailable}
	let:weekdays
	weekdayFormat="short"
	fixedWeeks={true}
>
	<Calendar.Header class="flex items-center justify-between">
		<div class="text-xl font-bold" {...$heading} use:heading>
			{$headingValue}
		</div>
		<div class="flex items-center justify-end">
			<div
				class="rounded-[0.5625rem] bg-background-alt active:scale-98 inline-flex size-10 items-center justify-center font-bold hover:bg-muted active:transition-all"
				{...$prevButton}
				use:prevButton
			>
				<Icon name="chevronLeft" class="size-auto fill-current stroke-black stroke-0" />
			</div>
			<div
				class="rounded-[0.5625rem] bg-background-alt active:scale-98 inline-flex size-10 items-center justify-center font-bold hover:bg-muted active:transition-all"
				{...$nextButton}
				use:nextButton
			>
				<Icon name="chevronRight" class="size-auto fill-current stroke-black stroke-0" />
			</div>
		</div>
	</Calendar.Header>
	<div class="w-full flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
		{#each $months as month, i (i)}
			<Calendar.Grid class="w-full border-collapse select-none space-y-1">
				<Calendar.GridHead>
					<Calendar.GridRow class="mb-1 flex w-full justify-between">
						{#each weekdays as day}
							<Calendar.HeadCell
								class="w-full rounded-md text-xs !font-normal text-muted-foreground"
							>
								<div class="font-bold text-black">{day.slice(0, 2)}</div>
							</Calendar.HeadCell>
						{/each}
					</Calendar.GridRow>
				</Calendar.GridHead>
				<Calendar.GridBody class="overflow-hidden border-r-2 border-t-2 ">
					{#each month.weeks as weekDates}
						<Calendar.GridRow class="flex w-full">
							{#each weekDates as date}
								<Calendar.Cell {date} class="aspect-square overflow-visible relative w-full !p-0 text-center text-sm">
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<!-- svelte-ignore a11y-no-static-element-interactions -->
								<div class="h-full" {...$trigger} use:trigger on:mouseenter={() => { 
								clickedDate = date.toString()
								}}
								on:click={checkEvent}
								>
									<Calendar.Day
										{date}
										month={month.value}
										class={`h-full overflow-visible rounded-9px group relative inline-flex size-10 w-full items-center justify-center whitespace-nowrap border-b-2 border-l-2 bg-transparent p-0 text-sm font-normal ${moment(date.toString()).isBefore(moment(), 'day') ? 'text-black/30' : 'text-black'} data-[disabled]:pointer-events-none data-[outside-month]:pointer-events-none data-[disabled]:text-foreground/30 data-[unavailable]:text-muted-foreground data-[unavailable]:line-through `}
									>
										<div class="dot-container  item-center absolute top-0.5 right-0.5 flex-col justify-center gap-0.5">
											{#each news as Onew, i (Onew.id)}
											{#each Onew.dates as eventDate}
												{#if eventDate.specialDates?.includes(date.toString())}
													{addEventToDate(Onew.id, date.toString())}
													<div
														class={`size-2 rounded-full ${moment(date.toString()).isBefore(moment(), 'day') ? colors[Onew.id - 1][1] : colors[Onew.id - 1][0]} group-data-[today]:block `}
													></div>
												{:else if (!eventDate.endDate || eventDate.startDate === eventDate.endDate) && date.toString() === eventDate.startDate}
													{addEventToDate(Onew.id, date.toString())}
													<div
														class={`size-2 rounded-full ${moment(date.toString()).isBefore(moment(), 'day') ? colors[Onew.id - 1][1] : colors[Onew.id - 1][0]} group-data-[today]:block `}
													></div>
												{/if}
												{/each}
											{/each}
										</div>
										<div
											class="absolute top-2 hidden size-1 lg:size-2 rounded-full bg-foreground group-data-[today]:block "
										></div>
										{date.day}
										<div class="h-full overflow-visible gap-0.5 w-[calc(100%+3px)] item-center absolute bottom-0 space-y-0.5 ">
											{#each news as Onew (Onew.id)}
												{#each Onew.dates as eventDate}
												{#if eventDate.endDate && eventDate.endDate !== eventDate.startDate}
													{#if moment(date.toString()).isBetween(moment(eventDate.startDate), moment(eventDate.endDate))}
													{addEventToDate(Onew.id, date.toString())}
														<div
															class={`absolute ${positions[Onew.id - 1]} z-10 h-[5%] w-full ${moment(date.toString()).isBefore(moment(), 'day') ? colors[Onew.id - 1][1] : colors[Onew.id - 1][0]}`} 
														></div>
													{:else if date.toString() === eventDate.startDate}
													{addEventToDate(Onew.id, date.toString())}
														<div
															class={`absolute right-0 ${positions[Onew.id - 1]} ml-2 z-10 h-[5%] w-4/5 rounded-full  ${moment(date.toString()).isBefore(moment(), 'day') ? colors[Onew.id - 1][1] : colors[Onew.id - 1][0]}`} 
														></div>
													{:else if date.toString() === eventDate.endDate}
													{addEventToDate(Onew.id, date.toString())}
														<div
															class={`absolute left-0 ${positions[Onew.id - 1]} z-10 h-[5%] w-4/5 rounded-full  ${moment(date.toString()).isBefore(moment(), 'day') ? colors[Onew.id - 1][1] : colors[Onew.id - 1][0]}`} 
														></div>
													{/if}
												{/if}
												{/each}
											{/each}
										</div>
									</Calendar.Day>
								</div>
								</Calendar.Cell>
							{/each}
						</Calendar.GridRow>
					{/each}
				</Calendar.GridBody>
			</Calendar.Grid>
		{/each}
	</div>
</Calendar.Root>

{#if $open}
	<CalendarModal {news} bind:ids {overlay} modalContent={content} {title} {description} {close} {portalled}/>
{/if}


<style>
	.dot-container div:not(:first-of-type) {
		margin-top: -0.17rem;
	}
</style>
