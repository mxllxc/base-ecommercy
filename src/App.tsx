
import './App.css'
import Product1 from './assets/product1.jpg'
import Product2 from './assets/product2.jpg'
import Product3 from './assets/product3.jpg'

function App() {

  const produts = [
    {
      id: 1,
      name: "Produto 1",
      img: Product1,
      price: 90
    },
    {
      id: 2,
      name: "Produto 2",
      img: Product2,
      price: 50
    },
    {
      id: 3,
      name: "Produto 3",
      img: Product3,
      price: 100
    },
  ]

  const handlePayment = (product: any) => {
    console.log(product);
  }

  return (
    <div className='py-20 flex w-full items-center justify-center'>
      <div className='flex gap-5'>
        {produts.map((product) => (
          <div key={product.id} className='flex flex-col gap-3 border border-white rounded-lg'>
            <img className='mask mask-square w-full h-full max-w-72 object-cover rounded-lg' src={product.img} alt={product.name} />
            <h1 className='text-white'>{product.name}</h1>
            <button className='btn btn-primary w-full min-h-0 h-fit py-2' onClick={() => handlePayment(product)}>Add</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
