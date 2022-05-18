import fetch from "node-fetch"

export default async function handler(req, res) {
  
  let apiKey = process.env.SBKEY;
  
  

  if (req.method === `POST`) {

    const url = "https://api.sendinblue.com/v3/contacts"
    const headers = {
      "Content-Type": "application/json",
      "api-key": apiKey,
      "Accept": "application/json"
    }
    const data = {
      email: req.body.EMAIL,
      attributes: {
        "OPT_IN": true
      },
      "updateEnabled": true,
      "listIds" : [parseInt(process.env.LID)]
    }
    try {
      const result = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      }).then(resp => {
        return resp.json()
      })
      res.json(result)
    } catch (error) {
      res.send(error)
    }
  } else {
    res.json(`Hello!`)
  }
}