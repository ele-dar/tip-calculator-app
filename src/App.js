import './App.css'
import logo from './images/logo.svg'
import iconDollar from './images/icon-dollar.svg'
import iconPerson from './images/icon-person.svg'


function App() {
  return (
    <>
      <header>
        <img src={logo} alt="App logo" />
      </header>

      <main>
        <div className="container">
          <div className="form-container">
            <form>
              <div>
                <h4>Bill</h4>
                <div><img src={iconDollar} alt="Dollar icon" /><input type="number" placeholder="0" /></div>
              </div>
              <div>
                <h4 for="">Select Tip %</h4>
                <div className="tip-switch-field">
                  <input type="radio" id="tip-5" name="tip" value="5" />
                  <label for="tip-5">5</label>
                  <input type="radio" id="tip-10" name="tip" value="10" />
                  <label for="tip-10">10</label>
                  <input type="radio" id="tip-15" name="tip" value="15" />
                  <label for="tip-15">15</label>
                  <input type="radio" id="tip-25" name="tip" value="25" />
                  <label for="tip-25">25</label>
                  <input type="radio" id="tip-50" name="tip" value="50" />
                  <label for="tip-50">50</label>
                  <input type="radio" id="tip-custom-radio" name="tip" value="custom" />
                  <label for="tip-custom-radio">Custom</label>
                  <input type="text" id="tip-custom-text" name="tip" value="0" />
                </div>
              </div>
              <div>
                <h4>Number of People</h4>
                <div><img src={iconPerson} alt="Person icon" /><input type="number" placeholder="0" /></div>
              </div>
            </form>
          </div>
          <div className="output-container">
            <div>
              <h4>Tip Amount <span>/ person</span></h4>
              <div>$ 0.00</div>
            </div>
            <div>
              <h4>Total <span>/ person</span></h4>
              <div>$ 0.00</div>
            </div>
            <button>Reset</button>
          </div>

        </div>

      </main>
      <footer>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">ele-dar</a>.
        </div>
      </footer>

    </>
  )
}

export default App
