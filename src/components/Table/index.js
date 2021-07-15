import './style.scss';

export function Table() {
    return (
        <div className="container-tabela">

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
                    <tr id="todos">
                        <td>Todos</td>
                        <td>
                            <input type="checkbox" id="todos-ver-listagem" name="todos-ver-listagem" />
                            <label for="todos-ver-listagem"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="todos-ver-detalhes" name="todos-ver-detalhes" />
                            <label for="todos-ver-detalhes"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="todos-criar" name="todos-criar" />
                            <label for="todos-criar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="todos-editar" name="todos-editar" />
                            <label for="todos-editar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="todos-deletar" name="todos-deletar" />
                            <label for="todos-deletar"></label>
                        </td>
                    </tr>

                    <tr>
                        <td>Análise</td>
                        <td>
                            <input type="checkbox" id="analise-ver-listagem" name="analise-ver-listagem" />
                            <label for="analise-ver-listagem"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="analise-ver-detalhes" name="analise-ver-detalhes" />
                            <label for="analise-ver-detalhes"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="analise-criar" name="analise-criar" />
                            <label for="analise-criar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="analise-editar" name="analise-editar" />
                            <label for="analise-editar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="analise-deletar" name="analise-deletar" />
                            <label for="analise-deletar"></label>
                        </td>
                    </tr>

                    <tr className="dropdown">
                        <td>Análise de contas</td>
                        <td>
                            <input type="checkbox" id="analise-contas-ver-listagem" name="analise-contas-ver-listagem" />
                            <label for="analise-contas-ver-listagem"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="analise-contas-ver-detalhes" name="analise-contas-ver-detalhes" />
                            <label for="analise-contas-ver-detalhes"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="analise-contas-criar" name="analise-contas-criar" />
                            <label for="analise-contas-criar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="analise-contas-editar" name="analise-contas-editar" />
                            <label for="analise-contas-editar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="analise-contas-deletar" name="analise-contas-deletar" />
                            <label for="analise-contas-deletar"></label>
                        </td>
                    </tr>

                    <tr className="dropdown">
                        <td>Análise de transações</td>
                        <td>
                            <input type="checkbox" id="analise-transacoes-ver-listagem" name="analise-transacoes-ver-listagem" />
                            <label for="analise-transacoes-ver-listagem"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="analise-transacoes-ver-detalhes" name="analise-transacoes-ver-detalhes" />
                            <label for="analise-transacoes-ver-detalhes"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="analise-transacoes-criar" name="analise-transacoes-criar" />
                            <label for="analise-transacoes-criar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="analise-transacoes-editar" name="analise-transacoes-editar" />
                            <label for="analise-transacoes-editar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="analise-transacoes-deletar" name="analise-transacoes-deletar" />
                            <label for="analise-transacoes-deletar"></label>
                        </td>
                    </tr>

                    <tr>
                        <td>Contas</td>
                        <td>
                            <input type="checkbox" id="contas-ver-listagem" name="contas-ver-listagem" />
                            <label for="contas-ver-listagem"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="contas-ver-detalhes" name="contas-ver-detalhes" />
                            <label for="contas-ver-detalhes"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="contas-criar" name="contas-criar" />
                            <label for="contas-criar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="contas-editar" name="contas-editar" />
                            <label for="contas-editar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="contas-deletar" name="contas-deletar" />
                            <label for="contas-deletar"></label>
                        </td>
                    </tr>

                    <tr className="dropdown">
                        <td>Cliente</td>
                        <td>
                            <input type="checkbox" id="contas-cliente-ver-listagem" name="contas-cliente-ver-listagem" />
                            <label for="contas-cliente-ver-listagem"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="contas-cliente-ver-detalhes" name="contas-cliente-ver-detalhes" />
                            <label for="contas-cliente-ver-detalhes"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="contas-cliente-criar" name="contas-cliente-criar" />
                            <label for="contas-cliente-criar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="contas-cliente-editar" name="contas-cliente-editar" />
                            <label for="contas-cliente-editar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="contas-cliente-deletar" name="contas-cliente-deletar" />
                            <label for="contas-cliente-deletar"></label>
                        </td>
                    </tr>

                    <tr className="dropdown">
                        <td>Transações</td>
                        <td>
                            <input type="checkbox" id="contas-transacoes-ver-listagem" name="contas-transacoes-ver-listagem" />
                            <label for="contas-transacoes-ver-listagem"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="contas-transacoes-ver-detalhes" name="contas-transacoes-ver-detalhes" />
                            <label for="contas-transacoes-ver-detalhes"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="contas-transacoes-criar" name="contas-transacoes-criar" />
                            <label for="contas-transacoes-criar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="contas-transacoes-editar" name="contas-transacoes-editar" />
                            <label for="contas-transacoes-editar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="contas-transacoes-deletar" name="contas-transacoes-deletar" />
                            <label for="contas-transacoes-deletar"></label>
                        </td>
                    </tr>

                    <tr className="dropdown">
                        <td>Contas digitais</td>
                        <td>
                            <input type="checkbox" id="contas-digitais-ver-listagem" name="contas-digitais-ver-listagem" />
                            <label for="contas-digitais-ver-listagem"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="contas-digitais-ver-detalhes" name="contas-digitais-ver-detalhes" />
                            <label for="contas-digitais-ver-detalhes"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="contas-digitais-criar" name="contas-digitais-criar" />
                            <label for="contas-digitais-criar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="contas-digitais-editar" name="contas-digitais-editar" />
                            <label for="contas-digitais-editar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="contas-digitais-deletar" name="contas-digitais-deletar" />
                            <label for="contas-digitais-deletar"></label>
                        </td>
                    </tr>

                    <tr>
                        <td>Customização</td>
                        <td>
                            <input type="checkbox" id="customizacao-ver-listagem" name="customizacao-ver-listagem" />
                            <label for="customizacao-ver-listagem"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-ver-detalhes" name="customizacao-ver-detalhes" />
                            <label for="customizacao-ver-detalhes"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-criar" name="customizacao-criar" />
                            <label for="customizacao-criar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-editar" name="customizacao-editar" />
                            <label for="customizacao-editar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-deletar" name="customizacao-deletar" />
                            <label for="customizacao-deletar"></label>
                        </td>
                    </tr>

                    <tr className="dropdown">
                        <td>Limite e horários</td>
                        <td>
                            <input type="checkbox" id="customizacao-limite-ver-listagem" name="customizacao-limite-ver-listagem" />
                            <label for="customizacao-limite-ver-listagem"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-limite-ver-detalhes" name="customizacao-limite-ver-detalhes" />
                            <label for="customizacao-limite-ver-detalhes"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-limite-criar" name="customizacao-limite-criar" />
                            <label for="customizacao-limite-criar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-limite-editar" name="customizacao-limite-editar" />
                            <label for="customizacao-limite-editar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-limite-deletar" name="customizacao-limite-deletar" />
                            <label for="customizacao-limite-deletar"></label>
                        </td>
                    </tr>

                    <tr className="dropdown">
                        <td>Tarifas</td>
                        <td>
                            <input type="checkbox" id="customizacao-tarifas-ver-listagem" name="customizacao-tarifas-ver-listagem" />
                            <label for="customizacao-tarifas-ver-listagem"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-tarifas-ver-detalhes" name="customizacao-tarifas-ver-detalhes" />
                            <label for="customizacao-tarifas-ver-detalhes"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-tarifas-criar" name="customizacao-tarifas-criar" />
                            <label for="customizacao-tarifas-criar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-tarifas-editar" name="customizacao-tarifas-editar" />
                            <label for="customizacao-tarifas-editar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-tarifas-deletar" name="customizacao-tarifas-deletar" />
                            <label for="customizacao-tarifas-deletar"></label>
                        </td>
                    </tr>

                    <tr className="dropdown">
                        <td>Tarifas personalizas</td>
                        <td>
                            <input type="checkbox" id="customizacao-personalizada-ver-listagem" name="customizacao-personalizada-ver-listagem" />
                            <label for="customizacao-personalizada-ver-listagem"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-personalizada-ver-detalhes" name="customizacao-personalizada-ver-detalhes" />
                            <label for="customizacao-personalizada-ver-detalhes"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-personalizada-criar" name="customizacao-personalizada-criar" />
                            <label for="customizacao-personalizada-criar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-personalizada-editar" name="customizacao-personalizada-editar" />
                            <label for="customizacao-personalizada-editar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-personalizada-deletar" name="customizacao-personalizada-deletar" />
                            <label for="customizacao-personalizada-deletar"></label>
                        </td>
                    </tr>

                    <tr className="dropdown">
                        <td>Conta</td>
                        <td>
                            <input type="checkbox" id="customizacao-conta-ver-listagem" name="customizacao-conta-ver-listagem" />
                            <label for="customizacao-conta-ver-listagem"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-conta-ver-detalhes" name="customizacao-conta-ver-detalhes" />
                            <label for="customizacao-conta-ver-detalhes"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-conta-criar" name="customizacao-conta-criar" />
                            <label for="customizacao-conta-criar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-conta-editar" name="customizacao-conta-editar" />
                            <label for="customizacao-conta-editar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="customizacao-conta-deletar" name="customizacao-conta-deletar" />
                            <label for="customizacao-conta-deletar"></label>
                        </td>
                    </tr>

                    <tr>
                        <td>Financeiro</td>
                        <td>
                            <input type="checkbox" id="financeiro-ver-listagem" name="financeiro-ver-listagem" />
                            <label for="financeiro-ver-listagem"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="financeiro-ver-detalhes" name="financeiro-ver-detalhes" />
                            <label for="financeiro-ver-detalhes"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="financeiro-criar" name="financeiro-criar" />
                            <label for="financeiro-criar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="financeiro-editar" name="financeiro-editar" />
                            <label for="financeiro-editar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="financeiro-deletar" name="financeiro-deletar" />
                            <label for="financeiro-deletar"></label>
                        </td>
                    </tr>

                    <tr className="dropdown">
                        <td>Entradas</td>
                        <td>
                            <input type="checkbox" id="financeiro-entradas-ver-listagem" name="financeiro-entradas-ver-listagem" />
                            <label for="financeiro-entradas-ver-listagem"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="financeiro-entradas-ver-detalhes" name="financeiro-entradas-ver-detalhes" />
                            <label for="financeiro-entradas-ver-detalhes"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="financeiro-entradas-criar" name="financeiro-entradas-criar" />
                            <label for="financeiro-entradas-criar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="financeiro-entradas-editar" name="financeiro-entradas-editar" />
                            <label for="financeiro-entradas-editar"></label>
                        </td>
                        <td>
                            <input type="checkbox" id="financeiro-entradas-deletar" name="financeiro-entradas-deletar" />
                            <label for="financeiro-entradas-deletar"></label>
                        </td>
                    </tr>

                </tbody>
            </table>

            <div className="container-button">
                <button>Cadastrar</button>
            </div>
        </div>
    )
}