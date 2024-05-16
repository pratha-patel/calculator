const a =document.querySelector("#display");
function display_fun(input) {

        a.value += input;
}

function clear_fun()
{
    a.value =" ";
}

function cal_fun()
{
            try{
                a.value=eval(a.value);
              
            }
            catch(error)
            {
                a.value="error";
            }
}


