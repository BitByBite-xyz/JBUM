SSR.compileTemplate('htmlEmail', Assets.getText('html-email.html'));

const professionals = ['8475659827@txt.att.net', 'connor.larkin1@gmail.com'];
const adults = ['8475659827@txt.att.net'];

export const handlePost = ({title, body, post_visibility, post_categories}) => {
  var emailData = {
    title: title,
    body: body,
    visibility: JSON.stringify(post_visibility),
    categories: JSON.stringify(post_categories),
  };

  //Meteor.call('sendEmail',{to:'connor.larkin1@gmail.com',from: '',subject: 'Post Added',text: JSON.stringify({title, body, post_visibility, post_categories}),html: SSR.render('htmlEmail', emailData)});
  const params = {
    from: '',
    subject: 'Post Added',
    text: JSON.stringify({title, body, post_visibility, post_categories}),
    html: SSR.render('htmlEmail', emailData),
  };

  console.log('post includes prof'+post_visibility.includes('Professional'))

  if (post_visibility.includes('Professional')){
    professionals.map( (pro) => {
      params.to = pro;
      Meteor.call('sendEmail',params);
    })
  }
  
  if (post_visibility.includes('Adult')){
    adults.map( (adult) => {
      params.to = adult;
      Meteor.call('sendEmail',params);
    })
  }
}