


var CalculationController = function(){
    
    return {
        maff: function(){
            
            var info= UIController.getinput();
            var actualSalary

            if (info.timeframe == 'hour'){
                var actualSalary= (Number(info.pay) * Number(info.hour) * Number(info.day) * 52);
            }
            else if(info.timeframe == 'day'){
                var actualSalary= (Number(info.pay) * Number(info.day) * 52);
            }
            else if(info.timeframe == 'month'){
                var actualSalary= (Number(info.pay) * Number(info.month));
            }
            
            
            
            return {
                
                sal: actualSalary
            }

        },

    }

}();




var UIController = function(){

    var DOMStrings = {
        inputpay: '.pays',
        inputhours: '.hours',
        inputdays: '.days',
        inputmonths: '.months',
        mathbutton: '.math',
        timedropdown: '.time_selector',
        textview: '.text_view',
        yup: '.enter'
    }

    return {

        uichanges: function(){

            var salarytime = document.querySelector('.time_selector').value;
            if (salarytime == 'hour'){
                document.querySelector('.items').innerHTML =
                `<label>Salary</label>
                <input class="pays" type="number" name="pays ">
                <label>Per</label>
                <select class="time_selector" onchange="UIController.uichanges()">
                    <option class="hourly" type="text" value="hour" selected>hour</option>
                    <option class="daily" type="text" value="day">day</option>
                    <option class="monthly" type="text" value="month">month</option>
                </select>
                <label>Hours Per Day</label>
                <input class="hours" type="number" name="hours">
                <label>Days Per Week</label>
                <select class="days" type="text" name="days">
                    <option class="one" value="1">1</option>
                    <option class="two" value="2">2</option>
                    <option class="three" value="3">3</option>
                    <option class="four" value="4">4</option>
                    <option class="five" value="5">5</option>
                    <option class="six" value="6">6</option>
                    <option class="seven" value="7">7</option>
                </select>`
            }

            else if (salarytime == 'day'){
                document.querySelector('.items').innerHTML = 
                    `<label>Salary</label>
                    <input class="pays" type="number" name="pays ">
                    <label>Per</label>
                    <select class="time_selector" onchange="UIController.uichanges()">
                        <option class="hourly" type="text" value="hour" >hour</option>
                        <option class="daily" type="text" value="day" selected>day</option>
                        <option class="monthly" type="text" value="month">month</option>
                    </select>
                    <label>Days Per Week</label>
                    <select class="days" type="text" name="days">
                        <option class="one" value="1">1</option>
                        <option class="two" value="2">2</option>
                        <option class="three" value="3">3</option>
                        <option class="four" value="4">4</option>
                        <option class="five" value="5">5</option>
                        <option class="six" value="6">6</option>
                        <option class="seven" value="7">7</option>
                    </select>`;
            }

            else if (salarytime == 'month'){
                //put months worked per year
                document.querySelector('.items').innerHTML = 
                    `<label>Salary</label>
                    <input class="pays" type="number" name="pays ">
                    <select class="time_selector" onchange="UIController.uichanges()">
                        <option class="hourly" type="text" value="hour" >hour</option>
                        <option class="daily" type="text" value="day">day</option>
                        <option class="monthly" type="text" value="month" selected>month</option>
                    </select>
                    <label>Months Per Year</label>
                    <select class="months" type="text" name="months">
                        <option class="one" value="1">1</option>
                        <option class="two" value="2">2</option>
                        <option class="three" value="3">3</option>
                        <option class="four" value="4">4</option>
                        <option class="five" value="5">5</option>
                        <option class="six" value="6">6</option>
                        <option class="seven" value="7">7</option>
                        <option class="eight" value="8">8</option>
                        <option class="nine" value="9">9</option>
                        <option class="ten" value="10">10</option>
                        <option class="eleven" value="11">11</option>
                        <option class="twelve" value="12">12</option>
                    </select>`;
            }

            

        },

        getinput: function(){

            var edge = document.querySelector('.pays').value;

            if(document.querySelector(DOMStrings.timedropdown).value == 'hour'){

                return {

                    pay: document.querySelector(DOMStrings.inputpay).value,
                    hour: document.querySelector(DOMStrings.inputhours).value,
                    day: document.querySelector(DOMStrings.inputdays).value,
                    timeframe: document.querySelector(DOMStrings.timedropdown).value
    
                }
            }
            else if(document.querySelector(DOMStrings.timedropdown).value == 'day'){

                return {

                    pay: document.querySelector(DOMStrings.inputpay).value,
                    day: document.querySelector(DOMStrings.inputdays).value,
                    timeframe: document.querySelector(DOMStrings.timedropdown).value
    
                }
            }
            else if(document.querySelector(DOMStrings.timedropdown).value == 'month'){

                return {

                    pay: document.querySelector(DOMStrings.inputpay).value,
                    month: document.querySelector(DOMStrings.inputmonths).value,
                    timeframe: document.querySelector(DOMStrings.timedropdown).value
    
                }
            }
            
            
            
            
            
        },

        showSalary: function(){
            var Html, newHtml;
            //this is done in app controller too. try not to repeat yourself
            var hm = CalculationController.maff();
            
            //remove previously added html element
            if(document.querySelector('.salary_text')){
                var yeah = document.querySelector('.salary_text')
                yeah.remove();
            }
            
            //insert new html element
            Html = '<div class="salary_text">You will make %number% per year.</div>'

            newHtml = Html.replace('%number%', hm.sal);

            document.querySelector(DOMStrings.yup).insertAdjacentHTML('afterend', newHtml);
            
        },

        getDOMStrings: function(){
            return DOMStrings
        }
    }

}();




var AppController = function(CalcControl, UIControl){

    var setupEventListeners = function(){
        var DOM = UIControl.getDOMStrings();
        document.querySelector(DOM.mathbutton).addEventListener('click', calculatesalary);

    }
    

    
    var calculatesalary = function(){
        //Get input Data
        var input = UIControl.getinput();
        //console.log(input);

        //Calculate Salary
        var inf = CalcControl.maff();
        
        //Display Salary on page
        UIControl.showSalary();



        
        
    };
        
    return {
        //All code necessary when application starts
        init: function(){
            
            setupEventListeners();
        }
    }
    

}(CalculationController, UIController);

AppController.init();


