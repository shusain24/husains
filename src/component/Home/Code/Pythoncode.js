import React from 'react'
import './Pythoncode.css'
export default function Pythoncode() {

    var timeHour = String.raw`
      public class Husains {
        public static void main(String[] args) {
            int curDate = new Date();
            curDate=curDate.getHours();

             if(curDate>=1 && curDate<12){
                    System.out.println("Good Morning..!!");
                }
            else if(curDate>=12 && curDate<17){
                System.out.println("Good Afternoon..!!");
            }
            else if(curDate>=17 && curDate<21){
                System.out.println("Good Evening..!!");
            }
            else{
                System.out.println("Good Night..!!");
            }
        }
      }
        `;
  return (
    <div>
      <pre className="codeStyle1">{timeHour}</pre>
    </div>
  )
}
