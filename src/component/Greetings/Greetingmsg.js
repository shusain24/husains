import React from 'react'
import './Greetingsmsg.css'


let curDate = new Date();
curDate=curDate.getHours();
let greetings=''

if(curDate>=1 && curDate<12){
    greetings ='Good Morning..!!'
}
else if(curDate>=12 && curDate<17){
    greetings='Good Afternoon..!!'
}
else if(curDate>=17 && curDate<21){
    greetings='Good Evening..!!'
}
else{
    greetings="Good Night..!!"
}


const Greetingmsg = () => {
  return (
    <div className='greetingMsg'>
      {greetings}
    </div>
  )
}

export default Greetingmsg
