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
                    <tr>
                        <td>Todos</td>
                    </tr>

                    <tr>
                        <td>Análise</td>
                    </tr>
                        <tr className="dropdown">
                            <td>Análise de contas</td>
                        </tr>
                        <tr className="dropdown">
                            <td>Análise de transações</td>
                        </tr>

                        <tr>
                            <td>Contas</td>
                        </tr>
                        <tr className="dropdown">
                            <td>Cliente</td>
                        </tr>
                        <tr className="dropdown">
                            <td>Transações</td>
                        </tr>
                        <tr className="dropdown">
                            <td>Contas digitais</td>
                        </tr>

                        <tr>
                            <td>Customização</td>
                        </tr>
                        <tr className="dropdown">
                            <td>Limite e horários</td>
                        </tr>
                        <tr className="dropdown">
                            <td>Tarifas</td>
                        </tr>
                        <tr className="dropdown">
                            <td>Tarifas personalizas</td>
                        </tr>
                        <tr className="dropdown">
                            <td>Conta</td>
                        </tr>

                        <tr>
                            <td>Financeiro</td>
                        </tr>
                        <tr className="dropdown">
                            <td>Entradas</td>
                        </tr>

                </tbody>
            </table>
        </div>

            )
}