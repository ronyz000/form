function CreditShow({card,deleteone,title}){
	return(
		<div>
		<h2>{title}</h2>
		{card.map(function(val,index){
			return <div>{val}<button onClick={()=>{deleteone(index)}}>delete</button></div>
		})}
		

		</div>
		)
}
export default CreditShow