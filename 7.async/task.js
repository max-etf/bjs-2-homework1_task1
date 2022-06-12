/*task 1*/ 
/* function searchid(object) {
   return ((object.id === id) ? true : false)
} */

class AlarmClock {
        
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

     addClock(time, callback, id) {
        if (id===undefined) throw new Error('error text') ;
        if (this.alarmCollection.find((object) => {
           /*  ((object.id === id) ? true : false)  -- ээээ ?? а почему не работает тернарник ???*/
           if (object.id === id) return true;
           else return false;
        })!==undefined) console.error('error') ;
        else {
            let alarm = {
                id,
                time,
                callback
            }

            alarm.id = id;
            alarm.time = time;
            alarm.callback = callback;

            this.alarmCollection.push(alarm);
        }
    }

    removeClock(id) {
        try{
        let filtered = this.alarmCollection.filter(object => {
            /* ((objact.id !== id) ? true : false) // аналогично: почему не работает тернарник ??*/
            if (object.id !== id) return true;
            else return false;
        })
        this.alarmCollection = filtered;
        return true;
        }
        catch {
            return false;
        }
    }
     
    getCurrentFormattedTime() {
        let alarmtime = new Date;
        let alarmtimeString = (alarmtime.getHours() > 10 ? `${alarmtime.getHours()}` : `0${alarmtime.getHours()}`)+":"+(alarmtime.getMinutes() > 10 ? `${alarmtime.getMinutes()}` : `0${alarmtime.getMinutes()}`)
                return alarmtimeString;
    }

    start() {
        function checkClock(alarm) {
            let alarmtime = new Date; 
            let alarmtimeString = (alarmtime.getHours() > 10 ? `${alarmtime.getHours()}` : `0${alarmtime.getHours()}`)+":"+(alarmtime.getMinutes() > 10 ? `${alarmtime.getMinutes()}` : `0${alarmtime.getMinutes()}`)
            /// а как внутри функиции другого метода обращаться к методу getCurrentFormattedTime ??
           if (alarm.time === alarmtimeString)
           {
               alarm.callback();
           }
        }

        if (this.timerId === null) {
            this.timerId = setInterval(this.alarmCollection.forEach(element => {checkClock(element)}),1000)           
        }
    }

    stop() {
        if (this.timerId !== null){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(element => {
            console.log(`${element.id}`+"  "+`${element.time}`);
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    } 
}
/*task 2*/ 
let alarm1 = new AlarmClock;

let ringtone = function() {
    console.log("get up")
} 

let now = new Date
let nowString = (now.getHours() > 10 ? `${now.getHours()}` : `0${now.getHours()}`)+":"+(now.getMinutes() > 10 ? `${now.getMinutes()}` : `0${now.getMinutes()}`)
alarm1.addClock(nowString,f => {ringtone()},1);

function addMinutes(date, minutes) {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() + minutes);
    return result;
  }

now = addMinutes(now,1)
nowString = (now.getHours() > 10 ? `${now.getHours()}` : `0${now.getHours()}`)+":"+(now.getMinutes() > 10 ? `${now.getMinutes()}` : `0${now.getMinutes()}`)
alarm1.addClock(nowString,f => {ringtone()},2);


now = addMinutes(now,1)
nowString = (now.getHours() > 10 ? `${now.getHours()}` : `0${now.getHours()}`)+":"+(now.getMinutes() > 10 ? `${now.getMinutes()}` : `0${now.getMinutes()}`)
alarm1.addClock(nowString,f => {ringtone()},3);

//alarm1.removeClock(3);

alarm1.printAlarms();

alarm1.start();