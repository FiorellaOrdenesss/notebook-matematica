function Tema2() {
  return (
    <div className="container my-4">
      <h1 className="mb-4">Estadística</h1>

      {/* Definición general */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">¿Qué es la Estadística?</h5>
          <p>
            La estadística es la ciencia que recopila, organiza y analiza datos
            para describir fenómenos y tomar decisiones. Se divide en:
          </p>
          <ul>
            <li>
              <strong>Estadística descriptiva:</strong> resume datos mediante
              tablas, gráficos y medidas como media, mediana y moda.
            </li>
            <li>
              <strong>Estadística inferencial:</strong> utiliza muestras para
              hacer estimaciones o predicciones sobre una población.
            </li>
          </ul>
        </div>
      </div>

      {/* Media */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Media</h5>
          <p>
            La <strong>media</strong> es el promedio de un conjunto de datos. Se
            calcula sumando todos los valores y dividiendo entre la cantidad de
            datos.
          </p>
          <p>
            <em>Ejemplo:</em> Si en un quiosco se vendieron 15, 10 y 20 manzanas
            en tres días, la media es (15+10+20)/3 = 15.
          </p>
        </div>
      </div>

      {/* Mediana */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Mediana</h5>
          <p>
            La <strong>mediana</strong> es el valor central de un conjunto de
            datos ordenados. Si hay un número par de datos, se toma el promedio
            de los dos valores centrales.
          </p>
          <p>
            <em>Ejemplo:</em> En las estaturas 150, 155, 160, 165, 170, la
            mediana es 160.
          </p>
        </div>
      </div>

      {/* Moda */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Moda</h5>
          <p>
            La <strong>moda</strong> es el valor que más veces se repite en un
            conjunto de datos.
          </p>
          <p>
            <em>Ejemplo:</em> En las estaturas 150, 160, 155, 150, 165, 150, la
            moda es 150 porque aparece más veces.
          </p>
        </div>
      </div>

      {/* Representación gráfica */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Representación gráfica</h5>
          <p>
            Los datos estadísticos se pueden representar con gráficos de barras,
            circulares, histogramas o líneas, lo que facilita su interpretación.
          </p>
          <img
            src="https://th.bing.com/th/id/R.3ab6f6c959281d1b378500168cb5fe7f?rik=UCNas9ZpnaKqFg&pid=ImgRaw&r=0"
            alt="Gráficos"
            width="100%"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Tema2;
