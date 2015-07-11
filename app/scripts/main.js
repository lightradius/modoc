$(function(){
var arr = [
  "Lightradius is an independent web development brand, focused on consistency, simplicity and ease of use",
  "Specialized in both business and personal landing pages",
  "Sleek and simple designs, built using true and tested web frameworks",
  "Got an idea for a single page web application? Send us a holler and we can discuss it",
  "Thank you for your time!",
  "Scroll down for more infromation or click the button below to go to directly to my contacts section.",
  ":)",
  "That's all folks!",
  "...",
  "So... see you later I guess.",
  "*sigh*",
  "Seriously, stop reading this, you're just wasting your time.",
  "Damn tourists.",
  "If you must know, I absolutely hate the \"Keep Calm\" meme you can see printed on that black mug in the background image.",
  "But this was the best royalty free picture of a laptop I could find on Unsplash...",
  "So, no, those are not my hands and I do not use Brackets.",
  "Not that there's anything wrong with it.",
  "...",
  "If you have a Facebook account I will automatically assume you are a moron.",
  "Just kidding.",
  "I have to return some videotapes.",
  "Go away."
];

  $("#typed").typed({
    strings: arr,
    startDelay: 800,
    backDelay: 1600,
    typeSpeed: 16,
    backSpeed: 0,
    cursorChar: "_",
    loop: true
  });
});
