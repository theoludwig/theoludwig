export interface TableRow {
  title: string
  value: string
}

export interface TableProps {
  rows: TableRow[]
}

export const Table: React.FC<TableProps> = props => {
  const { rows } = props

  return (
    <>
      <div className='col-24 table-column text-center'>
        <table>
          <tbody>
            {rows.map((row, index) => {
              return (
                <tr key={index}>
                  <th className='table-row'>{row.title}</th>
                  <td className='table-row'>{row.value}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .table-column {
          display: grid;
        }
        .table,
        th,
        td {
          border: 1px solid var(--color-text-1);
          border-collapse: collapse;
        }
        .table-row {
          padding: 15px;
        }
        .image-setup {
          width: 85%;
        }
      `}
      </style>
    </>
  )
}
