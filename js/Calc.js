


var CalculationController = function(){
    
    return {
        maff: function(){
            var info, actualSalary, dailySalary, weeklySalary, biweeklySalary, 
            semimonthlySalary, monthlySalary, 
            
            
             info= UIController.getinput();
             actualSalary

            if (info.timeframe == 'hour'){
                actualSalary= (Number(info.pay) * Number(info.hour) * Number(info.day) * 52);
                dailySalary= Math.round(actualSalary/260);
                weeklySalary= Math.round(actualSalary/52);
                biweeklySalary = Math.round(actualSalary/26);
                monthlySalary = Math.round(actualSalary/12);
                semimonthlySalary = Math.round(actualSalary/24);
                console.log(dailySalary, weeklySalary, biweeklySalary, monthlySalary);
            }
            else if(info.timeframe == 'day'){
                actualSalary= (Number(info.pay) * Number(info.day) * 52);
                dailySalary= Math.round(actualSalary/260);
                weeklySalary= Math.round(actualSalary/52);
                biweeklySalary = Math.round(actualSalary/26);
                monthlySalary = Math.round(actualSalary/12);
                semimonthlySalary = Math.round(actualSalary/24);
                console.log(dailySalary, weeklySalary, biweeklySalary, monthlySalary);
            }
            else if(info.timeframe == 'month'){
                actualSalary= (Number(info.pay) * Number(info.month));
                dailySalary= Math.round(actualSalary/260);
                weeklySalary= Math.round(actualSalary/52);
                biweeklySalary = Math.round(actualSalary/26);
                monthlySalary = Math.round(actualSalary/12);
                semimonthlySalary = Math.round(actualSalary/24);
                console.log(dailySalary, weeklySalary, biweeklySalary, monthlySalary);
            }
            
            
            
            return {
                
                sal: actualSalary,
                daily: dailySalary,
                weekly: weeklySalary,
                biweekly: biweeklySalary,
                monthly: monthlySalary,
                semimonthly: semimonthlySalary
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
        enter: '.enter',
        paragraph: '.paragraph'
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

            document.querySelector(DOMStrings.enter).insertAdjacentHTML('afterend', newHtml);
            
        },

        showChart: function(){
            var Html, newHtml;
            //this is done in app controller too. try not to repeat yourself
            var hm = CalculationController.maff();
            
            //remove previously added html element
            if(document.querySelector('.table')){
                var yeah = document.querySelector('.table')
                yeah.remove();
            }
            
            //insert new html element
            Html = `<div class="table">
                        <table>
                        <tr>
                            <th>Frequency</th>
                            <th>Salary</th>
                        </tr>
                        <tr>
                            <td>Daily</td>
                            <td class="chart daily_cash">%daily_cash%</td>
                        </tr>
                        <tr>
                            <td>weekly</td>
                            <td class="chart weekly_cash">%weekly_cash%</td>
                        </tr>
                        <tr>
                            <td>bi-weekly</td>
                            <td class="chart biweekly_cash">%biweekly_cash%</td>
                        </tr>
                        <tr>
                            <td>semi-monthly</td>
                            <td class="chart semimonthly_cash">%semimonthly_cash%</td>
                        </tr>
                        <tr>
                            <td>monthly</td>
                            <td class="chart monthly_cash">%monthly_cash%</td>
                        </tr>
                        <tr>
                            <td>Annually</td>
                            <td class="chart annually_cash">%annually_cash%</td>
                        </tr>
                        </table>
                        
                    </div>`

            newHtml = Html.replace('%daily_cash%', hm.daily);
            newHtml = newHtml.replace('%weekly_cash%', hm.weekly);
            newHtml = newHtml.replace('%biweekly_cash%', hm.biweekly);
            newHtml = newHtml.replace('%monthly_cash%', hm.monthly);
            newHtml = newHtml.replace('%semimonthly_cash%', hm.semimonthly);
            newHtml = newHtml.replace('%annually_cash%', hm.sal);


            document.querySelector(DOMStrings.paragraph).insertAdjacentHTML('afterend', newHtml);

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
        UIControl.showChart();



        
        
    };
        
    return {
        //All code necessary when application starts
        init: function(){
            
            setupEventListeners();
        }
    }
    

}(CalculationController, UIController);

AppController.init();


