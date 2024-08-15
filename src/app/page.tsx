// app/page.tsx
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Techsaavy',
  description: 'Innovate, Collaborate, Elevate',
};

export default function Home() {
  return (
    <div className={`${inter.className} bg-blue-100 text-gray-800 hover:shadow-2xl hover:border-gray-800 transition-all duration-600 shadow-lg rounded-lg bg-[url('/homecover.gif')] bg-cover bg-center`}>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome to Techsaavy</h1>

        {/* About Us Card */}
        <div className="shadow-lg rounded-lg p-6 mb-8 border-0 bg-transparent hover:shadow-2xl transition-all duration-300">
          <p className="text-gray-700 mb-4 text-lg">
            At TechSaavy, our mission is to foster a community of passionate technology enthusiasts. We are committed to bridging the gap between theoretical knowledge and practical application by organizing a variety of engaging and educational events. Our club provides a platform for students to develop their technical skills, collaborate with peers, and stay abreast of the latest industry trends. From hands-on workshops to insightful seminars, we aim to inspire and equip the next generation of tech innovators.
          </p>
          <p className="text-gray-700 mb-4 text-lg">
            We believe in the power of collaboration and continuous learning. Our events are designed to encourage participation, creativity, and problem-solving. Whether you're looking to enhance your coding skills, explore emerging technologies, or connect with like-minded individuals, TechSaavy is the place for you. Join us to be part of a vibrant community that is shaping the future of technology.
          </p>
        </div>

        {/* Events Carousel */}
        <div className="relative p-6 mb-8 rounded-lg border-0 shadow-xl bg-transparent hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Events We Organize</h2>
          <div className="relative overflow-x-auto custom-scrollbar">
            <div className="carousel flex space-x-4">
              <div className="carousel-inner flex space-x-4">
                <div className="carousel-item border-0 rounded-lg overflow-hidden relative hover:shadow-2xl transition-all duration-300 flex-none w-72 bg-transparent">
                  <img src="/hc1.jpg" alt="Weekly Code Challenges" className="w-full  object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Weekly Code Challenges</h3>
                    <p className="text-gray-800">Participate in our coding challenges designed to test and improve your skills in a fun and competitive environment. Each month, tackle new problems and compete with your peers.</p>
                  </div>
                </div>
                
                <div className="carousel-item border-0 rounded-lg overflow-hidden relative hover:shadow-2xl transition-all duration-300 flex-none w-72 bg-transparent">
                  <img src="/hc3.jpg" alt="Workshops on Emerging Technologies" className="w-full object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Workshops on Emerging Technologies</h3>
                    <p className="text-gray-800">Join our hands-on workshops to explore and learn about emerging technologies. Whether it's AI, blockchain, or web development, our workshops provide practical experience and valuable skills.</p>
                  </div>
                </div>
                <div className="carousel-item border-0 rounded-lg overflow-hidden relative hover:shadow-2xl transition-all duration-300 flex-none w-72 bg-transparent">
                  <img src="/hc4.jpg" alt="Knowledge Sharing in Our Tech Club" className="w-full  object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Knowledge Sharing in Our Tech Club</h3>
                    <p className="text-gray-800">In our tech club, classmates share insights and expertise through workshops, discussions, and projects, fostering collaboration and practical skill development. This peer-driven approach enhances learning and innovation.</p>
                  </div>
                </div>
                <div className="carousel-item border-0 rounded-lg overflow-hidden relative hover:shadow-2xl transition-all duration-300 flex-none w-72 bg-transparent">
                  <img src="/hc5.png" alt="Fostering Growth Through Peer Support" className="w-full object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Fostering Growth Through Peer Support</h3>
                    <p className="text-gray-800">In our tech club, senior members host weekly sessions to address questions, clarify doubts, and guide on technical topics, fostering support, idea exchange, and community growth.</p>
                  </div>
                </div>

                <div className="carousel-item border-0 rounded-lg overflow-hidden relative hover:shadow-2xl transition-all duration-300 flex-none w-72 bg-transparent">
                  <img src="/hc2.png" alt="Guest Lectures by Industry Experts" className="w-full object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Guest Lectures by Industry Experts</h3>
                    <p className="text-gray-800">Gain insights from leading industry professionals who share their experiences and knowledge on the latest trends and technologies. Our guest lectures are a great opportunity to learn from the best and network with experts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
