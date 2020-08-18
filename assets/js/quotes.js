// Define inIframe

function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }

// Define colors array

const colors = [
  "#ba7099", 
  "#5595bd",
  "#68bd99",
  "#a946bd",
  "#d48f4a",
  "#97a685",
  "#4cb6ba",
  "#db5a6f",
  "#574982",
  "#b56a4a"
];

// Define Quotes Array 

const quotes = [
    {
      quote: "All our dreams can come true, if we have the courage to pursue them.",
      author: "Walt Disney"
    },
    {
      quote: "The secret of getting ahead is getting started.",
      author: "Mark Twain"
    },
    {
      quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    },
    {
      quote: "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
      author: "Michele Ruiz"
    },
    {
      quote: "We need to accept that we won’t always make the right decisions, that we’ll screw up royally      sometimes – understanding that failure is not the opposite of success, it’s part of success.",
      author: "Arianna Huffington"
    },
    {
      quote: "Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.",
      author: "Joss Whedon"
    },
    {
      quote: "Everything you can imagine is real.",
      author: "Pablo Picasso"
    },
    {
      quote: "Do one thing every day that scares you.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "It’s no use going back to yesterday, because I was a different person then.",
      author: "Lewis Carroll"
    },
    {
      quote: "If we have the attitude that it’s going to be a great day it usually is.",
      author: "Catherine Pulsifier"
    },
    {
      quote: "Don’t be afraid to give up the good to go for the great.",
      author: "John D. Rockefeller"
    },
    {
      quote: "Hustle in silence and let your success make the noise.",
      author: "Unknown"
    }
]

let currentQuote = "";
let currentAuthor = "";

function getQuote(){
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;
  
  if(inIframe())
  {
    $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?hashtags=MotivationalQuotes&related=MotivationalQuotesGenerator&text=" + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
  }
  
  $(".quote-text").animate(
  { opacity: 0},
   500, function() {
     $(this).animate({ opacity: 1}, 500);
     $("#text").text(randomQuote.quote);
   });

  $(".quote-author").animate(
  { opacity: 0}, 
    500, function(){
      $(this).animate({ opacity: 1}, 500);
      $("#author").text(randomQuote.author);
    });  
  
  let color = Math.floor(Math.random() * colors.length);
    $("html body").css(
      {
        backgroundColor: colors[color],
        color: colors[color]
      });
    $(".button").css(
      { 
        backgroundColor: colors[color] 
      }); 
};

// Click event listener

$("#new-quote").on("click", getQuote);

$("#tweet-quote").on("click", function(){
  if(!inIframe()) {
    openURL("https://twitter.com/intent/tweet" + encodeURIComponent('"' + currentQuote + '""' + currentAuthor));
  }
});
