
import renderEvalResult from "../renderEvalResult.js";

export default function  task_12 (value){
    const consoleValue = renderEvalResult(value)
    const resultTextValid = 'Отлично, всё записалось!'
    const resultTextErrValid = 'Что-то не так, попробуй еще раз.'
    const p = document.querySelector('.practicum12').textContent

    function resultStorageValid (){
        try {
            return  JSON.parse( localStorage.getItem('arrTwelve'))
        }
        catch (e){
            console.error(e)
            return {}
        }
    }

        if(Array.isArray(resultStorageValid()) && resultStorageValid().length === 3 && p === 'Алиса')return {
            valid: true,
            validText: resultTextValid,
            result: 'Массив arr был записан в Local Storage и получено правильное значение в Dom-дереве',
            localStorage:true
        }

        return {valid:false,validText:resultTextErrValid,result:consoleValue,localStorage:true,}



}
