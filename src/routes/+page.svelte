<script>
	let stage = 1;

	function stage2() {
		stage++;

		document.querySelector('.in-box').classList.replace('in-box', 'free');
		document.querySelector('.mail-box').classList.replace('mail-box', 'outside');
	}
</script>

<div class="container">
	<div class="circle">
		<div class="mail-box" onclick={() => stage2()}>
			<div class="box-flap"></div>
			<div class="box-inside"></div>
			<div class="box-pole"></div>
			<div class="mail in-box">
				<div class="mail-content">
					<span class="from"> <span class="toorfrom"> From: </span> The Boys of Class 7th A </span>

					<span class="to">
						<span class="toorfrom"> To: </span> The best english teacher, Vani Mam
					</span>
				</div>
			</div>
		</div>
	</div>
</div>

{#if stage === 2}
	<div class="letter"></div>
{/if}
