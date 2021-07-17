import { RowTable } from "../RowTable";

import "./style.scss";

export function Table() {
  return (
    <div className="container-table">
      <h1>Tabela de Permissões</h1>

      <table className="data-table">
        <thead>
          <tr>
            <th></th>
            <th>Ver listagem</th>
            <th>Ver detalhes</th>
            <th>Criar</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <RowTable row="Todos" />
          </tr>

          <tr className="item-principal">
            <RowTable row="Análise" />
            <div className="dropdown">
              <RowTable row="Análise de contas" />
              <RowTable row="Análise de transações" />
            </div>
          </tr>

          <tr className="item-principal">
            <RowTable row="Contas" />
            <div className="dropdown">
              <RowTable row="Cliente" />
              <RowTable row="Transações" />
              <RowTable row="Contas digitais" />
            </div>
          </tr>

          <tr className="item-principal">
            <RowTable row="Customização" />
            <div className="dropdown">
              <RowTable row="Limites e horários" />
              <RowTable row="Tarifas" />
              <RowTable row="Tarifas personalizadas" />
              <RowTable row="Conta" />
            </div>
          </tr>

          <tr className="item-principal">
            <RowTable row="Financeiro" />
            <div className="dropdown">
              <RowTable row="Entradas" />
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
