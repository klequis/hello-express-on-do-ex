module.exports = {
  apps: [
    {
      name: 'hello',
      script: 'server/index.js',
      env_dev_local: {
        NODE_ENV: "devLocal"
      },
      env_dev_remote: {
        NODE_ENV: "devRemote"
      },
      env_test_local: {
        NODE_ENV: "testLocal"
      },
      env_test_remote: {
        NODE_ENV: "testRemote"
      },
      env_production: {
        NODE_ENV: "devRemote"
      },
    }
  ]
}