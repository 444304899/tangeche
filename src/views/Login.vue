<template>
	<div class="pg-other-login"><i class="el-icon-close close-ico" @click="back"></i>
		<el-form class="form">
			<h1 class="form-title">欢迎来到弹个车</h1>
			<div class="form-container">
				<el-form-item>
					<el-input placeholder="请输入您的手机号" v-model="phone" clearable type="phone" maxlength="13">
					</el-input>
				</el-form-item>
				<el-form-item class="form-bottom">
					<el-button round class="login-btn">下一步</el-button>
				</el-form-item>
				<el-form-item class="form-tip">
					<el-radio label="条款" name="type" class="privacy-policy">
						<span>我已阅读并同意</span><a href="/service" class="policy-cont">《弹个车服务条款》</a><span>及</span><a href="/policy" class="policy-cont">《弹个车隐私政策》</a>
					</el-radio>
				</el-form-item>
			</div>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				phone: ""
			}
		},
		methods: {
			back() {
				this.$router.go(-1);//返回上一层
			}
		},
	}
</script>

<style>
	.pg-other-login .close-ico {
		float: left;
		width: 0.9375rem;
		height: 0.9375rem;
		margin: 1rem;
		font-size: 1.5rem;
	}

	.pg-other-login .form {
		padding: 3rem 1.5rem 2.5rem 1.5rem;
		text-align: center;
	}

	.pg-other-login .form .form-title {
		text-align: left;
		color: #1a1d33;
		font-weight: 400;
		margin-top: 0;
		margin-bottom: 1.75rem;
	}

	.pg-other-login .form .form-item {
		width: 100%;
		background: #fff;
		text-align: left;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		padding: 0.5rem 0.625rem 0.5rem 0;
		position: relative;
		border-bottom: 0.125rem solid #eaecef;
	}

	.pg-other-login .form .form-item input {
		background: #fff;
		width: 100%;
		height: 1.75rem;
		border-radius: 0.125rem;
		font-size: 1rem;
		padding: 0;
	}

	.pg-other-login .form .form-bottom {
		margin-top: 7.1875rem;
	}

	.pg-other-login .login-btn {
		width: 100%;
		border-radius: 6.25rem;
		text-align: center;
		height: 3rem;
		border: none;
		font-size: 1rem;
		background: -webkit-gradient(linear, left bottom, right top, from(#ffdc00), to(#ffb709));
		background: linear-gradient(to right top, #ffdc00, #ffb709);
	}

	.pg-other-login .form .form-tip {
		margin-top: 1.25rem;
		text-align: left;
	}

	.pg-other-login .form .form-tip .privacy-policy {
		color: #8d8e99;
		font-size: 0.8125rem;
		padding-left: 1.25rem;
		position: relative;
		white-space: normal;
	}

	.pg-other-login .form .form-tip .privacy-policy .policy-cont {
		color: #5c9ee6;
	}
</style>
