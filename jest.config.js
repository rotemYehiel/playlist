/**
 * Configuration for Jest testing environment.
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
    globals: {
        extensionsToTreatAsEsm: ['.ts', '.js'],
        'ts-jest': {
            useESM: true
        }
    },

    preset: 'ts-jest/presets/js-with-ts-esm',

    transformIgnorePatterns: [
        'node_modules/(?!(module-that-needs-to-be-transformed)/)' 
    ]
};
