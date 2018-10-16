var app = new Vue({
    el:'#app',
    data:{
      textbox:"",
      paragraphs:0,
      words:0,
      characters:0,
      sentences:0
    },
    methods:{
      paragraphCount: function (){
        let passage = this.textbox;
        let paragraphReg =/\s{2}\b[A-Z0-9]|^\b[A-Z0-9]/g;
        let found = passage.match(paragraphReg);
        this.paragraphs=found.length;
        this.wordCount();
        this.characterCount();
        this.sentenceCount();
      },
      wordCount: function(){
        let passage = this.textbox;
        let wordReg = /(Dr\.?)|([Mr?\.?s?\.?)|([A-Za-z'])+/g;
        let found = passage.match(wordReg);
        this.words = found.length;
      },
      characterCount: function(){
        let passage = this.textbox;
        let characterReg = /.|\s/g;
        let found = passage.match(characterReg);
        this.characters = found.length;
      },
      sentenceCount: function(){
        let passage =this.textbox;
        let sentenceReg=/[a-zA-Z0-9\s,\-@#$%^&*()_+=[{\]|\\;:"<>]+/g
        let found = passage.match(sentenceReg);
        this.sentences=found.length;
      }

    }
})
