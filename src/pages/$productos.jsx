import { useEffect } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'

export function $Productos() {
  const { productoId } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  console.log(searchParams.get('color', 'descuento'))

  useEffect(() => {
    console.log(productoId)
    if (productoId === 'acerca') {
      navigate(`/${productoId}`)
    }
  }, [productoId])

  return (
    <div>
      <h1>{productoId === 'jamon' ? 'No existe el producto' : productoId}</h1>
    </div>
  )
}
