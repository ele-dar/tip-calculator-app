import { useEffect, useState } from 'react'
import './App.css'
import logo from './images/logo.svg'

function App() {
  const [form, setForm] = useState({
    bill: '',
    tip: '',
    people: ''
  })
  const [showCustom, setShowCustom] = useState(false)
  const [tip, setTip] = useState(null)
  const [total, setTotal] = useState(null)

  const calculateTip = () => (+form.tip * +form.bill / 100) / +form.people
  const calculateTotal = () => (+form.bill + (+form.tip * +form.bill / 100)) / +form.people
  // const calculateTotal = () => +form.bill / +form.people + calculateTip()

  useEffect(() => {
    if (form.bill && form.people) {
      setTip(calculateTip())
      setTotal(calculateTotal())
    }
  }, [form])

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleRadioInput = (e) => {
    setShowCustom(false)
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleCustomRadio = () => {
    setForm({ ...form, tip: '' })
    setShowCustom(true)
  }

  const handleReset = () => {
    setForm({
      bill: '',
      tip: '',
      people: ''
    })
    setTip(null)
    setTotal(null)
    setShowCustom(false)
  }

  return (
    <>
      <main>
        <h1><img src={logo} alt="App logo" /></h1>
        <div className="container">
          <form>
            <div>
              <h4>Bill</h4>
              <input id='bill-input' type="number" name='bill' placeholder="0" onChange={handleInput} value={form.bill} />
            </div>
            <div>
              <h4>Select Tip %</h4>
              <div className="tip-switch-field">
                <label >
                  <input type="radio" id="tip-5" name="tip" value="5" onChange={handleRadioInput} />
                  <span>5%</span>
                </label>
                <label>
                  <input type="radio" id="tip-10" name="tip" value="10" onChange={handleRadioInput} />
                  <span>10%</span>
                </label>
                <label>
                  <input type="radio" id="tip-15" name="tip" value="15" onChange={handleRadioInput} />
                  <span>15%</span>
                </label>
                <label>
                  <input type="radio" id="tip-25" name="tip" value="25" onChange={handleRadioInput} />
                  <span>25%</span>
                </label>
                <label>
                  <input type="radio" id="tip-50" name="tip" value="50" onChange={handleRadioInput} />
                  <span>50%</span>
                </label>
                {showCustom ? (
                  <label>
                    <input type="radio" id="custom-radio" name="tip" />
                    <input type="number" id="custom-input" name="tip" placeholder='0' autoFocus onChange={handleInput} value={form.tip} />
                  </label>
                ) : (
                  <label>
                    <input type="radio" id="custom-radio" name="tip" onClick={handleCustomRadio} />
                    <span>Custom</span>
                  </label>
                )}
              </div>
            </div>
            <div>
              <h4>Number of People</h4>
              <input id='people-input' type="number" name='people' placeholder="0" onChange={handleInput} value={form.people} />
            </div>
          </form>

          <div className="green-container">
            <div className='output-container'>
              <div>
                <h4>Tip Amount <span>/ person</span></h4>
                {tip ? <div className='output-amount'>${tip.toFixed(2)}</div> : <div className='output-amount'>$0.00</div>}
              </div>
              <div>
                <h4>Total <span>/ person</span></h4>
                {total ? <div className='output-amount'>${total.toFixed(2)}</div> : <div className='output-amount'>$0.00</div>}
              </div>
            </div>
            <button className='btn' onClick={handleReset}>Reset</button>
          </div>
        </div>
      </main >

      <footer>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
          Coded by <a href="https://github.com/ele-dar">ele-dar</a>.
        </div>
      </footer>
    </>
  )
}

export default App
