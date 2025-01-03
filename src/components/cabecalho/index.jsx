import "./index.scss";

export default function Cabecalho() {
  return (
    <>
      <div className="container-cabecalho">
        <img src="/assets/images/logoo.png" alt="" className="container-logo" />



        <ul className="lista">
          <li className="lista-item">
            <a href="#local">Localização</a>
          </li>
          <li className="lista-item">
            <a href="#avaliar">Nos avalie</a>
          </li>
          <li className="lista-item">
            <a href="#QS">Quem Somos</a>
          </li>
          <li className="lista-item">
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </>
  );
}
