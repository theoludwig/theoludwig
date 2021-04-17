export const TableTitle: React.FC = props => {
  const { children } = props

  return (
    <>
      <div className='col-24'>
        <p className='text-center title-table'>
          <strong className='important'>{children}</strong>
        </p>
      </div>

      <style jsx>{`
        .title-table {
          font-size: 24px;
          margin: 40px 0 20px 0;
        }
      `}
      </style>
    </>
  )
}
