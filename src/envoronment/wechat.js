const { defaultsDeep } = require('lodash');
const base = require('./_base');

module.exports = defaultsDeep({
    globals: {
        wx: true,

    },
}, base);
