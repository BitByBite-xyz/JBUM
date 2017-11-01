import Dimensions from 'Dimensions';

//store any appwide variables and colors here

export const colors = {
  background: '#F3F3F3',
  errorText: '#FA3256',
  headerText: '#444444',
  buttonBackground: '#00abff',
  buttonText: '#FFFFFF',
  inputBackground: 'rgba(0, 0, 0, 0.4)',
  inputWrapper : 'rgba(0, 0, 0, 0)'
};

export const quotes = [
  {
    quote: 'The more you know who you are, and what you want, the less you let things upset you.',
    author: 'Stephanie Perkins'
  },
  {
    quote: 'If we live our lives looking for the excitement and exhilaration that change can bring, we will be much happier than when we are eventually forced to accept it anyways.',
    author: 'Daniel Wiley'
  },
  {
    quote: 'Beauty is about being comfortable in your own skin. It\'s about knowing and accepting who you are.',
    author: 'Ellen DeGeneres'
  },
  {
    quote: 'Hate is a lack of imagination.',
    author: 'Graham Greene'
  },
  {
    quote: 'My happiness grows in direct proportion to my acceptance, and in inverse proportion to my expectations.',
    author: 'Michael J. Fox'
  },
  {
    quote: 'Being happy doesn\’t mean that everything is perfect. It means that you\’ve decided to look beyond the imperfections.',
    author: 'Unknown'
  },
  {
    quote: 'Darkness cannot drive out darkness, only light can do that. Hate cannot drive out hate, only love can do that.',
    author: 'MLK'
  },
  {
    quote: 'When you find peace within yourself, you become the kind of person who can live at peace with others.',
    author: 'Peace Pilgrim'
  },
  {
    quote: 'Happiness is the only thing that multiplies when you share it.',
    author: 'Albert Schweitzer'
  },
  {
    quote: 'Now and then it\'s good to pause in our pursuit of happiness and just be happy.',
    author: 'Guillaume Apollinaire'
  },
  {
    quote: 'True success, true happiness lies in freedom and fulfillment.',
    author: 'Dada Vaswani'
  },
  {
    quote: 'Being of service to others is what brings true happiness.',
    author: 'Marie Osmond'
  },
  {
    quote: 'Many persons have a wrong idea of what constitutes true happiness. It is not attained through self-gratification but through fidelity to a worthy purpose.',
    author: 'Helen Keller'
  },
  {
    quote: 'Whenever you choose power over love, you will never find true happiness.',
    author: 'Karen Salmansohn'
  },
  {
    quote: 'Some people believe holding on and hanging in there are signs of great strength. However, there are times when it takes much more strength to know when to let go and then do it.',
    author: 'Ann Landers'
  },
  {
    quote: 'No person is your friend who demands your silence, or denies your right to grow.',
    author: 'Alice Walker'
  },
  {
    quote: 'Set the standard! Stop expecting others to show you love, acceptance, commitment, & respect when you don\'t even show that to yourself.',
    author: 'Steve Maraboli'
  },
  {
    quote: 'Have a big enough heart to love unconditionally, and a broad enough mind to embrace the differences that make each of us unique.',
    author: 'D.B. Harrop'
  },
  {
    quote: 'You can\'t stop the waves, but you can learn to surf.',
    author: 'Joseph Goldstein'
  },
  {
    quote: 'The best to find out whether you\'re on the right path? Stop looking at the path.',
    author: 'Marcus Buckingham'
  },
  {
    quote: 'Our greatest glory is not in never failing, but in rising every time we fall.',
    author: 'Confucius'
  },
  {
    quote: 'Do or do not. There is no try.',
    author: 'Yoda'
  },
  {
    quote: 'Seventy percent of success in life is showing up.',
    author: 'Woody Allen'
  },
  {
    quote: 'If you don\'t know where you are going, you might not get there.',
    author: 'Yogi Berra'
  },
  {
    quote: 'The significant problems we face cannot be solved at the same level of thinking we were at when we created them.',
    author: 'Albert Einstein'
  },
  {
    quote: 'Apologizing does not mean that you are wrong and the other one is right. It simply means that you value the relationship much more than your ego.',
    author: 'Unknown'
  },
  {
    quote: 'The first step toward change is awareness. The second step is acceptance.',
    author: 'Nathaniel Branden'
  },
  {
    quote: 'It isn\'t for the moment you are struck that you need courage, but for that long uphill climb back to sanity and faith and security.',
    author: 'Anne Morrow Lindbergh'
  },
  {
    quote: 'When everyone thinks alike, everyone is likely to be wrong',
    author: 'Humphrey B. Neill'
  },
  {
    quote: 'Sometimes we fight who we are, struggling against ourselves and our natures. But we must learn to accept who we are and appreciate who we become. We must love ourselves for what and who we are, and believe in our talents.',
    author: 'Harley King'
  },
  {
    quote: 'The desire to be cool is—ultimately—the desire to be rescued.',
    author: 'Chuck Klosterman'
  },
  {
    quote: 'We all belong here equally...',
    author: 'Polly Horvath'
  },
  {
    quote: 'Be the change you wish to see in the world.',
    author: 'Gandhi'
  },
  {
    quote: 'The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.',
    author: 'MLK'
  },
  {
    quote: 'Becoming is better than being.',
    author: 'Carol S. Dweck'
  },
  {
    quote: 'If you\'re waiting until you feel talented enough to make it, you\'ll never make it.',
    author: 'Criss Jami, Healology'
  },
  {
    quote: 'Most people want so desperately to be an individual yet are so easily shaped by the media.',
    author: 'Criss Jami, Killosophy'
  },
  {
    quote: 'What a man does for pay is of little significance. What he is, as a sensitive instrument responsive to the world\'s beauty, is everything!',
    author: 'H. P. Lovecraft'
  },
  {
    quote: 'When we talk about having a life of significance and meaning, it\'s not about fame or money or resources. It\'s about people and lives and hearts. That\'s my biggest passion in life.',
    author: 'Tim Tebow'
  },
  {
    quote: 'I feel the capacity to care is the thing which gives life its deepest significance.',
    author: 'Pablo Casals'
  },
  {
    quote: 'The child must know that he is a miracle, that since the beginning of the world there hasn\'t been, and until the end of the world there will not be, another child like him.',
    author: 'Pablo Casals'
  },
  {
    quote: 'Dignity does not consist in possessing honors, but in deserving them.',
    author: 'Aristotle'
  },
  {
    quote: 'The ultimate challenge is to accept ourselves exactly as we are, but never stop trying to learn and grow.',
    author: 'Tony Schwartz'
  },
  {
    quote: 'it\'s best to accept life as it really is and not as I imagined it to be',
    author: 'Paul Coelho'
  },
  {
    quote: 'Wisdom... is knowing what you have to accept.',
    author: 'Wallace Stegner'
  },
  {
    quote: 'Learn how to accept your mistakes and learn how to understand mistakes of others.',
    author: 'Jayson Engay'
  },
  {
    quote: 'When you change the way you look at things, the things you look at change.',
    author: 'Wayne Dyer'
  },
  {
    quote: 'There are two ways to get enough. One is to continue to accumulate more and more. The other is to desire less.',
    author: 'G.K. Chesterton'
  },
  {
    quote: 'Life is hard enough, stop beating yourself up.',
    author: 'Unknown'
  },
  {
    quote: 'If curiosity killed the cat, it was satisfaction that brought it back.',
    author: 'Holly Black'
  },
  {
    quote: 'Change the changeable, accept the unchangeable, and remove yourself from the unacceptable.',
    author: 'Denis Waitley'
  },
  {
    quote: 'He who is not satisfied with a little, is satisfied with nothing .',
    author: 'Epicurus'
  },
  {
    quote: 'Do not spoil what you have by desiring what you have not.',
    author: 'Epicurus'
  },
  {
    quote: 'Leaving what feels secure behind and following the beckoning of our hearts doesn\'t always end as we expect or hope. We may even fail. But here\'s the payoff: it can also be amazing and wonderful and immensely satisfying.',
    author: 'Steve Goodier'
  },
  {
    quote: 'There is more to life than increasing its speed.',
    author: 'Mahatma Gandhi'
  },
  {
    quote: 'Everything is practice.',
    author: 'Pele'
  },
]
let dimen = Dimensions.get('window');

export const DEVICE_WIDTH = dimen.width;
export const DEVICE_HEIGHT = dimen.height;
export const IS_X =  (dimen.height === 812 || dimen.width === 812);