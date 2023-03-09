const fs = require("fs");
const colors = require("colors");
const crearArchivo = async (base = 5, listar = false) => {
  try {
    let salida = "";
    for (let i = 1; i <= 10; i++) {
      salida += `${base} ${"x".blue} ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log('====================='.blue);
      console.log('TABLA DEL:'.yellow, colors.green(base));
      console.log('====================='.blue);

      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
