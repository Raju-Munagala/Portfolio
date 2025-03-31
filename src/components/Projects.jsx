import React from 'react'

const Projects = () => {
    return (
        <section id="projects" className="py-20 text-center border-t border-t-gray-400 sm:mx-20 mx-10 my-10">
          <h2 className="text-2xl font-bold underline">Projects</h2>
          <ul className="p-4 space-y-4 sm:w-4/6 sm:m-auto">
            <li className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold underline">Chit Chat – Real-time Messaging App</h3>
              <p className='font-serif italic py-10 sm:p-10'>Developed a real-time chat application using MERN stack and Socket.IO. Features user authentication, profile updates, and responsive UI.</p>
              <a href="https://github.com/Raju-Munagala/chit-chat" className="text-blue-500 hover:underline border p-2">GitHub Repo</a>
            </li>
            <li className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold underline">Nxt Watch – Video Streaming Website</h3>
              <p className='font-serif italic py-10 sm:p-10'>Built a YouTube clone with authentication, trending videos, and saved video functionality using React and JWT.</p>
              <a href="https://rajuswatchtube.ccbp.tech/login" className="text-blue-500 hover:underline border p-2">Live Demo</a>
              <h3 className='underline font-bold mt-6'>demo credentials:</h3>
              <h6>USERNAME:rahul</h6>
              <h6>PASSWORD:rahul@2021</h6>
            </li>
            <li className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold underline">DevTinder – Developer Connection Platform</h3>
              <p className='font-serif italic py-10 sm:p-10'>A social platform for developers to connect, send requests, and collaborate. Built with React, Node.js, and MongoDB.</p>
              <a href="https://github.com/Raju-Munagala/devTinderUI" className="text-blue-500 hover:underline border p-2">GitHub Repo</a>
            </li>
          </ul>
        </section>
      );
}

export default Projects