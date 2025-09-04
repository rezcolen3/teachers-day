<script>
	import { onMount } from 'svelte';
	import Letter from './letter.svelte';

	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	let stage = 1;

	function stage2() {
		if (stage !== 1) return;
		stage++;

		document.querySelector('.in-box').classList.replace('in-box', 'free');
		document.querySelector('.mail-box').classList.replace('mail-box', 'outside');
	}

	async function stage3() {
		if (stage !== 2) return;
		stage++;

		document.querySelector('.outside').classList.replace('outside', 'outside-fully-out');
		await sleep(200);
		document.querySelector('.letter').classList.replace('letter', 'letter-fully-out');
	}

	let teacherName;
	let subject;

    onMount(() => {
        const params = new URLSearchParams(window.location.search);
        teacherName = params.get('name') || 'Vani mam';
        subject = params.get('subject') || 'English';
    });
</script>

<div class="container">
	<div class="circle">
		<div class="mail-box" onclick={() => stage2()}>
			<div class="box-flap"></div>
			<div class="box-inside"></div>
			<div class="box-pole"></div>
			<div class="mail in-box">
				<div class="mail-content">
					<div class="mail-wraper" onclick={() => stage3()}>
						<span class="from">
							<span class="toorfrom"> From: </span> The Boys of Class 7th A
						</span>

						<span class="to">
							<span class="toorfrom"> To: </span> The best {subject} teacher, {teacherName}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

{#if stage > 1}
	<div class="letter">
		<div style="padding: 20px;">
			<Letter {teacherName} {subject} />
		</div>
	</div>
{/if}
