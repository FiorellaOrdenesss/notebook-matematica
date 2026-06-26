function Home() {
  return (
    <div className="container my-5">
      {/* Encabezado */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-primary fw-bold">
          <i className="bi bi-journal-bookmark-fill me-2"></i>
          Notebook de Matemática
          <i className="bi bi-journal-bookmark-fill ms-2"></i>
        </h1>
        <p className="lead text-muted">
          Material interactivo con teoría, ejemplos y recursos visuales.
        </p>
      </div>

      {/* Tarjeta de información */}
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body text-center">
          <h4 className="card-title text-success mb-4">
            <i className="bi bi-info-circle-fill me-2"></i>Información
          </h4>

          <p className="fs-5">
            <strong>Estudiante:</strong>{" "}
            <span className="text-primary">Fiorella Ordenes</span>
          </p>

          <p className="fs-5">
            <strong>Docentes:</strong>
          </p>
          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="bi bi-flower1 me-2"></i>Made
            </li>
            <li>
              <i className="bi bi-code-slash"></i>Nacho
            </li>
          </ul>
        </div>
      </div>

      {/* Pie decorativo */}
      <div className="text-center mt-5">
        <p className="text-secondary">
          <i className="bi bi-stars me-2"></i>
          Bienvenida a tu cuadernola virtual
          <i className="bi bi-stars ms-2"></i>
        </p>
      </div>
    </div>
  );
}

export default Home;
