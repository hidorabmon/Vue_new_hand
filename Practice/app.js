new Vue({
  el:'#vue-app',
  data:{
    name:'sara',
    job:'apple shop',
    website:'http://www.thenetninja.co.uk',
    websiteTag:'<a href="http://www.thenetninja.co.uk">The net Nijia</a>',
    age:20
  },
  methods:{
    greet:function(time){
      return 'Good ' + time + ' ' + this.name
    },
    Subtract:function(value){
      this.age-=value;
    },
    Add:function(value){
      this.age+=value;
    }
  }
}); 