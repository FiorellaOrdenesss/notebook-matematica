function Tema3() {
  return (
    <div className="container my-4">
      <h1 className="mb-4">Suma de números naturales</h1>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Concepto</h5>

          <p>
            La suma de los primeros números naturales puede calcularse usando la
            fórmula conocida como fórmula de Gauss.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Fórmula</h5>

          <p>1 + 2 + 3 + ... + n = n(n + 1) / 2</p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Ejemplo</h5>

          <p>Si n = 5:</p>

          <p>1 + 2 + 3 + 4 + 5 = 15</p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Video explicativo</h5>

          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/fw1kRz83Fj0"
              title="Suma de números naturales"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tema3;
