 const app = Vue.createApp({
  data(){
   return {
    enteredValue : '', 
    tasks : []
    
   }
  } ,
  methods : {
    addElements (){
      this.tasks.push ( this.enteredValue);
      this.enteredValue = '';
    } , 

    remove(idx){
      this.tasks.splice(idx , 1 );
      
    } , 
    removeAll(idx){
      this.tasks.splice(idx );
      
    }
  } 
  
 });

 app.mount('#user-task');



