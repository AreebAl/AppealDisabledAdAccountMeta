const { appealAdAccount } = require('./service');

module.exports.appealAdAccount = async (event) => {
  try {
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    const { adAccountId, parentBusinessId, accessToken, appId } = body;

    if (!adAccountId || !parentBusinessId || !accessToken || !appId) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'adAccountId, parentBusinessId, accessToken, and appId are required',
        }),
      };
    }

    const result = await appealAdAccount(adAccountId, parentBusinessId, accessToken, appId);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, result }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: err.message }),
    };
  }
};
