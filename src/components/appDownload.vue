<template>
	<div class="download-bar">
		<div class="g-clear">
			<div class="close-div fl"><i class="close-ico el-icon-close"></i></div>
			<div class="center-div fl">
				<p class="fs-16">弹个车APP</p>
				<p class="fs-12">首付低至10%</p>
			</div><span class="down-app fr text-center">下载APP</span>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.close-div {
		display: inline-block;
		width: 1.5rem;
		margin-top: 0.9375rem;
		height: 1.5rem;
	}

	.close-ico {
		width: 0.5rem;
		height: 0.5rem;
		background-size: contain;
		display: inline-block;
	}

	.center-div {
		display: inline-block;
		width: 65%;
		margin-top: 0.4375rem;
	}

	.fs-16 {
		font-size: 1rem;
	}

	.fs-12 {
		font-size: 0.75rem;
	}

	.fl {
		float: left;
	}

	.fr {
		float: right;
	}

	.download-bar .down-app {
		width: 4.6875rem;
		height: 2rem;
		line-height: 2rem;
		background-color: #ffdc00;
		border-radius: 0.25rem;
		margin-top: 0.6875rem;
	}

	.download-bar .g-clear {
		top: 0;
		right: 0;
		left: 0;
		height: 54px;
		padding: 0 15px;
		background-color: #f3f3f3;
		-webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
		box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
	}

	.g-clear:after {
		content: "";
		display: block;
		clear: both;
	}
</style>
