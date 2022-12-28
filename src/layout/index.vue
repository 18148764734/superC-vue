<!--
 * @Author: your name
 * @Date: 2021-09-01 17:15:20
 * @LastEditTime: 2022-02-24 16:34:41
 * @LastEditors: qiufeng
 * @Description: In User Settings Edit
 * @FilePath: \my-vite-project\src\views\layout\index.vue
-->
<template>
<div>
    <div class="content is-normal">
        <nav class="navbar is-transparent mt-4">
            <div class="navbar-brand">
				<a class="navbar-item" href="https://bulma.io">
					<img src="../assets/img/shandobako_colorful.png" alt="shandobako: a smart predicting device" width="180"
						height="30">
				</a>
				<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

            <div id="superCDH" class="navbar-menu">
                <div class="navbar-start">
					<!-- <a class="navbar-item" href="main.html">
					
					</a> -->
						<router-link class="navbar-item" to="/main">
								主页
						</router-link>
					<div class="navbar-item has-dropdown is-hoverable">
						<a class="navbar-link" href="https://www.baidu.com">
							社区
						</a>
						<div class="navbar-dropdown is-boxed">
							<a class="navbar-item" href="https://www.baidu.com">
								实用工具箱
							</a>
							<a class="navbar-item" href="https://www.baidu.com">
								万年历查询
							</a>
							<a class="navbar-item" href="https://www.baidu.com">
								原命决策系统
							</a>
							<a class="navbar-item" href="https://www.baidu.com">
								大运决策系统
							</a>
							<a class="navbar-item" href="https://www.baidu.com">
								流年决策系统
							</a>
							<a class="navbar-item" href="https://www.baidu.com">
								联系我们
							</a>
							<hr class="navbar-divider">
							<a class="navbar-item" href="https://www.baidu.com">
								企业规划咨询
							</a>
							<a class="navbar-item is-active" href="https://www.baidu.com">
								进入社区
							</a>
						</div>
					</div>
				</div>

                <div class="navbar-end">
					<div class="navbar-item has-dropdown is-right is-hoverable">
						<a class="navbar-link">
							个人中心
						</a>

						<div class="navbar-dropdown is-right">
							<a class="navbar-item" href="https://www.baidu.com">
								决策结果
							</a>
							<a class="navbar-item is-active" href="https://www.baidu.com">
								个人档案
							</a>
							<a class="navbar-item" href="https://www.baidu.com">
								时空留言板
							</a>
							<hr class="navbar-divider">
							<div class="navbar-item">
								Version 0.0.1
							</div>
						</div>
					</div>
				</div>
                <p class="control">
					<span class="navbar-item">
						<!-- <a class="button is-info is-rounded" href="login.html">
							<span>登录</span>
						</a> -->
						<router-link v-if="$store.state.token == ''" class="button is-info is-rounded" to="/login">
							<span>登录</span>
						</router-link>
						<div class="button is-info is-rounded" v-else @click="submit">
							退出
						</div>
					</span>
				</p>

            </div>

        </nav>
      
    </div>


</div>
           <router-view v-slot="{ Component }">
                    <keep-alive>
                        <component :is="Component" />
                    </keep-alive>
           </router-view>
</template>


<script setup>
import Cookies from 'js-cookie'
import { onMounted } from 'vue'
import {useStore} from 'vuex'
import {logout} from '../axios/api.js'
import {useRouter} from 'vue-router'
let store  = useStore()
let router = useRouter()
onMounted(()=>{
	let token = Cookies.get('token')
	if(token){
		store.dispatch('loginok',token)
	}
})
const submit = ()=>{
	const userdata = JSON.parse(Cookies.get('userdata'))
	console.log(userdata)
	
	logout({"newPassword": userdata.newPassword,"phone":userdata.phone}).finally(()=>{
		store.dispatch('loginok','')
		Cookies.remove('loginok')
		router.push('/login')
	})
}
</script>


<style lang="scss">
@import url('../assets/css/main.css');

</style>
