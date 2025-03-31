import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="p-6 text-center bg-gray-200">
          <h2 className="text-2xl font-bold">Contact Me</h2>
          <p className="mt-2 text-gray-700">Feel free to reach out to me via the following platforms:</p>
          <ul className="mt-4 space-y-4">
            <li><a href="mailto:Munagalaraju50@gmail.com" className="text-blue-500 hover:underline border p-1">Email: Munagalaraju50@gmail.com</a></li>
            <li><a href="https://www.linkedin.com/in/raju-munagala/" className="text-blue-500 hover:underline border p-1">LinkedIn</a></li>
            <li><a href="https://github.com/raju-munagala/" className="text-blue-500 hover:underline border p-1">GitHub</a></li>
          </ul>
        </section>
      );
}

export default Contact