const { URLSearchParams } = require("url");

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "OAuth endpoint is working! Now you need to implement your OAuth logic or use a ready-made provider."
    })
  };
};
