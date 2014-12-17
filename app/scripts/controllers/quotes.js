quotesApp.controller("QuotesController", ["$scope", function($scope) {
  $scope.quotes = [
    {
      author: "Jeff Chang",
      content: "Cultural change is often the dress rehearsal for political change.",
      style: "first"
    },
    {
      author: "Thomas Jefferson",
      content: "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
      style: "second"
    },
    {
      author: "Oprah Winfrey",
      content: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
    },
    {
      author: "Henry David Thoreau",
      content: "As a single footstep will not make a path on the earth, so a single thought will not make a pathway in the mind. To make a deep physical path, we walk again and again. To make a deep mental path, we must think over and over the kind of thoughts we wish to dominate our lives.",
    },
    {
      author: "Lao Tzu",
      content: "I have three precious things which I host fast and prize. The first is gentleness; the second is frugality; the third is humility, which keeps me from putting myself before others. Be gentle and you can be bold; be frugal and you can be liberal; avoid putting yourself before others and you can become a leader among men.",
      style: "long"
    },
    {
      author: "Pat Obuchowski",
      content: "You have the answer. Just get quiet enough to hear it."
    },
    {
      author: "Marvin Gaye",
      content: "If you cannot find peace within yourself, you will never find it anywhere else."
    },
    {
      author: "Thich Nhat Hanh",
      content: "We are very good at preparing to live, but not very good at living. We know how to sacrifice ten years for a diploma, and we are willing to work very hard to get a job, a car, a house, and so on. But we have difficulty remembering that we are alive in the present moment, the only moment there is for us to be alive."
    },
    {
      author: "John Green",
      content: "That's the thing about pain. It demands to be felt."
    },
    {
      author: "Mark Patterson",
      content: "The best education you will ever get is traveling. Nothing teaches you more than exploring the world and accumulating experiences."
    },
    {
      author: "Ray Bradbury",
      content: "You can't try to do things, you must simply do them."
    },
    {
      author: "Aristotle",
      content: "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
    },
    {
      author: "John Keating",
      content: "We don't read and write poetry because it's cute. We read and write poetry because we are members of the human race. And the human race is filled with passion. And medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for."
    },
    {
      author: "Ralph Waldo Emerson",
      content: "You become what you think about all day long."
    },
    {
      author: "Paulo Coelho",
      content: "Don't allow your mind to tell your heart what to do. The mind gives up easily."
    },
    {
      author: "Joyce Meyer",
      content: "If you want to be unhappy, uncomfortable, and insecure, just spend your life trying to do something that is not right for you. It is just life trying to wear shoes that don't fit."
    },
    {
      author: "Henry David Thoreau",
      content: "What you get by achieving your goals is not as important as what you become by achieving your goals."
    },
    {
      author: "Jim Carrey",
      content: "You can fail at what you don't want. So you might as well take a chance on doing what you love."
    },
    {
      author: "C.S. Lewis",
      content: "To love at all is to be vulnerable. Love anything, and your heart will certainly be wrung and possibly broken. If you want to make sure of keeping it intact, you must give your heart to no one, not even to an animal. Wrap it carefully round with hobbies and little luxuries; avoid all entanglements; lock it up safe in the casket or coffin of your selfishness. But in that casket - safe, dark, motionless, airless - it will change. It will not be broken; it will become unbreakable, impenetrable, irredeemable.",
      style: "long"
    },
    {
      author: "Steven Johnson",
      content: "Being right keeps you in place, being wrong forces you to explore.",
    },
    {
      content: "The best journeys answer questions that in the beginning you didn't even think to ask.",
      author: "180 Degrees South"
    },
    {
      content: "Say yes, and you'll figure it out afterwards.",
      author: "Tina Fey"
    },
    {
      content: "If you propose to speak, always ask yourself, is it true, is it necessary, is it kind.",
      author: "Buddha"
    },
    {
      content: "Work hard in silence, let your success be your noise.",
      author: "Frank Ocean"
    },
    {
      content: "Your first kiss isn't as important as your last. The math test really didn't matter. The pie really did. The stuff you're good at and the stuff you're bad at are just different parts of the same thing. Same goes for the people you love and the people you don't -- and the people who love you and the people who don't. The only thing that mattered was that you cared about a few people. Life is really, really short.",
      author: "Ethan Wate",
      style: "long"
    },
    {
      content: "As time goes on, you'll understand. What lasts, lasts; what doesn't, doesn't. Time solves most things. And what time can't solve, you have to solve yourself.",
      author: "Haruki Murakami"
    },
    {
      author: "Ralph Waldo Emerson",
      content: "The only person you are destined to become is the person you decide to be.",
    },
    {
      content: "Opening your heart and being courageous and telling people that you care about them or like them or that you think they're special only makes you a better, bigger, kinder, softwer, more loving person and only attracts more love in your life.",
      author: "Amy Poehler",
      style: "long"
    },
    {
      author: "Georgia O'Keefe",
      content: "Whether you succeed or not is irrelevant, there is no such thing. Making your unknown known is the important thing."
    },
    {
      author: "David Foster Wallace",
      content: "The really important kind of freedom involves attention and awareness and discipline, and being able truly to care about other people and sacrifice for them over and over in myriad petty, unsexy ways every day."
    },
    {
      author: "Jhumpa Lahiri",
      content: "You are still young. Do yourself a favor. Before it's too late, without thinking too much about it first, pack a pillow and a blanket and see as much of the world as you can. You will not regret it. One day, it will be too late.",
    },
    {
      author: "Ray Bradbury",
      content: "Learning to let go should be learned before learning to get. Life should be touched, not strangled. You've got to relax, let it happen at times, and at others move forward with it."
    },
    {
      author: "Paulo Coehlo",
      content: "When you want something, all the universe conspires in helping you to achieve it."
    },
    {
      author: "Howard Thurman",
      content: "Don't ask yourself what the world needs. Ask yourself what makes you come alive. Because what the world needs is people who have come alive."
    },
    {
      author: "Neil Gaiman",
      content: "I’ve been making a list of the things they don’t teach you at school. They don’t teach you how to love somebody. They don’t teach you how to be famous. They don’t teach you how to be rich or how to be poor. They don’t teach you how to walk away from someone you don’t love any longer. They don’t teach you how to know what’s going on in someone else’s mind. They don’t teach you what to say to someone who’s dying. They don’t teach you anything worth knowing.",
      style: "long"
    }
  ];

  $scope.quoteIndex = 0;
  $scope.quote = {};

  $scope.nextQuote = function() {
    if ($scope.quoteIndex >= $scope.quotes.length-1) {
      $scope.quoteIndex = 0;
    } else {
      $scope.quoteIndex++;
    }
  };
}]);

