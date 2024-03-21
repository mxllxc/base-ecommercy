
import './App.css'
import Product1 from './assets/product1.jpg'
import Product2 from './assets/product2.jpg'

function App() {

  return (
    <div className='py-20 flex w-full items-center justify-center'>
      <div className='flex gap-5'>
          <div className='flex flex-col gap-3 border border-white rounded-lg'>
            <img className='mask mask-square w-full h-full max-w-72 object-cover rounded-lg' src={Product2} alt="Plano Base" />
            <div className='px-5 pb-3 flex flex-col gap-3'>
              <h1 className='text-white'>Plano Base</h1>
              <button className='btn btn-primary w-full min-h-0 h-fit py-2' onClick={() => window.open("https://buy.stripe.com/test_7sI7t2ffrb2faXK7su")}>Buy</button>
            </div>
          </div>
          <div className='flex flex-col gap-3 border border-white rounded-lg'>
            <img className='mask mask-square w-full h-full max-w-72 object-cover rounded-lg' src={Product1} alt="Plano Premium" />
            <div className='px-5 pb-3 flex flex-col gap-3'>
              <h1 className='text-white'>Plano Premium</h1>
              <button className='btn btn-primary w-full min-h-0 h-fit py-2' onClick={() => window.open("https://buy.stripe.com/test_bIYbJid7j4DR2recMN")}>Buy</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App
