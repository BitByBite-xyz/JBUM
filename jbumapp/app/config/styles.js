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
  }
]

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
