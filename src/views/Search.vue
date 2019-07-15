<template>
	<div class="pg-index-search content-height">
		<div class="search-header">
			<div class="flex search-wrapper">
				<div class="form-wrapper  radius flex flex-1">
					<el-select v-model="value" placeholder="新车" class="bubble">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" class="text-center">
						</el-option>

					</el-select>
					<el-input placeholder="请输入内容" v-model="kword" v-on:keyup="search"></el-input>
				</div>
				<!-- 				<ul class="bubble" style="display: none;">
					<span></span>
					<li class="text-center">新车</li>
					<div class="split-line"></div>
					<li class="text-center">二手车</li>
				</ul> -->
				<div @click="back"><span class="fs-16 cancel">取消</span></div>
			</div>
			<ul class="suggest-key-list" style="display: none;">
				<li>抱歉，暂无相关品牌或车系</li>
			</ul>
		</div>
		<div class="co-search-history" storagename="H5_LIST_SEARCH_LIST">
			<div class="history-list search-list" style="display: none;">
				<div class="history list-header">
					<span class="text-gray">历史搜索</span>
					
					// <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAALGPC/xhBQAAAu9JREFUeAHtW71uE0EQ3jGGiiLQIQceAApegQopL2AJCip+uhRGIlQUdCDhIhJCBCoaJD8CBeIVKHgBIKJDKajwxct+Fm5GN+e93VlfLhkXiWdm95uZb+d2R2vbOXsZA8aAMWAMnF0GqFTqs9nswuHh0XPv/D3v3ZUUP0TuFzn6MBptPRuPx39TMNbNGa4bkGpH8gvv91LnYx6ICwTuBSyIT/FH+zXQBlzhYeVX73P/a2LxWIoRwB2dVLkYAXh2tZLWxOIxFSMAG9eA6AU2Mu40VsZcYAArdo6NMwaMAWOgDQNiJ6jRybUJpMTYmE5S7AQ1OrkSSbXBjOkkxWOwZPfVJgmNsU25iARoOO4DhkhAye5r08Q05SISoNHJbTpR7i+mkxRPAQ7G5VfTt57rID+ePErGrMPjOm2/YgVwx6dVNgJO68rG5iU2QrEAGuP2999tz4/9S3L+FvC8oy/nz9GT3d0HPzXwmzA6fwSQfFX5r+EC8M6yc8MFangPHWxNwWvYOicAKx86tcs8Gehg43ptuXMCVmVfl1iTrW58iq5zAlKC1pzTOQHY8KSEmmzSnLb6zgnAbh969d88cOhg43ptuXMCcNQNh3TTEX1cXmDgFjm8h24Tx+CJ6AP+J3pXe3Vj8DqvgJggS44xAkqy2wdsq4A+rFLJGK0CSrLbB2yrgD6sUskYrQJKstsHbKuAPqxSyRitAkqy2wfs5AoIlxd/6hIseZUtYUux1MXHdckEhDv87xwMcnXsD6RA68bH6oAJ7LrxUix1Y7ku+UZoQO7TwrvrHNB7vzOv/I/wKS43ZcnzaiHORyyicY0howLofcCWo1rjWNEcvpS+jCUJMpmAyeThN0fuTZJXzUkhhmUsiZjJBMDf1dGlCRF9TvSdPQ2+EUMOUBYB+BXH9mhrJ1TC6xDEJh+HBXzCd+4vSdS+zjKdHtwg8vfDxng7HEvXws58MWdl+FwcddjtseHhmc8pe45tsjFgDBgDxsBZZeAf1pDiJdwSVFAAAAAASUVORK5CYII="
					//  alt="" width="16">
				</div>
			</div>
		</div>
		<div class="co-search-hot" storagename="H5_LIST_SEARCH_LIST">
			<div class="hot-list search-list" style="">
				<div class="hot list-header">
					<span class="text-gray">热门搜索</span>
				</div>
				<router-link to="/buy?orderBy=&amp;brandCode=brand-29">
					<el-button size="medium" round class="key-word-label">标致</el-button>
				</router-link>
				<router-link to="/buy?orderBy=&amp;brandCode=brand-30">
					<el-button size="medium" round class="key-word-label">别克</el-button>
				</router-link>
				<router-link to="/buy?orderBy=&amp;brandCode=brand-41">
					<el-button size="medium" round class="key-word-label">大众</el-button>
				</router-link>
				<router-link to="/buy?orderBy=&amp;brandCode=brand-102">
					<el-button size="medium" round class="key-word-label">马自达</el-button>
				</router-link>
				<router-link to="/buy?orderBy=&amp;brandCode=brand-53">
					<el-button size="medium" round class="key-word-label">福特</el-button>
				</router-link>
				<router-link to="/buy?orderBy=&amp;prepaidAmount=0-10000">
					<el-button size="medium" round class="key-word-label">首付1万以内</el-button>
				</router-link>
				<router-link to="/buy?orderBy=&amp;carShapeCode=compactCar">
					<el-button size="medium" round class="key-word-label">热门家轿</el-button>
				</router-link>
				<router-link to="/buy?orderBy=&amp;brandCode=brand-27">
					<el-button size="medium" round class="key-word-label">本田</el-button>
				</router-link>
				<router-link to="/buy?orderBy=&amp;brandCode=brand-28">
					<el-button size="medium" round class="key-word-label">比亚迪</el-button>
				</router-link>
				<router-link to="/buy?orderBy=&amp;carShapeCode=SUV">
					<el-button size="medium" round class="key-word-label">SUV</el-button>
				</router-link>
				<router-link to="/buy?orderBy=&amp;brandCode=brand-74">
					<el-button size="medium" round class="key-word-label">Jeep</el-button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					value: '选项1',
					label: '新车'
				}, {
					value: '选项2',
					label: '二手车'
				}],
				carName:[],
				value: '',
				kword : ""
			}
		},
		methods:{
			search:function(){
				axios.get('/searchCar',{
					params:{
					 	kw:this.kword
					}
				}).then((response) => {
					this.carName = response.data;
				}).catch(function (error) { console.log(error); });
			},
			back:function(){
				this.$router.go(-1);//返回上一层
			}
		}
	}
