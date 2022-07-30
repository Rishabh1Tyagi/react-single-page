import React from "react";
// 
const Summary = () => {
    const [inputFields, setInputFields] = React.useState([
        {
          notRelevant: "",
          yes: "",
          no: "",
        },
      ]);
    
      const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
      };
    
      const addFields = () => {
        let newfield = { notRelevant: "", yes: "", no: "" };
        setInputFields([...inputFields, newfield]);
      };
    
  return (
    <>
      {inputFields.map((input, index) => {
        return (
          <div class="card" key={index}>
            <div class="container">
              <h3>
                <b>Pain & Functional Description</b>
              </h3>
              <p class="description">
                The description of the current situation gives your Optimum{" "}
                <br />
                Trainer a picture of and clues to underlying causes of your{" "}
                <br />
                problems
              </p>
            </div>
            <br />
            <div class="container">
              <p>
                If you have problems with pain/aches, stiffness, weakness or
                functional problems, decsribe this/these below.(List the
                symptoms in descending order with the most troublesome first)
              </p>
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="80"
              ></textarea>
            </div>

            <div class="radio_section">
              <div class="radio_input">
                <p>Have you been diagnosed with this problem?</p>
                <div class="input_label">
                   {" "}
                  <input
                    type="radio"
                    name="notRelevant"
                    value={input.notRelevant}
                    onChange={(event) => handleFormChange(index, event)}
                  />
                    <label for="html">Not Relevant</label> {" "}
                  <input
                    type="radio"
                    name="yes"
                    value={input.yes}
                    onChange={(event) => handleFormChange(index, event)}
                  />
                    <label for="html">Yes</label> {" "}
                  <input
                    type="radio"
                    name="no"
                    value={input.no}
                    onChange={(event) => handleFormChange(index, event)}
                  />
                    <label for="html">No</label>
                </div>
              </div>
            </div>

            <br />
            {/* second radio div start here */}
            <div class="radio_section">
              <div class="radio_input">
                <p>Did the problem start after a physical trauma?</p>
                <div class="input_label">
                    <input type="radio" id="html" value="Not Relevant" /> {" "}
                  <label for="html">Not Relevant</label>
                    <input type="radio" id="html" value="Yes" /> {" "}
                  <label for="html">Yes</label>
                    <input type="radio" id="html" value="No" /> {" "}
                  <label for="html">No</label>
                </div>
              </div>
            </div>

            <br />
            {/* third radio div start here */}
            <div class="radio_section">
              <div class="radio_input">
                <p>Did the problem start after a mental trauma?</p>
                <div class="input_label">
                    <input type="radio" id="html" value="Not Relevant" /> {" "}
                  <label for="html">Not Relevant</label>
                    <input type="radio" id="html" value="Yes" /> {" "}
                  <label for="html">Yes</label>
                    <input type="radio" id="html" value="No" /> {" "}
                  <label for="html">No</label>
                </div>
              </div>
            </div>

            <br />
            {/* fourth radio div start here */}
            <div>
              <p class="inner_text">
                Did the problem start after a mental trauma?
              </p>
              <div class="inner_input">
                  <input type="radio" id="html" value="Not Relevant" /> {" "}
                <label for="html">Not Relevant</label>
                  <input type="radio" id="html" value="Daily" /> {" "}
                <label for="html">Daily</label>
                  <input
                  type="radio"
                  id="html"
                  value="Several times/week"
                />  <label for="html">Several times/week</label>
                  <input
                  type="radio"
                  id="html"
                  value="A few times/week"
                />  <label for="html">A few times/week</label>
              </div>
              <div class="outer_input">
                  <input type="radio" id="html" value="A few times/year" /> {" "}
                <label for="html">A few times/year</label>
              </div>
            </div>

            {/* new div start here */}
            <div>
              <p class="inner_texts">When do you experience the problems?</p>
              <div class="inner_checkbox">
                <label class="container">
                  Not Relevant
                  <input type="checkbox" checked="checked" />
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  When lying down
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  When Sitting
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  Under standing
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="container">
                  In walking
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            {/* ends here */}

            {/* new div start here */}
            <div>
              <p class="expreience">
                How intense is the experience of the problem on average on a
                0-10 scale?
              </p>
              <div class="radio_label">
                <label>1</label>
                <label>2</label>
                <label>3</label>
                <label>4</label>
                <label>5</label>
                <label>6</label>
                <label>7</label>
                <label>8</label>
                <label>9</label>
              </div>
            </div>
            <div class="radio_number_inputs">
              <input type="radio" id="html" value="HTML" />
              <input type="radio" id="html" value="HTML" />
              <input type="radio" id="html" value="HTML" />
              <input type="radio" id="html" value="HTML" />
              <input type="radio" id="html" value="HTML" />
              <input type="radio" id="html" value="HTML" />
              <input type="radio" id="html" value="HTML" />
              <input type="radio" id="html" value="HTML" />
              <input type="radio" id="html" value="HTML" />
            </div>
            <div class="label_ten">
              <label>10</label>
            </div>
            <div class="radio_ten">
              <input type="radio" id="html" value="HTML" />
            </div>
            {/* div ends here */}
            <br />

            {/* div start here */}
            <div class="plus_button" onClick={addFields}>
              <i class="material-icons">add</i>
            </div>
            {/* div ends here */}
            <br />
            {/* new div for button start here */}
            <div class="buttons">
              <button class="inner_button">Back</button>
              <button class="inner_button">
                Next
              </button>
            </div>
            {/* ends here..  */}
          </div>
        );
      })}
    </>
  );
};

export default Summary;
