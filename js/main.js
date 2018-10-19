var app = new Vue({
    el:'#app',
    data:{
      textbox:"",
      paragraphs:0,
      words:0,
      characters:0,
      sentences:0,
      longestword:0,


    },
    computed:{
      popularcharacter(){
        var passage = this.textbox;

        var max = 0;
        var maxChar =''
         passage.split("").forEach(function(char){
          if(passage.split(char).length > max){
            max = passage.split(char).length;
            maxChar = char;
          }
        });
        return maxChar;
      }
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
        this.longestWordCount();
      },
      wordCount: function(){
        let passage = this.textbox;
        let wordReg = /(Dr\.?)|(Mr?\.?s?\.?[a-z]+)|([A-Za-z'’-])+/g;
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
      },
      longestWordCount: function(){
        let passage = this.textbox;
        let lowercase = passage.toLowerCase();
        let wordReg = /(Dr\.?)|(Mr?\.?s?\.?[a-z]+)|([A-Za-z'’-])+/g;
        let found = lowercase.match(wordReg);
        let longest = found.sort(function (a, b) { return b.length - a.length; })[0];

        this.longestword= longest;
      },


    }
})
