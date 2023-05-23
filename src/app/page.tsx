//import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="bg-black h-screen justify-center flex flex-col items-center">
      <div className="flex bg-gradient-to-r from-cyan-500 to-blue-500 border-2 border-black rounded w-1/4 h-1/6 justify-center text-xl">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYvdqgNmLCzj4jeTFzKZSkUECRRrBh9tNfg&usqp=CAU" className="border-2 border-black rounded-full w-28 h-28"/>
          <p className="m-1 p-1">Name: Tata</p>
          <p className="m-1 p-1">Company: Test</p>
        </div>
        <div className="flex bg-gradient-to-r from-cyan-500 to-blue-500 border-2 border-black rounded w-1/4 h-1/6 justify-center text-xl">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYvdqgNmLCzj4jeTFzKZSkUECRRrBh9tNfg&usqp=CAU" className="border-2 border-black rounded-full w-28 h-28"/>
          <p className="m-1">Name: Toto</p>
          <p className="m-1">Company: Esch</p>
        </div>
      </div>
    </main>
  )
}
