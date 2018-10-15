var app = new Vue({
    el:'#app',
    data:{
      textbox:"",
      paragraphs:0,
    },
    methods:{
      paragraphCount: function (){
        let passage = this.textbox;
        let paragraphReg =/\s{2}\b[A-Z0-9]|^\b[A-Z0-9]/g;
        let found = passage.match(paragraphReg);
        this.paragraphs=found.length;
        sentenceCount();
      },
      sentenceCount: function(){

      }

    }
})
