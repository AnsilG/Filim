async function search() {

    try {
        const movie = document.getElementById('movie_name').value
        if (!movie) {
            alert('Enter a movie Name')
        } else {
            let fetchedData = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=9b9c9683`)
            let data = await fetchedData.json();
            console.log(data)

            innerdata = `

            <div class="container p-3">
            <div class="row">
               <div class="col-lg-6">
                   <img src="${data.Poster}" alt=""  class="img-fluid">
                   <p class=" d-flex justify-content-center my-2">${data.Genre}</p>
                   
                   <h4 class="  my-2 justify-content-center">${data.Ratings[0].Value} </h4>
               </div>
               <div class="col-lg-6 p-2">
               <div class="d-flex">
               <div>
               <h3>${data.Title} (${data.Year})</h3>
               <p style="font-size:12px">${data.Released}</p>
               <div class="d-flex">
               <p style="font-size:12px">${data.Language}-${data.Country}</p>
               </div>
               </div>
            
               <div class="d-flex flex-column mx-5">
               
               
               </div>
               </div>
               
              
               <p><b>Cast : </b>${data.Actors}</p> 
                   <div>
                   <p><b>Director : </b>${data.Director}</p>
                   <p><b>Writer : </b>${data.Writer}</p>
                   </div>
             <p class="p-0"><b>Plot :</b> ${data.Plot}</p>
            
               </div>
            </div>
            </div>

              `

            result.innerHTML = innerdata;

        }
    }
    catch (error) {
        console.log(error);
    }
}
