const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER){
    return {
      env: {
        mongodb_username: 'admin',
        mongodb_password: 'l7w7foHhlFgG2lQS',
        mongodb_cluster_name: 'cluster0',
        mongodb_database: 'my-site-dev',
      }
    }
  }
  return {
    env: {
      mongodb_username: 'admin',
      mongodb_password: 'l7w7foHhlFgG2lQS',
      mongodb_cluster_name: 'cluster0',
      mongodb_database: 'my-site',
    }
  }
}
