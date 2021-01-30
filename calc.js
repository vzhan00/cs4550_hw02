 

(function () {

  let result = "0";

 

  //inputs a number

  function number_pressed() {

    //parses number

    let input = parseInt(this.innerHTML);

 

    //either adds the number to the end of the current number shown, or starts a new number

    if (result == "0") {

      result = input.toString();

    } else {

      result += input;

    }

  }

 

  //function button pressed

  function function_pressed(operator) {

    //making sure string does not end with a function

    //enforces pressing the eval button after every operation

    if (Number.isInteger(parseInt(result.slice(-1))) && !result.slice(-1).includes("+")

      && !result.slice(-1).includes("-") && !result.slice(-1).includes("/") && !result.slice(-1).includes("*")) {

      result += operator;

    }

  }

 

  //clear button pressed

  function clear_pressed() {

    result = "0";

  }

 

  //eval button pressed

  function eval_pressed() {

    //making sure string does not end with a function

    if (Number.isInteger(parseInt(result.slice(-1)))) {

      result = eval(result).toString();

    }

  }

 

  //decimal button pressed

  function dec_pressed() {

    //making sure string does not have an existing decimal

    if (!result.includes(".")) {

      result += ".";

    }

  }

 

  //refreshes the output on the calculator

  function update_calc() {

    (document.getElementById("output")).innerHTML = result;

  }

 

  //adds buttons as listeners

  function add_buttons() {

    let calc = document.getElementById("calculator");

    let table = calc.getElementsByTagName("tr");

 

    for (let i = 0; i < 4; i++) {

      for (let j = 0; j < 4; j++) {

        let button = table.item(i).getElementsByTagName("button").item(j);

 

        //had to specify this one, eval if it doesnt end with a function

        if (button.getAttribute("id") == "eval") {

          button.addEventListener("click", () => {

            if (result.match(/[^\d.]/)) {

              return eval_pressed();

            } else {

              return function_pressed("+");

            }

          }, false);

          button.addEventListener("click", update_calc, false);

        }

 

        //clear button

        if (button.getAttribute("id") == "clear") {

          button.addEventListener("click", clear_pressed, false);

          button.addEventListener("click", update_calc, false);

        }

 

        //operator buttons

        if (button.getAttribute("id") == "operator") {

          button.addEventListener("click", () => {

            return function_pressed(button.innerHTML);

          }, false);
          button.addEventListener("click", update_calc, false);

        }

 

        //number buttons

        if (button.getAttribute("id") == "number") {

          button.addEventListener("click", number_pressed, false);

          button.addEventListener("click", update_calc, false);

        }

 

        //decimal button

        if (button.getAttribute("id") == "decimal") {

          button.addEventListener("click", dec_pressed, false);

          button.addEventListener("click", update_calc, false);

        }

      }

    }

  }

 

  //on load adds buttons

  window.addEventListener("load", add_buttons, false);

})();
