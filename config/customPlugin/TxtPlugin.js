/**
 * @deprecated demo
 */
class TxtPlugin {
    constructor(options = {}) {
        this.options = options;
    }
    apply(compiler) {
        const {
            start,
        } = this.options;
        compiler.hooks.emit.tapAsync('TxtPlugin', (compilation) => {
            start(compiler, compilation)
        });
    }
}

module.exports = TxtPlugin