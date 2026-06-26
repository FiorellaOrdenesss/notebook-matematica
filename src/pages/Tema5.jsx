function Tema5() {
  return (
    <div className="container my-4">
      <h1 className="mb-4">Funciones en GeoGebra</h1>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Definición</h5>
          <p>
            Una función es una relación entre dos conjuntos donde a cada valor
            de entrada (x) le corresponde un único valor de salida (y). GeoGebra
            permite representar funciones de manera gráfica y dinámica.
          </p>
        </div>
      </div>

      {/* Ejemplos */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Ejemplos en GeoGebra</h5>
          <p>
            Si definimos la función f(x) = x², GeoGebra mostrará una parábola
            que abre hacia arriba. Podemos modificar los parámetros para ver
            cómo cambia la gráfica. Podemos probar con diferentes funciones
            como:
          </p>

          <ul>
            <li>
              <strong>Función cúbica:</strong> f(x) = x³ - 3x
            </li>
            <li>
              <strong>Función racional:</strong> f(x) = (x² - 1) / (x - 1)
            </li>
            <li>
              <strong>Función trigonométrica:</strong> f(x) = sin(x) + cos(2x)
            </li>
            <li>
              <strong>Función exponencial:</strong> f(x) = e^x - 2
            </li>
            <li>
              <strong>Función logarítmica:</strong> f(x) = ln(x) + 3
            </li>
            <li>
              <strong>Función con parámetro:</strong> f(x) = a·sin(bx)
            </li>
            <li>
              <strong>Sistema de ecuaciones:</strong> y = x² y y = 2x + 3
            </li>
          </ul>
        </div>
      </div>

      {/* Representación gráfica */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Representación gráfica</h5>
          <iframe
            src="https://www.geogebra.org/calculator"
            title="Ejemplo de función en GeoGebra"
            width="100%"
            height="500"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Tema5;
