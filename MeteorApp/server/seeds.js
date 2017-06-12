import Details from '/lib/collections/details';
import Posts from '/lib/collections/posts';

const seed = () => {
  if (Details.find().count() === 0) {
    for (let i = 0; i < 10; i++) {
      Details.insert({
        name: `Detail #${i}`
      });
    }
  }

  if (Posts.find().count() === 0) {
    Posts.insert({
      title: 'Lorem ipsum dolor sit',
      body: 'Lorem ipsum dol d'
    });

    Posts.insert({
      title: 'Meteor Lorem ipsum dolor sit',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '
    });

    Posts.insert({
      title: 'The Lorem ipsum dolor sit',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '
    });
  }





}

export default seed;
