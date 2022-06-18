import './Home.css'
import ja from './images/ja.png'
import certificate from './images/il_fullxfull.1949099157_jlg9.png'
import Form from '../Form/Form';

export default function Home() {

  return (
    <main>
      <section id='Home'>
        <img className='ja-img' src={ja}/>
        <h1 className='shiny'>Kamil Uchwat - Junior Frontend developer</h1>
        <p className='shiny quote'><q>It always seems impossible until it's done.</q><cite> - Nelson Mandela</cite></p>
      </section>
      <section id='About'>
        <h1 className='shiny'>About me</h1>
        <p className='shiny' >Hello !<br/>I am 18yo self-taught passionate front end developer, currently starting first year of university at computer science major.<br/>I've finished fcc js,responsive web design and DSA courses and plenty of other courses (for example ReactJs course on scrimba).</p>
        <br/>
        <p className='shiny'>My coding journey has started around 2-3 years, at first with c++ in which I learnt about OOP programming, basic data structures,algorithms and sfml library, last year I switched up to js and web development (simply because it brought me joy of creating stuff outside of console).</p>
        <div className='card-group'>
          <article className='card'>
            <img src={certificate} alt='certificate' className='card--img'/>
            <div className='card--data'>
                <h2 className='card--title'>Responsive web design</h2>
                <p className='card--description'>About this certificate</p>
                <a href='#' className='card--btn'>Learn more about fcc RWB certificate</a>
            </div>
          </article>
          <article className='card'>
            <img src={certificate} alt='certificate' className='card--img'/>
            <div className='card--data'>
                <h2 className='card--title'>JavScript DSA</h2>
                <p className='card--description'>About this certificate</p>
                <a href='#' className='card--btn'>Learn more about fcc JS and DSA certificate</a>
            </div>
          </article>
          <article className='card'>
            <img src={certificate} alt='certificate' className='card--img'/>
            <div className='card--data'>
                <h2 className='card--title'>Frontend development libraries</h2>
                <p className='card--description'>About this certificate</p>
                <a href='#' className='card--btn'>Learn more about fcc FE libraries certificate</a>
            </div>
          </article>
        </div>
      </section>
      <section id='Contact'>
      <Form/>
      </section>
    </main>
  )
}
