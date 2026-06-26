function Tema6() {
  return (
    <div className="container my-4">
      <h1 className="mb-4">Descomposición factorial</h1>

      {/* Definición */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Definición</h5>
          <p>
            La descomposición factorial consiste en expresar un número como
            producto de sus factores primos. Es útil para simplificar fracciones
            y resolver problemas de divisibilidad.
          </p>
        </div>
      </div>

      {/* Ejemplo */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Ejemplo</h5>
          <p>
            El número 60 puede descomponerse en factores primos:
            <br />
            60 = 2 × 2 × 3 × 5 = 2² × 3 × 5
          </p>
        </div>
      </div>

      {/* Representación gráfica */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Representación gráfica</h5>
          <img
            src="https://copilot.microsoft.com/th/id/BCO.d582ed4b-79e7-4136-8638-256c21d162f7.png"
            alt="Árbol de factores"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Tema6;
