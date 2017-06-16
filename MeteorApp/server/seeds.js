import Details from '/lib/collections/details';
import Posts from '/lib/collections/posts';
//meteor reset to wipe DB

const seed = () => {
  if (Details.find().count() === 0) {
    for (let i = 0; i < 10; i++) {
      Details.insert({
        name: `Detail #${i}`
      });
    }
  }

  if (Posts.find().count() === 0) {
    for (let i = 0; i < 100; i++) {
      Posts.insert({
        title: 'Meteor test post #'+i,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      });
    }
  }





}

export default seed;
