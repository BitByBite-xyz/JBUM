//import {responders} from '../../../private/responders.json';
SSR.compileTemplate('htmlEmail', Assets.getText('html-email.html'));
//const responderData = JSON.parse(responders);

//console.log(responderData)
export const handlePost = ({title, body, post_visibility, post_categories}) => {
    Meteor.call('sendEmail',{to:'connor.larkin1@gmail.com',from: '',subject: 'Post Added',text: JSON.stringify({title, body, post_visibility, post_categories}),html: SSR.render('htmlEmail', emailData)});

    if (post_categories.includes('Professional')){

    }
    var emailData = {
        title: title,
        body: body,
        visibility: JSON.stringify(post_visibility),
        categories: JSON.stringify(post_categories),
      };
  
      const params = {
        to:'connor.larkin1@gmail.com',
        from: '',
        subject: 'Post Added',
        text: JSON.stringify({title, body, post_visibility, post_categories}),
        html: SSR.render('htmlEmail', emailData),
      };
      Meteor.call('sendEmail',params);
}