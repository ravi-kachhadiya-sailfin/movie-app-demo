import FastAverageColor from 'fast-average-color';

export async function ImageColorFinder(imageUrl) {

    var bgColor = "";
    var brightness = 0;

    // const [bgColor1, setBgColor] = useState();
    // const [brightness, setBrightness] = useState();

    const getImageLightness = async (imageSrc) => {
        var img = document.createElement("img");
        img.src = await imageSrc;
        img.style.display = "none";
        document.body.appendChild(img);
        img.setAttribute('crossOrigin', '');

        var colorSum = 0;
        img.onload = function () {
            // create canvas
            var canvas = document.createElement("canvas");
            canvas.width = this.width;
            canvas.height = this.height;

            var ctx = canvas.getContext("2d");
            ctx.drawImage(this, 0, 0);

            var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var data = imageData.data;
            var r, g, b, avg;

            for (var x = 0, len = data.length; x < len; x += 4) {
                r = data[x];
                g = data[x + 1];
                b = data[x + 2];

                avg = Math.floor((r + g + b) / 3);
                colorSum += avg;
            }

            var brightnessNew = Math.floor(colorSum / (this.width * this.height));
            brightness = brightnessNew;
            // setBrightness(brightnessNew)
            // console.log(brightnessNew);
        }

        return brightness;
    }

    brightness = await getImageLightness(imageUrl);


    const fac = new FastAverageColor();

    let a = await fac.getColorAsync(imageUrl);
    bgColor = a.hex;
    console.log([bgColor, brightness]);
    return [bgColor, brightness];
}