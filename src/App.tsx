import React, { useState } from 'react'
function App() {
  const [theme, setTheme] = useState('');
  function toggleTheme() {
    if (theme == '') {
      document.documentElement.setAttribute('data-theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.setAttribute('data-theme', '');
      setTheme('');
    }
  }
  console.log("reloaded and theme is", document.documentElement.getAttribute('data-theme'));
  return (
    <div className='h-screen bg-primary  p-10' >
      <button className=' text-pink-50 font-bold bg-red-600 hover:bg-pink-900 p-5' onClick={toggleTheme}>Toggle Theme</button>
      <p className='text-secondary' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo architecto voluptates id illo praesentium, inventore labore dolores in dignissimos porro similique consectetur sapiente placeat numquam, reiciendis excepturi quaerat dolorem quas.</p>
    </div>
  )
}
export default App