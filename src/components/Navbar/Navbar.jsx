import './Navbar.css'

export default function Navbar() {
  return (
  
    <nav>
        <ul className='buttons-list'>
            <a href='#Home'><li className='btn-list'>Home<span></span><span></span><span></span><span></span></li></a>
            <a href='#About'><li className='btn-list'>About me<span></span><span></span><span></span><span></span></li></a>
            <a href='https://github.com/Hirocco' target='_blank'><li className='btn-list'>Projects<span></span><span></span><span></span><span></span></li></a>
            <a href='#Contact'><li className='btn-list'>Contact me<span></span><span></span><span></span><span></span></li></a>
        </ul>
    </nav>
  )
}