</script>

<style>
	.pg-index-search.content-height {
		min-height: 100vh;
	}

	.pg-index-search .search-header {
		height: 3.375rem;
	}

	.pg-index-search .search-header .search-wrapper {
		position: relative;
		padding: 0.625rem 1rem;
	}

	.pg-index-search .search-header .search-wrapper .radius {
		border-radius: 1.25rem;
		background: #f2f2f2;
	}

	.pg-index-search .search-header .search-wrapper .car-type {
		margin: 0.375rem 0 0.375rem 1rem;
		height: 1.375rem;
		line-height: 1.375rem;
		padding-right: 0.75rem;
		border-right: 0.0625rem solid #d9d9d9;
	}

	.pg-index-search .search-header .search-input {
		background: #f2f2f2;
		border-radius: 1.25rem;
		height: 2.125rem;
		line-height: 2.125rem;
		position: relative;
		margin-left: 0.75rem;
	}

	.pg-index-search .search-header .search-input input {
		background: transparent;
		border-radius: 1.25rem;
		width: 100%;
		height: 1.25rem;
		line-height: 1.25rem;
		margin: auto 0;
		z-index: 10;
	}

	.pg-index-search .search-header .cancel {
		margin: 1rem 0 0 1rem;
		line-height: 2.5rem;
	}

	.pg-index-search .search-list {
		padding: 0.875rem 1rem 0.375rem 1rem;
	}

	.pg-index-search .search-list .list-header {
		margin-bottom: 0.75rem;
	}

	.text-gray {
		color: #666 !important;
	}

	.pg-index-search .search-list .key-word-label {
		display: inline-block;
		margin: 0 0.625rem 0.625rem 0;
		border-radius: 1.25rem;
		background-color: #f2f2f2;
		padding: 0.375rem 1.125rem;
	}
</style>
