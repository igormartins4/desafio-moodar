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

          <RowTable row="Análise" />
          <div className="dropdown">
            <RowTable row="Análise de contas" />
            <RowTable row="Análise de transações" />
          </div>

          <RowTable row="Contas" />
          <RowTable row="Cliente" />
          <RowTable row="Transações" />
          <RowTable row="Contas digitais" />

          <RowTable row="Customização" />
          <RowTable row="Limites e horários" />
          <RowTable row="Tarifas" />
          <RowTable row="Tarifas personalizadas" />
          <RowTable row="Conta" />

          <RowTable row="Financeiro" />
          <RowTable row="Entradas" />
        </tbody>
      </table>
    </div>
  );
}
