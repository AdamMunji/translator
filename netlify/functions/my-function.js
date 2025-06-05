exports.handler = async function(event, context) {
  const emailsDir = process.env.NETLIFY_EMAILS_DIRECTORY;
  const emailsSecret = process.env.NETLIFY_EMAILS_SECRET;

  return {
    statusCode: 200,
    body: JSON.stringify({
      directory: emailsDir,
      secret: emailsSecret
    })
  };
};
