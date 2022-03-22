function setSlackChannel(slackMessage, event) {
  const snsTopicArn = event && event.Records && event.Records[0] &&
                      event.Records[0].Sns &&
                      event.Records[0].Sns.TopicArn;
  const matches = /arn:aws:sns:[^:]*:\d*:slack-channel-([^:]*)/i.exec(snsTopicArn);
  const slackChannel = matches && matches[1]
  if(slackChannel != null && slackChannel !== '') {
    slackMessage.channel = slackChannel;
  } else {
    console.info('Sending to default slack channel associated with webhook');
  }
}

module.exports = setSlackChannel;
