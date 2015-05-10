var getPixels = require('get-pixels');
var rgbHex = require('rgb-hex');
var nearestColor = require('nearest-color');

module.exports = function (hero, opts, callback) {

    if (typeof opts === 'function') {
        callback = opts;
        opts = {};
    }

    opts.step = opts.step || 1;
    opts.trimTop = opts.trimTop || null;
    opts.trimBottom = opts.trimBottom || null;

    Object.keys(hero.colors).forEach(function (key) {
        if (hero.colors[key] == null) delete hero.colors[key];
    });

    var pallete = nearestColor.from(hero.colors);

    getPixels(hero.image, function (err, pixels) {
        if (err) return callback(err);

        if (opts.trimBottom) {
            opts.trimBottom = pixels.shape[1] - (opts.trimTop || 0) - opts.trimBottom;
        }

        pixels = pixels
            .lo(null, opts.trimTop)
            .hi(null, opts.trimBottom)
            .step(opts.step, opts.step);

        var width = pixels.shape[0];
        var height = pixels.shape[1];

        var colors = [];

        var i, j, k;
        for (j = 0; j < height; j++) {
            var row = [];
            for (i = 0; i < width; i++) {
                var r = pixels.get(i, j, 0);
                var g = pixels.get(i, j, 1);
                var b = pixels.get(i, j, 2);
                var a = pixels.get(i, j, 3);
                row.push(a === 0 ? null : pallete('#' + rgbHex(r, g, b)).name.replace(/([0-9]+)/, ''));
            }
            colors.push(row);
        }

        callback(null, colors);
    });
};
