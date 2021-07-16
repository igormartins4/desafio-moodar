import { Table } from "../components/Table";
import { Button } from "../components/Button"

export function Permissions() {
  return (
    <div className="container-tabela">

            <h1>Tabela de Permissões</h1>
            
            <Table />

            <div className="container-button">
              <Button />
            </div>
        </div>
  )
}