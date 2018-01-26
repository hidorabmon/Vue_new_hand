
Vue.component('greeting',{
  template:'<p>Hey there, I am a {{name}} man <button v-on:click="changName">Change Name</button></p>',

  data:function(){
    return{
      name:'Yoshi'
    }
  },
  methods:{
    changName:function(){
      this.name = 'Mario';
    }
  }
})
/*
var one = new Vue({
  el:'#vue-app-one',

}); 


var two = new Vue({
  el:'#vue-app-two',

}); 
*/
