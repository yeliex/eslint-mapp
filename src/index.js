const rules = require('./rule');

module.exports = {
    rules,
    config: {
        all: require('./config/all'),
        recommend: require('./config/recommend'),
    },
    environments: {
        wechat: require('./envoronment/wechat'),
        baidu: require('./envoronment/baidu'),
    },
};
