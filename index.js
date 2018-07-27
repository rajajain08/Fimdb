$(document).ready(()=>{
	letsgo();
});

let letsgo = ()=>{

 let search = 0;

 $("#search").click(()=>{
 	console.log("Lets Go..");
 	console.log(search);
 	let element = document.getElementById('title').value;
 	if(element.length==0)
 	$( "input" ).effect( "bounce", "fast" );
 	else
	{   
	
		let url=`https://www.omdbapi.com/?apikey=53454e1d&t=${element}`;
		let url1=`https://www.omdbapi.com/?apikey=53454e1d&i=${element}`;
		let url2 = url;
		if(search==1)
			{url2 = url1;}
		$.ajax({
			type:'GET',
			dataType:'json',
			url:url2,
			success: (data) =>{
				$('div#dummy').remove();
				console.log(data);
				if(data.Poster=="N/A")
					data.Poster="dummy.png";
				let name=data.Title;
				console.log(name);
				let tempRow = ` <div id="dummy"><div class="head">Movie:${data.Title}</div> 
							    	 <center><div class="card">
										 <img src="${data.Poster}"  style="width:70%; height:50%;">
										  <div class="container">
										    <h4><b>${data.Plot}</b></h4>
										    <p>Year:${data.Year}</p>
										    <p>Released:${data.Released}</p>
										    <p>Cast:${data.Actors}</p>
										    <p>Writer:${data.Writer}</p>
										    <p>Runtime:${data.Runtime}</p>
										  </div>
									 </div></center><div>`
								$("#showData").append(tempRow);	
			},
			error: (data) => {
				alert("some error");
			}
		});
		
		
	}

 });

 $("#byId").click(()=>{
 	console.log("Lets Go..again");
 	document.getElementsByName('search')[0].placeholder='Search Movie By Id...';
 	search=1;
		});
 $("#byTitle").click(()=>{
 	console.log("Lets Go..again");
 	document.getElementsByName('search')[0].placeholder='Search Movie By Title...';
 	search=0;
 	
		});
	
}