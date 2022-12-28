<template>
  <div class="login-center-wrap" >
        <div style="margin-bottom:24px" class="
			  column
			  is-half-mobile
			  is-one-third-tablet
			  is-one-fifth-desktop
			">
        </div>
     <div class="mypoint">
        <div id="section" class="box has-text-centered-tablet container is-widescreen" >
            <div action="success.html" method="post" >
                <img src="../assets/img/shandobako.png" width="600"/>
			
			
				<h1 style="font-size: 20px; font-family:微软雅黑; color: dodgerblue; margin-bottom: 20px; text-align: center; "> <b>--- 用户登录 ---</b></h1>
				
	
				<div class="geshi">


				<div class="field mt-2"  v-if="logshow == '2'">
				  <label class="label has-text-left-tablet" style="color: darkviolet; ">用户名  

				  <div class="control">
                    <input class="input is-info" type="text" name="userName" 
					v-model="userdata.name"
                        placeholder="请输入您的用户名" maxlength="20" style="border-width:2px; " pattern="\w{3,20}"  required />
                   </div>
                 </label>
            
                 </div>

			   <div class="field mt-2"  v-if="logshow == '2'">
				<label class="label content has-text-left-mobile has-text-left-tablet" style="color: darkviolet;">密码 
				<div class="control">
			    <input class="input is-info" v-model="userdata.password" type="password" name="pwd" placeholder="请输入您的密码" maxlength="16" style="border-width:2px; " pattern="\w{6,16}" required />
                </div>
                </label>
				</div>


				<div class="field mt-2" v-if="logshow == '1'">
				  <label class="label has-text-left-tablet" style="color: darkviolet; ">手机号  

				  <div class="control">
                    <input class="input is-info" type="text" name="userName" 
					v-model="userphone.phone"
                        placeholder="请输入您的用户名" maxlength="20" style="border-width:2px; " pattern="\w{3,20}"  required />
                   </div>
                 </label>
            
                 </div>

			   <div class="field mt-2"  v-if="logshow == '1'">
				<label class="label content has-text-left-mobile has-text-left-tablet" style="color: darkviolet;">验证码 
				<div class="control">
			    <input class="input iphone-wrap is-info" v-model="userphone.code" type="password" name="pwd" placeholder="请输入验证码" maxlength="16" style="border-width:2px; " pattern="\w{6,16}" required />
				<button class="codebtn button is-info is-outlined is-normal" :disabled="btnclicn" @click="getcode">{{ btntext }}</button>
			</div>
                </label>
				</div>



                	<!--点击登录-按钮-->
				<div class="control" style="margin-top: 15px; text-align: center; ">
				<input type="submit" name="sub" value="点击登录" :disabled="lontnshow" @click="submint" style="width:100%" class="button is-info is-outlined is-normal mt-2">
				</div>	

				<div class="control" style="margin-top: 15px; text-align: center; ">
						<span 
						style="cursor: pointer;"
						@click="logshow = '2'"
						>账号密码登陆</span>  | <span 
						style="cursor: pointer;"
						@click="logshow = '1'"
						>手机号登陆</span>
				</div>
					
                </div>
            </div>

            
       
        </div>
     </div>
     	<footer class="footer is-rounded has-background-info-light">
			    <div class="content has-text-centered">
			      <p>
			        <strong>Shandobako</strong> Designed by <a href="www.sunsonic2515.com">SDBK Lab.</a>
			    
	                 <br>| 粤公网安备 44080202000111号 | </p>
			    </div>
			  </footer>
  </div>
</template>

<script setup>
	import {login} from '../axios/api.js'
	import {ref} from 'vue'
	import Cookies from 'js-cookie'
	import {useRouter} from 'vue-router'
	import {useStore} from 'vuex'
	import {GetCode,loginsms} from '../axios/api.js'
	let logshow = ref('1')
	let btnclicn  = ref(false)
	let lontnshow  = ref(false)
	let btntext = ref('发送验证码')
	let userdata = ref({
		name:"",
		password:"",
	})
	let userphone = ref(
		{"phone":"","code":"","type":"login","name":"","password":"","level":null}

	)
	const router = useRouter()
	const store = useStore()
	const getcode = () =>{
		var reg='^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-9])|(18[0-9])|166|198|199|191|(147))\\d{8}$';
		var regExp=new RegExp(reg);
		if (regExp.test(userphone.value.phone )) {
			
			
			GetCode({"phone":userphone.value.phone,"type":"login"}).then((res)=>{
				// console.log(res)
					if(res.data.code == '0'){
						let time = 60
						btnclicn.value = true
						let timer = setInterval(() => {
							time = time -1
							btntext.value = time + 's'

							if(time < 1){
								clearInterval(timer)
								btntext.value = '发送验证码'
								btnclicn.value = false
							}
						}, 1000);
					}
			})
     	 }else{
			alert("手机号格式错误")
			return false
		 }
      
	}
	const submint = () =>{

		if(logshow.value == '1'){
			if(userphone.value.phone == '' || userphone.value.code ==''){
				alert('请输入必填内容')
				return false
			}else{
				lontnshow.value = true
				loginsms(userphone.value).then((res)=>{
					if(res.data.code == '0'){
							Cookies.set('token',res.data.data.newPassword)
							Cookies.set('userdata',JSON.stringify(res.data.data))

							store.dispatch('loginok',res.data.data.newPassword)
							console.log(store.state)
							router.push('/main')
					}else{
						alert(res.data.msg)
					}
				}).finally(()=>{
						lontnshow.value = false
					})
			}
		}else{
			if(userdata.value.name == '' || userdata.value.password == ''){
				alert('请输入必填内容')
				return false
				}else{
					lontnshow.value = true
					login(userdata.value).then((res)=>{
						console.log(res)
						
						if(res.data.code == '0'){
							Cookies.set('token',res.data.data.newPassword)
							Cookies.set('userdata',JSON.stringify(res.data.data))

							store.dispatch('loginok',res.data.data.newPassword)
							console.log(store.state)
							router.push('/main')
						}else{
							alert(res.data.msg)
						}
					}).finally(()=>{
						lontnshow.value = false
					})
			}
		}

		
	} 
</script>

<style>
@import url('../assets/css/login.css');
.login-center-wrap{
    background-color: #7B68EE;
}
.iphone-wrap{
	width: 70%;
}
.codebtn{
	width: 30%;
}
</style>