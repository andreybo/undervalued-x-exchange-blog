const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const apiKey = process.env.SBKEY;

  if (event.httpMethod === "POST") {
    const url = "https://api.sendinblue.com/v3/contacts";
    const headers = {
      "Content-Type": "application/json",
      "api-key": apiKey,
      Accept: "application/json",
    };
    const data = {
      email: JSON.parse(event.body).EMAIL,
      attributes: {
        OPT_IN: JSON.parse(event.body).OPT_IN == "true" ? true : false,
      },
      updateEnabled: true,
      listIds: [parseInt(process.env.LID)],
    };
    try {
      const result = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      }).then((resp) => resp.json());
      return {
        statusCode: 200,
        body: JSON.stringify(result),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify("Hello!"),
    };
  }
};
