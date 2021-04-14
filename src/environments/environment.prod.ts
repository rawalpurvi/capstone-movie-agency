export const environment = {
  production: true,
  apiServerUrl: 'https://capstone-agency-backend.herokuapp.com', // the running FLASK api server url
  auth0: {
    url: 'purvi-udacity.us', // the auth0 domain prefix
    audience: 'capstone_api', // the audience set for the auth0 app
    clientId: '6TY6xaOUYvkQNrgcS3WR0clXpW99IBAM', // the client id generated for the auth0 app
    callbackURL: 'https://capstone-movie-agency.herokuapp.com', // the base url of the running ionic application. 
  }
};
