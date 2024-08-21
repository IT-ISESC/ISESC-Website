<script lang="ts">
	import { Calendar } from 'bits-ui';
	import Icon from '../icons/icon.svelte';

	const isDateUnavailable: Calendar.Props['isDateUnavailable'] = (date) => {
		return false;
	};

  type EventDates = {
    startDate: string
    endDate?: string
    specialDate?: string[]
  }

	export let eventDates: EventDates[] = [
    {
      startDate: '',
      endDate: '',
      specialDate: ['2024-08-28']
    }
  ]

</script>

<Calendar.Root
	class="border-dark-10 bg-background-alt mt-6 rounded-[15px] border p-[22px] shadow-card"
	let:months
	let:weekdays
	{isDateUnavailable}
	weekdayFormat="short"
	fixedWeeks={true}
>
	<Calendar.Header class="flex items-center justify-between">
		<Calendar.Heading class="text-xl font-bold" />
		<div class="flex items-center justify-end">
			<Calendar.PrevButton
				class="rounded-9px bg-background-alt active:scale-98 inline-flex size-10 items-center justify-center font-bold hover:bg-muted active:transition-all"
			>
				<Icon name="chevronLeft" class="size-auto fill-current stroke-black stroke-0" />
			</Calendar.PrevButton>
			<Calendar.NextButton
				class="rounded-9px bg-background-alt active:scale-98 inline-flex size-10 items-center justify-center font-bold hover:bg-muted active:transition-all"
			>
				<Icon name="chevronRight" class="size-auto fill-current stroke-black stroke-0" />
			</Calendar.NextButton>
		</div>
	</Calendar.Header>
	<div class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
		{#each months as month, i (i)}
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
				<Calendar.GridBody class="border-r-2 border-t-2 overflow-x-hidden ">
					{#each month.weeks as weekDates}
						<Calendar.GridRow class="flex w-full" >
						{#each weekDates as date}
								<Calendar.Cell
									{date}
									class="relative w-full !p-0 text-center text-sm"
								>
									<Calendar.Day
										{date}
										month={month.value}
										class={`rounded-9px group relative inline-flex size-10 w-full items-center justify-center whitespace-nowrap bg-transparent p-0 text-sm font-normal text-foreground hover:border-foreground data-[disabled]:pointer-events-none data-[outside-month]:pointer-events-none data-[selected]:bg-[#45539D] data-[selected]:font-medium data-[disabled]:text-foreground/30 data-[selected]:text-background data-[unavailable]:text-muted-foreground data-[unavailable]:line-through overflow-visible border-l-2 border-b-2 `}>
									{#if eventDates[0].specialDate?.includes(date.toString())}
											<div
												class="absolute top-[5px] size-1 rounded-full bg-foreground group-data-[today]:block group-data-[selected]:bg-background"
											></div>
										{/if}
										<div
											class="absolute top-[5px] hidden size-1 rounded-full bg-foreground group-data-[today]:block group-data-[selected]:bg-background"
										></div>
										{date.day}
										{#if true}
										<div
											class="absolute bottom-1 w-[calc(100%+5%)] h-0.5 bg-foreground group-data-[selected]:bg-background  "
										></div>
										{/if}
									</Calendar.Day>
								</Calendar.Cell>
							{/each}
						</Calendar.GridRow>
					{/each}
				</Calendar.GridBody>
			</Calendar.Grid>
		{/each}
	</div>
</Calendar.Root>


