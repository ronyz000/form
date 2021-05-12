import {useEffect,useState} from 'react'
import CardShow from './cardshow'
function Creditcard(){
	let [card,setcard]=useState([])
	let [title,settitle]=useState("")
	useEffect(() => {
		let first=document.getElementById("value1")
	     first.focus()
		let values = document.getElementById("value")
	for(let pin of values.children) {
	
    pin.onkeypress = function() {
        if(pin.nextElementSibling) {
            pin.nextElementSibling.focus();
        }
    }
    pin.onpaste = function() {
    	  setTimeout(function(){
        if(pin.nextElementSibling) {
            pin.nextElementSibling.focus();
        }     
    }, 0)

       
    }
}
document.getElementById('value').addEventListener('keydown', function (event) {
	console.log(event)
    if (event.keyCode == 8) {
       let a=document.getElementById("value1").value.split("")
       let b=document.getElementById("value2").value.split("")
       let c=document.getElementById("value3").value.split("")
       let d=document.getElementById("value4").value.split("")
       if (d.length>0) {
       	var newArr4=d.slice(0,-1)
       	console.log(newArr4)
       	document.getElementById("value4").value=newArr4.join('')
       }else if(c.length>0){
       	document.getElementById("value3").focus()
       	var newArr3=c.slice(0,-1)
       	document.getElementById("value3").value=newArr3.join('')

       }else if(b.length>0){
       	document.getElementById("value2").focus()
       	var newArr2=b.slice(0,-1)
       	document.getElementById("value2").value=newArr2.join('')

       }else if(a.length>0){
       	document.getElementById("value1").focus()
       	var newArr1=a.slice(0,-1)
       	document.getElementById("value1").value=newArr1.join('')
       }  
    }
})
  },[]);
	function submit(){
		settitle("Saved Cards")
	   let a=document.getElementById("value1").value
       let b=document.getElementById("value2").value
       let c=document.getElementById("value3").value
       let d=document.getElementById("value4").value
       let no=a+b+c+d
       let newarr=card.concat(no)
       setcard(newarr)
       console.log(card)

	}
	function deleteone(indextodel){
		
		let updatedarr=card.filter(function(val,index){
			if (indextodel==index) {
				return false
			}else return true
		})

		setcard(updatedarr)
		alert(`${indextodel}th item deleted`)

	}
	return(
		<div>
		<h3>ENTER CARD NUMBER</h3>
		<div class="value" id="value">
    <form>
    <input type="text" id="value1" placeholder="0" maxLength="4" class="num" focus="true" required/> 
    <input type="text" id="value2" placeholder="0" maxlength="4" class="num" required/> 
    <input type="text" id="value3" placeholder="0" maxlength="4" class="num" required/> 
    <input type="text" id="value4" placeholder="0" maxlength="4" class="num"required/> 
    </form>
    
</div>
<button onClick={submit}>submit</button>
<CardShow card={card} deleteone={deleteone} title={title}/>

		</div>
		)

	}
export default Creditcard