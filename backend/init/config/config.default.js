/* eslint valid-jsdoc: "off" */

'use strict';

import sequelize from './sequelize';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    env: "prod", // 推荐云函数的 egg 运行环境变量修改为 prod
    rundir: "/tmp",
    logger: {
      dir: "/tmp"
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1604912662862_489';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
    sequelize,
  };
};
