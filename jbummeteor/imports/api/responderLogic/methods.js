SSR.compileTemplate('htmlEmail', Assets.getText('html-email.html'));

//prodution shit
const professionals = ['debbieax@aol.com'];
const adults = ['justbu.jm@gmail.com','phoebe@daywaneti.com'];

//debug
//const professionals = ['8475659827@txt.att.net', 'connor.larkin1@gmail.com'];
//const adults = ['8475659827@txt.att.net'];

export const handlePost = ({title, body, post_visibility, post_categories}) => {
  const cats = post_categories.map((c) => ' '+c).toString();
  const vis = post_visibility.map((v) => ' '+v).toString();
  var emailData = {
    title: title,
    body: body,
    visibility: vis,
    categories: cats,
  };
  const params = {
    from: 'JBUM',
    subject: 'Post Added',
    text: `Title:\n${title}\nPost Body:\n${body}\nPost Visibility:\n${vis}\nPost Categories:\n${cats}`,
    html: SSR.render('htmlEmail', emailData),
  };

  if (post_visibility.includes('Professional')){
    professionals.map( (pro) => {
      params.to = pro;
      params.subject = '💬  Question asked to a professional on JBUM 💬'
      Meteor.call('sendEmail',params);
    })
  }
  
  if (post_visibility.includes('Adult')){
    adults.map( (adult) => {
      params.to = adult;
      params.subject = '💬  Question asked to an adult on JBUM 💬'
      Meteor.call('sendEmail',params);
    })
  }
}