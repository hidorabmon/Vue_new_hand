new Vue({
  el:'#vue-app',
  data:{
    age:20,
    x:0,
    y:0
  },
  methods:{
    Subtract:function(value){
      this.age-=value;
    },
    Add:function(value){
      this.age+=value;
    },
    updateXY:function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click:function(){
      alert('You click me')
    }

  }
}); 