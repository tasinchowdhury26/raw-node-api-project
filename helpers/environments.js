/* eslint-disable operator-linebreak */
// handle all environment related things
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'sgsiuiunvinein',
};

environments.poduction = {
    port: 5000,
    envName: 'production',
    secretKey: 'sniosoiesoemboeib',
};

// determine which envName has been passed
const currenEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

const environmentToExport =
    typeof environments[currenEnvironment] === 'object'
        ? environments[currenEnvironment]
        : environments.staging;

// export the appropriate environment
module.exports = environmentToExport;
