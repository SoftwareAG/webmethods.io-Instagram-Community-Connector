module.exports = {
  name: "get_details",

  title: "Get Details",

  description: "",
  version: "v1",

  input: {
    title: "Get Details",
    type: "object",
    properties: {}
  },

  output: {
    title: "output",
    type: "object",
    properties: {}
  },

  mock_input: {},

  execute: function(input, output) {
    const request = require("request");
    const request_url =
      "https://api.instagram.com/v1/users/self/?access_token=" +
      input.auth.access_token;

    let options = {
      method: "GET",
      url: request_url,
      json: true
    };

    request(options, function(error, response, body) {
      try {
        if (body && typeof body === "string") {
          body = JSON.parse(body);
        }
      } catch (error) {
        return output(body);
      }

      if (response.statusCode === 400)
        return output(
          "There is an error in the construction of the request. The body of the response will contain more detail of the problem."
        );

      if (response.statusCode === 403)
        return output("the authentication information is incorrect.");

      if (response.statusCode === 404)
        return output(
          " The requested record could not be found. This may also occur if the user does not have access to the requested record"
        );

      if (response.statusCode !== 200) return output(body.status.errorDetails);

      if (response.statusCode === 200) {
        output(null, {
          id: body.data.id,
          username: body.data.username,
          profile_picture_link: body.data.profile_picture,
          bio: body.data.bio,
          website: body.data.website,
          is_business: body.data.is_business,
          no_of_media: body.data.counts.media,
          no_of_followers: body.data.counts.followed_by,
          no_of_follows: body.data.counts.follows
        });
      }
    });
  }
};
