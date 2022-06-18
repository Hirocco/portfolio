import './Form.css'

export default function Form() {

  return (
    <form>
        <h3 className='shiny'>Let's get in touch</h3>
        <input type="text" id='name' placeholder='Your Name' required/>
        <input type="email" id='email' placeholder='Your Email' required/>
        <textarea id='message' rows='4' placeholder="Put your message here"/>
        <a href='mailto:futuredev59@gmail.com' className='send-btn'>Send<span></span><span></span><span></span><span></span></a>
    </form>
  )
}
