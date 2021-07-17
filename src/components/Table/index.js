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
          <RowTable row="Todos" />

          <RowTable className=".item-principal" row="Análise" />
          <div className="dropdown">
            <RowTable row="Análise de contas" />
            <RowTable row="Análise de transações" />
          </div>

          <RowTable className=".item-principal" row="Contas" />
          <div className="dropdown">
            <RowTable row="Cliente" />
            <RowTable row="Transações" />
            <RowTable row="Contas digitais" />
          </div>

          <RowTable className=".item-principal" row="Customização" />
          <div className="dropdown">
            <RowTable row="Limites e horários" />
            <RowTable row="Tarifas" />
            <RowTable row="Tarifas personalizadas" />
            <RowTable row="Conta" />
          </div>

          <RowTable className=".item-principal" row="Financeiro" />
          <div className="dropdown">
            <RowTable row="Entradas" />
          </div>
        </tbody>
      </table>
    </div>
  );
}
