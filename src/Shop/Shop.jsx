import './Shop.css'
export function Shop(){
    return(
        <>
        <div className="container1">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/Captura%20de%20pantalla%20(12).png?alt=media&token=3fb8bbed-fe3f-485c-b0b5-2b68ffbbd0ad" className="d-block  w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/cass1.jpg?alt=media&token=dd760e97-cb5a-4d32-9de7-7f35ad9f6038" className="d-block  w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/combo.jpg?alt=media&token=85d5725e-0c1e-4fdc-9f5d-2cf888ad6db6" className="d-block  w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/buso.jpg?alt=media&token=5de1fa68-3831-46b9-adb0-408ca55cfe79" className="d-block  w-100" alt="..."/>
    </div>

    
  </div>
  <h1>Nuestros productos</h1>
  <section>
          <div className="container my-5">
              <div className="row justify-content-start">
                  <div className="col-4">
                      <img src="https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ti2.webp?alt=media&token=9253d8d4-8d6e-4de5-98db-ae74072699cd" className="img-fluid w-100" />
                  </div>
                  <div className="col-4">
                      <img src="https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ti3.webp?alt=media&token=97b1838d-66cd-46de-a12b-d9f07cdab4f1" className="img-fluid w-100" />
                  </div>
                  <div className="col-4">
                      <img src="https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ti4.webp?alt=media&token=3d8bd61f-7de6-45f4-be06-7d14d9d1ef7a"   className="img-fluid w-100" />
                  </div>
 
              </div>   
            </div>              
      </section>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
        </>
    )
}