<template>
  <div class="origin-center-wrap">
        <div style="margin-bottom:24px" class="
			  column
			  is-half-mobile
			  is-one-third-tablet
			  is-one-fifth-desktop
			">
			</div>
        <div class="container is-fluid has-text-centered-desktop">
            <div class="bt">
                <h1 id="ymjbt">原命局决策系统</h1>
            </div>
        </div>

        <div class="ymj_system container has-text-centered-desktop">
              <p>
                    <label for="OriName" > 
                    <span>姓名: </span> </label>

                    <input class="input is-info" type="text" id="OriName" name="OriName" placeholder="请输入您的姓名" maxlength="6" size="20">
              </p>

               <p>
                    <span>性别：</span> 
                    <input type="radio" id="sex" name="sex" value="男" /> 男
                    <input type="radio" id="sex" name="sex" value="女" checked/> 女
                </p>

                <p>
    <span>出生时间：</span> 
    <!--公历选择器-->
    <span>公历</span>
 
    <!--公历年份选择器-->
    <select name="gcYear" id="gcYear" v-model="g_time.year" @change="g_time.month = ''">
        
        <option :value="item" v-for="item in yeararr" :key="item">{{ item }}</option>
    
    </select>

    <!--公历月份选择器-->
    <select name="gcMon" id="gcMon" :disabled="g_time.year == ''" v-model="g_time.month" @change="g_time.day = ''" >
       
        <option :value="item" v-for="item in montharr">{{ item }}</option>

    </select>

    <!--公历日子选择器-->
    <select name="gcDate" id="gcDate" :disabled="g_time.month== ''" v-model="g_time.day" @change="g_timechangeday">
        
        <option :value="item" v-for="item in dayarr" :key="item">{{ item }}</option>
  
    </select>

<!--公历时辰选择器-->
<select name="gcTime" id="gcTime">
    <option v-for="(item,index) in time1" :key="item.id" :value="item.title">{{ item.title }}</option>

</select>

</p>

                <p>
    <span>出生时间：</span> 
    <span>阴历</span>
 
    <select name="gcYear" id="gcYear" v-model="y_time.year" @change="y_time.month = ''">
        
        <option :value="item" v-for="item in yeararr" :key="item">{{ item }}</option>
    
    </select>

    <label name="run">
      <input type="checkbox" name="run" v-model="isrun"> 润
    </label>

    <select name="gcMon" id="gcMon" :disabled="y_time.year == ''" v-model="y_time.month" @change="y_time.day= ''" >
       
        <option :value="item" v-for="item in montharr">{{ item }}</option>

    </select>

    <select name="gcDate" id="gcDate" :disabled="y_time.month== ''" v-model="y_time.day" @change="y_tiemchange">
        
        <option :value="item" v-for="item in ydayarr" :key="item">{{ item }}</option>
  
    </select>

<select name="gcTime" id="gcTime">
    <option v-for="(item,index) in time1" :key="item.id" :value="item.title">{{ item.title }}</option>

</select>

</p>


 <p>
    <span>身高：</span>  
        <input type="radio"  name="tx" value="偏小" /> 偏小
        <input type="radio" name="tx" value="标准" checked/>标准
        <input type="radio" name="tx" value="偏高"/>偏高
 </p>


    <p class="help is-info is-marginless" style="line-height: 20px">北方男人——偏小：170cm以下；标准：170cm-175cm；偏高：176cm以上；
      <br>
      南方男人——偏小：167cm以下；标准：167cm-172cm；偏高：173cm以上；
      <br>
      北方女人——偏小：160cm以下；标准：160cm-165cm；偏高：166cm以上；
      <br>
      南方女人——偏小：157cm以下；标准：157cm-162cm；偏高：163cm以上。
      <br>
      <span style="color: red;">* &nbsp;</span>请根据您的实际情况精准选择。
    </p>

    <p>
    <span>胸部特征（和自己身材比较）：</span>  
    <input type="radio"  name="xbtz" value="瘦弱" /> 瘦弱
    <input type="radio" name="xbtz" value="标准" checked/>标准
    <input type="radio" name="xbtz" value="发达" />发达

    </p>

    <p>
    <span>臀部特征（和自己身材比较）：</span>  
    <input type="radio"  name="tbtz" value="瘦弱" /> 瘦弱
    <input type="radio" name="tbtz" value="标准" checked/>标准
    <input type="radio" name="tbtz" value="发达" />发达

</p>

<p>
    <span>耳朵特征（大小明显选大小，软硬明显选软硬）：</span> 
    <br>
    <input type="radio"  name="eartz" value="偏大" /> 偏大
    <input type="radio" name="eartz" value="偏小" checked/>偏小

        <input type="radio"  name="ear11" value="硬" /> 硬
        <input type="radio" name="ear11" value="软" checked/>软
 
</p>

<p>
    <span>脚背高低：</span>  
    <input type="radio"  name="jbgd" value="偏低" /> 偏低
    <input type="radio" name="jbgd" value="一般" checked/>一般
    <input type="radio" name="jbgd" value="偏高" />偏高
</p>


<p>
  <span>方向（如果没有精准的方向，预测结果的准确性会下降）：</span>
</p>

<p>
  <span>在父亲这边祖坟的什么方向居住工作（学习）：</span>
  <select name="qiqi_direction" id="qiqidirection">
    <option value="default">请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>
 
  </select>
</p>

<p>
  <span>在母亲那边祖坟的什么方向居住工作（学习）：</span>
 
  <select name="qiqi_direction" id="qiqidirection">
    <option value="default">请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>
 
  </select>
