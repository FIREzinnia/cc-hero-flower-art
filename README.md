# [CodeCombat Hero Flower Art](https://codecombat.com/play/level/mountain-flower-grove)

## Requirements

- Codecombat:
  - Ring of Flowers (beat [The Two Flowers][1])
  - Boots with `this.moveXY` (basically anything except the intro level ones)
  - Use the JavaScript language
  - Really long patience
- Building:
  - Node/io.js
  - npm

[1]: https://codecombat.com/play/level/the-two-flowers


## Getting Started

    git clone https://github.com/trotod/cc-hero-flower-art.git
    cd cc-hero-flower-art
    npm install
    ./ascii <hero-type> [args...]
    ./build <hero-type> [args...] > <hero-type>.js


## Documentation

`ascii` generates colored ASCII previews.

`build` generates the many lined code for drawing the art.

- hero-type: a hero type. look in `heros/`
- `--step`: scale down by an integer value
- `--trim-top`: trim top by how much
- `--trim-bottom`: trim bottom by how much
