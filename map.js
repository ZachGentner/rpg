const mapMaker = (width, height) => {

    const drawMap = () => {
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                process.stdout.write("$");
            }
            console.log("");
        }
    };

    return {width, height, drawMap};
};

let map = mapMaker(10, 10);
console.log(map);
map.drawMap();