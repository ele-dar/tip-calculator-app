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
  const [alert, setAlert] = useState('')

  const calculateTip = () => (+form.tip * +form.bill / 100) / +form.people
  const calculateTotal = () => (+form.bill + (+form.tip * +form.bill / 100)) / +form.people

  const validatePeopleInput = (e) => {
    if (e.target.value === '0') {
      document.getElementById('people-input').style.outlineColor = 'hsl(14, 68%, 64%)'
      setAlert("Can't be zero")
    } else {
      document.getElementById('people-input').style.outlineColor = 'hsl(172, 67%, 45%)'
      setAlert('')
    }
  }

  useEffect(() => {
    if (form.bill && form.people != 0) {
      setTip(calculateTip())
      setTotal(calculateTotal())
    }
  }, [form])

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (e.target.type === 'radio') setShowCustom(false)
  }

  const handleCustomRadio = (e) => {
    setForm({ ...form, tip: '' })
    setShowCustom(true)
  }

  const handleReset = () => {
    setForm({
      bill: '',
      tip: 0,
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
          <form className='form-container'>
            <div>
              <h4>Bill</h4>
              <input id='bill-input' type="number" min={0.01} step=".01" name='bill' placeholder="0" onChange={handleInput} value={form.bill} />
            </div>
            <div>
              <h4>Select Tip %</h4>
              <div className="tip-input-container">
                <label>
                  <input type="radio" id="tip-5" name="tip" value="5" checked={form.tip === '5'} onChange={handleInput} />
                  <span>5%</span>
                </label>
                <label>
                  <input type="radio" id="tip-10" name="tip" value="10" checked={form.tip === '10'} onChange={handleInput} />
                  <span>10%</span>
                </label>
                <label>
                  <input type="radio" id="tip-15" name="tip" value="15" checked={form.tip === '15'} onChange={handleInput} />
                  <span>15%</span>
                </label>
                <label>
                  <input type="radio" id="tip-25" name="tip" value="25" checked={form.tip === '25'} onChange={handleInput} />
                  <span>25%</span>
                </label>
                <label>
                  <input type="radio" id="tip-50" name="tip" value="50" checked={form.tip === '50'} onChange={handleInput} />
                  <span>50%</span>
                </label>
                {showCustom ? (
                  <label>
                    <input type="radio" id="custom-radio" name="tip" />
                    <input type="number" id="custom-input" min={0} name="tip" placeholder='0' autoFocus onChange={handleInput} value={form.tip} />
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
              {alert && <h4 className='alert'>{alert}</h4>}
              <input id='people-input' type="number" min={1} name='people' placeholder="0" onChange={e => { validatePeopleInput(e); handleInput(e) }} value={form.people} />
            </div>
          </form>

          <div className="output-container">
            <div className='output'>
              <div>
                <h4>Tip Amount <span>/ person</span></h4>
                <div className='output-number'>{tip ? '$' + tip.toFixed(2) : '$0.00'}</div>
              </div>
              <div>
                <h4>Total <span>/ person</span></h4>
                <div className='output-number'>{total ? '$' + total.toFixed(2) : '$0.00'}</div>
              </div>
            </div>
            <button className='btn' onClick={handleReset}>Reset</button>
          </div>
        </div>
      </main >

      <footer>
        Challenge by <a href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX" target='_blank'>Frontend Mentor</a>.
        Coded by <a href="https://github.com/ele-dar" target='_blank'>ele-dar</a>.
      </footer>
    </>
  )
}

export default App
