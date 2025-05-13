import ImageCard from './ImageCard'; // adjust the import path if needed

const cards = [
  {
    imageSrc: '/global.jpg',
    title: 'Trusted by Leading Global Enterprises Worldwide',
    description:
      'Trusted by over 500 global enterprises, our platform ensures stability, scalability, and long-term partnership for high-performance business operations.',
    category: "Trusted"
  },
  {
    imageSrc: 'secure.avif',
    title: 'Secure and Compliant Financial Transactions System',
    description:
      'Our system uses end-to-end encryption and advanced fraud detection to guarantee private, secure, and compliant financial transactions every time.',
       category: "Secure"
  },
  {
    imageSrc: 'fastpayment.png',
    title: 'Lightning-Fast Payment Processing and Turnaround',
    description:
      'Accelerate your cash flow with lightning-fast processing — get your payments cleared and in your account within just 24 hours, hassle-free.',
       category: "Fast Payment"
  },
  {
    imageSrc: 'support.jpeg',
    title: '24/7 Dedicated Expert Support You Can Trust',
    description:
      'Our 24/7 expert support team is always available to help — whether it’s troubleshooting, onboarding, or technical queries, we’ve got your back.',
       category: "Support"
  },
];



export default function ImageCardGrid() {
  return (
    <div className="p-4">
      <h1 className="text-3xl md:text-5xl  text-start text-green-600 mb-8 px-4">
        Why Choose Us.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <ImageCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            category={card.category}
          />
        ))}
      </div>
    </div>
  );
}
