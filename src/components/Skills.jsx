import React from 'react'

const Skills = () => {
    return (
        <div className='border-t border-t-gray-400 sm:mx-20 mx-10 py-10'>
        <section id="skills" className="py-6 text-center bg-gray-200 sm:w-4/6 m-auto mt-10">
          <h2 className="text-2xl font-bold underline">Skills</h2>
          <ul className="m-10 space-y-2 text-xl font-serif italic">
            <li className="bg-white p-2 rounded shadow">HTML, CSS, JavaScript, Python</li>
            <li className="bg-white p-2 rounded shadow">ReactJS, Redux, Zustand, Tailwind</li>
            <li className="bg-white p-2 rounded shadow">Node.js, Express.js, Socket.io</li>
            <li className="bg-white p-2 rounded shadow">MongoDB, SQLite</li>
            <li className="bg-white p-2 rounded shadow">Docker, Git, Postman</li>
          </ul>
        </section>
        </div>
      );
}

export default Skills