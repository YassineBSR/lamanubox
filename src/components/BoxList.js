import '../styles/BoxList.css'

function BoxList(){
     return <div className="card-group">
     <div className="card">
       {/* <img src="..." ClassName="card-img-top" alt="..."> */}
       <div className="card-body">
         <h5 className="card-title">Boxes S de 5 à 7.50 m3</h5>
         <p className="card-text"> 50€ HT / mois</p>
        
       </div>
     </div>
     <div className="card">
       {/* <img src="..." className="card-img-top" alt="..."> */}
       <div className="card-body">
         <h5 className="card-title">Boxes M de 7.50 à 15 m3</h5>
         <p className="card-text">80€ HT / mois</p>
  
       </div>
     </div>
     <div className="card">
       {/* <img src="..." className="card-img-top" alt="..."> */}
       <div className="card-body">
         <h5 className="card-title">Boxes L de 15 à 25 m3</h5>
         <p className="card-text">140€ HT / mois</p>
      
       </div>
     </div>
     <div className="card">
       {/* <img src="..." className="card-img-top" alt="..."> */}
       <div className="card-body">
         <h5 className="card-title">Boxes XL de 25 à 40 m3</h5>
         <p className="card-text">200€ HT / mois</p>
       
       </div>
     </div>
   </div>
}

export default BoxList