</p>
<p>
  <span>在父亲居住地的什么方向居住工作（学习）：</span>
 
  <select name="qiqi_direction" id="qiqidirection">
    <option value="default">请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>
 
  </select>
</p>
<p>
  <span>在母亲居住地的什么方向居住工作（学习）：</span>
 
  <select name="qiqi_direction" id="qiqidirection">
    <option value="default">请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>
 
  </select>
</p>
<p>
  <span>在自己居住点的什么方向工作（学习）：</span>

  <select name="qiqi_direction" id="qiqidirection">
    <option value="default">请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>
 
  </select>
</p>
<p>
  <span>常去自己居住点的什么方向休闲娱乐：</span>
 
  <select name="qiqi_direction" id="qiqidirection">
    <option value="default">请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>
 
  </select>
</p>
<p>
  <span>常去自己工作地点的什么方向休闲娱乐：</span>
  
  <select name="qiqi_direction" id="qiqidirection">
    <option value="default">请选择</option>
    <option v-for="item in tiemarr" :key="item.id" :value="item.title">{{item.title}}</option>
 
  </select>
</p>

<p class="help is-info is-marginless">
<span style="color: red;" >*</span>&nbsp;
本系统不分析人的死亡时间、智力水平、学历文凭。
</p>

        </div>
  </div>
</template>

<script setup>
import {ref,watch,reactive} from 'vue'
import calendarFormatter from '../assets/js/dateChange.js'


    
let g_time = reactive({
  year:"",
  month:"",
  day:""
})
let y_time = reactive({
  year:"",
  month:"",
  day:""
})

let isrun = ref(false)

const fn = (year)=>{
            var a1=(year%4==0)&&(year%100!=0) //条件1
            var a2=(year%400==0) //条件2
 
            if(a1||a2){
                return true
            }else{
                return false
            }
        }

        // console.log(fn(2005))

const g_timechangeday = () =>{
  // console.log(g_time)
  let nongli = calendarFormatter.solar2lunar(parseFloat(g_time.year),parseFloat(g_time.month),parseFloat(g_time.day));
  console.log(nongli)
  y_time.year = nongli.lYear
  y_time.month = nongli.lMonth < 10 ? '0'+nongli.lMonth : nongli.lMonth 
  y_time.day = nongli.lDay 
}

const y_tiemchange = ()=>{
  let gongli  = calendarFormatter.lunar2solar(parseFloat(y_time.year), parseFloat(y_time.month), parseFloat(y_time.day));
		console.log(gongli)
      g_time.year = gongli.cYear
      g_time.month = gongli.cMonth < 10 ? '0'+gongli.cMonth : gongli.cMonth 
      g_time.day = gongli.cDay     
}


let dayarr = ref([])
let ydayarr = ref([])

watch(()=>g_time.month,(newval,oldval)=>{
  
  dayarr.value = [] 
  let num = new Date(parseFloat(g_time.year), parseFloat(newval),0).getDate();

  for(let i = 0;i<num;i++){
    dayarr.value.push(i+1)
  }
})
watch(()=>y_time.month,(newval,oldval)=>{

  ydayarr.value = [] 
  let num = new Date(parseFloat(y_time.year), parseFloat(newval),0).getDate();

  for(let i = 0;i<num;i++){
    ydayarr.value.push(i+1)
  }
})



const getYearBetween = (start,end)=>{
  var result = [];
                    //使用传入参数的时间
                    var startTime = new Date(start);
                    var endTime = new Date(end);
                    while(endTime - startTime>=0 ) {
                        //获取年份
                        let year = startTime.getFullYear();
                        //加入数组
                        result.push(year);
                        //更新日期
                        startTime.setFullYear(startTime.getFullYear()+1);
                    }
                return result;
}
let yeararr = getYearBetween('1970-1-1',new Date().getFullYear()+'-'+parseFloat(new Date().getMonth()+1)+'-'+new Date().getDate())
let montharr =[
  '01','02','03','04','05','06','07','08','09','10','11','12'
]

// 

  const time1 = [
    {id:0,title:"早子时(00:00-01:00)"},
    {id:1,title:"丑时(01:00-03:00)"},
    {id:2,title:"寅时(03:00-05:00)"},
    {id:3,title:"卯时(05:00-07:00)"},
    {id:4,title:"辰时(07:00-09:00)"},
    {id:5,title:"巳时(09:00-11:00)"},
    {id:6,title:"午时(11:00-13:00)"},
    {id:7,title:"未时(13:00-15:00)"},
    {id:8,title:"申时(15:00-17:00)"},
    {id:9,title:"酉时(17:00-19:00)"},
    {id:10,title:"戌时(19:00-21:00)"},
    {id:11,title:"亥时(21:00-23:00)"},
    {id:12,title:"晚子时(23:00-24:00)"},

  ]
  const tiemarr = [
            {id:0,title:"甲"},
            {id:1,title:"卯"},
            {id:2,title:"乙"},
            {id:3,title:"辰"},
            {id:4,title:"巽"},
            {id:5,title:"巳"},
            {id:6,title:"丙"},
            {id:7,title:"午"},
            {id:8,title:"丁"},
            {id:9,title:"未"},
            {id:10,title:"坤"},
            {id:11,title:"庚"},
            {id:12,title:"酉"},
            {id:13,title:"辛"},
            {id:14,title:"戌"},
            {id:15,title:"乾"},
            {id:16,title:"亥"},
            {id:17,title:"壬"},
            {id:18,title:"子"},
            {id:19,title:"癸"},
            {id:20,title:"丑"},
            {id:21,title:"艮"},
            {id:22,title:"寅"},
        ]
</script>

<style>
@import url('../assets/css/origin.css');
</style>