import { useState } from "react";
import { motion } from "framer-motion";

const activities = [
  "Sing a song!", "Write in a journal!", "Observe nature!", "Play with your dog!", "Build a pillow fort!",
  "Paint a picture!", "Make a paper airplane!", "Do a random act of kindness!", "Bake cookies!", "Learn a new word!",
  "Try a new yoga pose!", "Create your own board game!", "Invent a silly dance move!", "Write a letter to your future self!",
  "Memorize a short poem!", "Design a dream house!", "Have a picnic in your backyard!", "Create a time capsule!",
  "Make friendship bracelets!", "Build something with LEGO!", "Learn a new joke!", "Make a DIY bookmark!",
  "Act out your favorite story!", "Write a comic strip!", "Do a mini science experiment!", "Go on a nature walk!",
  "Make shadow puppets!", "Try a new hairstyle!", "Create a treasure map!", "Do a handstand or cartwheel!",
  "Write a short song!", "Make an origami animal!", "Put together a puzzle!", "Play a memory game!",
  "Have a pretend tea party!", "Design your own superhero costume!", "Play Simon Says!", "Make a clay sculpture!",
  "Invent a new sport!", "Blow bubbles and try to pop them!", "Watch clouds and find shapes!",
  "Try a tongue twister challenge!", "Make your own crossword puzzle!", "Learn to juggle!",
  "Make a collage from old magazines!", "Learn basic sign language!", "Decorate a plain T-shirt!",
  "Make a list of things you're grateful for!", "Draw your dream vacation!", "Pretend to be a news reporter!",
  "Play charades with family!", "Write a short play and act it out!", "Create a vision board!",
  "Write a letter to a friend!", "Make a paper crown and pretend to be royalty!", "Try to balance a spoon on your nose!",
  "Create a silly monster drawing!", "Make a pretend restaurant and take orders!", "Learn to whistle!",
  "Make up a secret code and write a message!", "Try a brain teaser or riddle!", "Do a fun scavenger hunt!",
  "Make your own greeting cards!", "Try a new craft project!", "Make a sock puppet and put on a show!",
  "Read a book out loud with different voices!", "Write a funny story about a talking animal!", "Make a kite!",
  "Try a new dance move!", "Make a rainbow out of different objects!", "Play a game of hopscotch!",
  "Create a fun handshake with a friend!", "Draw a map of your neighborhood!", "Make a fun list of dream jobs!",
  "Try walking like different animals!", "Make a scrapbook of your favorite memories!",
  "Find something interesting outside and sketch it!", "Invent a silly superhero and describe their powers!",
  "Try writing with your non-dominant hand!", "Write a list of your favorite foods!", "Pretend to be a detective!",
  "Learn to snap your fingers!", "Invent a fun challenge for yourself!", "Try drawing with your eyes closed!",
  "See how many jumping jacks you can do in a row!", "Write a joke book!", "Make a paper chain!",
  "Create a simple science experiment!", "Learn a fun fact and tell someone!", "Make a new recipe!",
  "Go outside and see how many birds you can spot!", "Make a list of fun things you want to do this year!",
  "Draw your family as cartoon characters!", "Create your own bedtime story!",
  "Try a balance challenge with a book on your head!"
];

export default function BoredApp() {
  const [activity, setActivity] = useState("Tap the button for a fun idea!");

  const getNewActivity = () => {
    const randomIndex = Math.floor(Math.random() * activities.length);
    setActivity(activities[randomIndex]);
  };

  return (
    <div className="container">
      <h1>I'm Bored!</h1>
      <p>{activity}</p>
      <button onClick={getNewActivity}>Give me an idea!</button>
    </div>
  );
}

