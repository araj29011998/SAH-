
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (

    <div className="container-fluid">

      <h1 className="text-center mt-4">Requistion form for booking of Accomodation</h1>
      <br />
      <br />

      <h2>1. Visitors and booking details</h2>

      <form>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder=" Name" />
            <br />
            <input type="text" className="form-control" placeholder=" Address" />
            <br />
            <input type="tel" className="form-control" placeholder="Mob.No" />
            <br />
            <p>No. of persons (max 2 persons per room)</p>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                value="option1" />
              <label className="form-check-label" for="inlineRadio1">lodging</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                value="option2" />
              <label className="form-check-label" for="inlineRadio2">food</label>
            </div>
            <br />
            <br />
            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option selected>Visitors Category</option>
              <option value="1">A</option>
              <option value="2">B</option>
              <option value="3">C</option>
              <option value="4">D</option>
              <option value="5">E</option>

            </select>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Organization" />
            <br />

            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option selected>Nationality</option>
              <option value="1">Indian</option>
              <option value="2">foreign</option>

            </select>

            <br />
            <br />
            <input type="email" className="form-control" placeholder="Email" />
            <br />

            <p>Type of rooms</p>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                value="option1" />
              <label className="form-check-label" for="inlineRadio1">Suite</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                value="option2" />
              <label className="form-check-label" for="inlineRadio2">Standard room</label>
            </div>
            <br />
            <br />

            <input type="text" className="form-control" placeholder="No. of rooms" />
            <br />
          </div>
        </div>
      </form>

      {/* 2 part */}

      <h2>2. Bills to be settled by </h2>
      <div class="row">
        <div class="col">
          <h4>Lodging</h4>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
              value="option1" />
            <label class="form-check-label" for="exampleRadios1">
              Visitor
                    </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
              value="option2" />
            <label class="form-check-label" for="exampleRadios2">
              Indentor
                    </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
              value="option1" />
            <label class="form-check-label" for="exampleRadios1">
              Department
                    </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
              value="option2" />
            <label class="form-check-label" for="exampleRadios2">
              Institute
                    </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
              value="option2" />
            <label class="form-check-label" for="exampleRadios2">
              Project Coordinator
                    </label>
          </div>
        </div>

        <div class="col">
          <h4>Food</h4>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios1"
              value="option1" />
            <label class="form-check-label" for="exampleRadios1">
              Visitor
                    </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios2"
              value="option2" />
            <label class="form-check-label" for="exampleRadios2">
              Indentor
                    </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios1"
              value="option1" />
            <label class="form-check-label" for="exampleRadios1">
              Department
                    </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios2"
              value="option2" />
            <label class="form-check-label" for="exampleRadios2">
              Institute
                    </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios2"
              value="option2" />
            <label class="form-check-label" for="exampleRadios2">
              Project Coordinator
                    </label>
          </div>
        </div>
      </div>

      <br />
      {/* part3 */}

      <h2>3. Indentors detail</h2>

      <div class="row">
        <div class="col">
          <input type="text" class="form-control" placeholder=" Name" />
          <br />
          <input type="text" class="form-control" placeholder="Emp Code" />
          <br />
          <input type="tel" class="form-control" placeholder="mobile" />


        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder=" Designation" />
          <br />
          <input type="text" class="form-control" placeholder="Department" />
          <br />
          <input type="email" class="form-control" placeholder="email" />


        </div>



      </div>


      {/* button */}
      <br />
      <button class="btn btn-primary">submit</button>

    </div>
  );
}

export default App;
