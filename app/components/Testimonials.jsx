

export default function Testimonials(){
    return (
        <>
              <section id="testimonials" className="py-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-10">Customer Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded shadow">
            <p>"SoftSell helped us recover costs on old software. Easy, fast, and reliable!"</p>
            <div className="mt-4 font-bold">Jane Doe</div>
            <div className="text-sm text-gray-500">IT Manager, Acme Inc.</div>
          </div>
          <div className="bg-gray-50 p-6 rounded shadow">
            <p>"We were surprised at how much unused software was worth. Highly recommend!"</p>
            <div className="mt-4 font-bold">Mark Lee</div>
            <div className="text-sm text-gray-500">CFO, TechNova</div>
          </div>
        </div>
      </section>
        
        </>
    )
}