import apnagent from 'apnagent';

let agent = new apnagent.Agent();

agent
  .set('cert', Assets.getText('cert.pem'))
  .set('key', Assets.getText('key.pem')) //.enable('sandbox')
  .connect(function (err) {
    if (err) {
      console.log('agent connect error', err)
      throw err;
    }
  });

export default agent;
