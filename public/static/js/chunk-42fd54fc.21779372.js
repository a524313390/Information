(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42fd54fc"],{7803:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"froms-container"},[r("h3",{staticClass:"title"},[e._v("后台管理系统")]),r("div",{staticClass:"content"},[r("el-form",{ref:"registerFrom",staticClass:"registerClass",attrs:{labelPosition:"left",model:e.register,"status-icon":"",rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"name"}},[r("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.register.name,callback:function(t){e.$set(e.register,"name",t)},expression:"register.name"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.register.email,callback:function(t){e.$set(e.register,"email",t)},expression:"register.email"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.register.password,callback:function(t){e.$set(e.register,"password",t)},expression:"register.password"}})],1),r("el-form-item",{attrs:{label:"确认密码",prop:"checkPwd"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.register.checkPwd,callback:function(t){e.$set(e.register,"checkPwd",t)},expression:"register.checkPwd"}})],1),r("el-form-item",{attrs:{label:"选择身份",prop:"istatus"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择身份"},model:{value:e.register.istatus,callback:function(t){e.$set(e.register,"istatus",t)},expression:"register.istatus"}},e._l(e.options,function(e){return r("el-option",{key:e.value,attrs:{disabled:0==e.value,label:e.label,value:e.value}})}),1)],1),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("registerFrom")}}},[e._v("注册")]),r("el-button",{attrs:{type:"primary"},on:{click:e.changeRouter}},[e._v("登陆")])],1)],1)])},a=[],i={name:"register",data:function(){var e=this,t=function(t,r,s){""===r?s(new Error("请再次输入密码")):r!==e.register.password?s(new Error("两次输入密码不一致!")):s()};return{register:{password:"",name:"",email:"",istatus:""},rules:{name:[{required:!0,message:"请输入账户",trigger:"blur"},{min:5,max:30,message:"长度在 5 到 30个字符",trigger:"blur"}],eamil:[{type:"email",required:!0,message:"请输入正确的邮箱",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20个字符",trigger:"blur"}],checkPwd:[{validator:t,trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20个字符",trigger:"blur"}]},options:[{value:"0",label:"管理员"},{value:"1",label:"普通用户"},{value:"3",label:"小助手"}],value:""}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.register),t.$axios.post("/api/users/register",t.register).then(function(e){console.log(e),e.data.avatar?(t.$message({message:"注册成功,请登陆",type:"success"}),t.$router.push("/login")):t.$message({message:e.data.msg,type:"error"})}).catch(function(e){console.log(e)})})},resetForm:function(e){this.$refs[e].resetFields()},changeRouter:function(){this.$router.push("/login")}}},l=i,o=(r("c30c"),r("2877")),n=Object(o["a"])(l,s,a,!1,null,"2b0beed7",null);t["default"]=n.exports},bdd0:function(e,t,r){},c30c:function(e,t,r){"use strict";var s=r("bdd0"),a=r.n(s);a.a}}]);
//# sourceMappingURL=chunk-42fd54fc.21779372.js.map