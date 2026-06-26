import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Repartidos() {
  return (
    <div className="container my-4">
      <h1 className="mb-4">Repartidos de Matemáticas</h1>

      <div className="row">
        {/* Inecuaciones Racionales */}
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Inecuaciones Racionales</h5>
              <p className="card-text">
                Ejercicios para resolver inecuaciones racionales con condiciones
                de existencia.
              </p>
              <a
                href="../src/components/img/Inecuaciones Racionales.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="bi bi-file-earmark-pdf me-2"></i>Ver PDF
              </a>
            </div>
          </div>
        </div>

        {/* Práctico Ecuaciones Racionales */}
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Práctico Ecuaciones Racionales</h5>
              <p className="card-text">
                Ejercicios para resolver ecuaciones racionales.
              </p>
              <a
                href="../src/components/img/Práctico Ecuaciones Racionales.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                <i className="bi bi-file-earmark-pdf me-2"></i>Ver PDF
              </a>
            </div>
          </div>
        </div>

        {/* Práctico Ecuaciones de Tercer Grado */}
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Ecuaciones de Tercer Grado</h5>
              <p className="card-text">
                Ejercicios de polinomios cúbicos y simplificación.
              </p>
              <a
                href="../src/components/img/Práctico Ecuaciones de Tercer Grado (1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger"
              >
                <i className="bi bi-file-earmark-pdf me-2"></i>Ver PDF
              </a>
            </div>
          </div>
        </div>

        {/* Práctico Estadística */}
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title">Práctico Estadística</h5>
              <p className="card-text">
                Ejercicios de media, mediana, moda y representaciones gráficas.
              </p>
              <a
                href="../src/components/img/Práctico 1 Estadística (1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning"
              >
                <i className="bi bi-file-earmark-pdf me-2"></i>Ver PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repartidos;
