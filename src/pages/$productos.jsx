import { useParams, useSearchParams } from 'react-router-dom'

export function $Productos() {
  const { productoId } = useParams()
  const { searchParams, setSearchParams } = useSearchParams()

  console.log(searchParams.get('color'))
  return (
    <div>
      <h1>{productoId}</h1>
    </div>
  )
}
