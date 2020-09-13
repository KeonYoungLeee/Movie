/** Next Webpack設定 */

require('dotenv').config(); 

module.exports = {
  /** フロントでdotenvを私用ため、 env設定*/
  env: {　
    API_KEY: process.env.API_KEY,
  },
  dirDir: '.next',
  webpack: ( config, { isServer }) => {
    if ( !isServer ) {
      config.node = {
        fs: 'empty'
      }
    }
    return config;
  },
}