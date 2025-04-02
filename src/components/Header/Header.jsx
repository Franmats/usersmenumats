import "./Header.css"

export const Header = ()=> {
       
  return (
    <div>
        <header className="header-view">
            <div className="header-contain">
              <div className="header-image">
                      <img src="https://firebasestorage.googleapis.com/v0/b/super-ecommerce-f7347.appspot.com/o/demo.png?alt=media&token=83c0e637-43cd-4386-8abc-62ff7f7f7ea5" alt="logo"  width="250px" height="250px"/>
              </div>  
              <div className="header-description">
                <div className="c1">
                      <div className="social-links">
                        <a href=""><img src="https://firebasestorage.googleapis.com/v0/b/super-ecommerce-f7347.appspot.com/o/whatsappn.png?alt=media&token=153bb519-51da-41b2-84cc-28b87aab8d18" alt="" width="45px" height="45px"/></a>
                        <a href=""><img src="https://firebasestorage.googleapis.com/v0/b/super-ecommerce-f7347.appspot.com/o/ig_logo.png?alt=media&token=56588b26-9327-4c20-b29d-8d9156b29f20" alt="" width="47px" height="47px"/></a>
                      </div>
                      <div className="schedule-container">
                        <div><b>HORARIOS DE ATENCIÓN</b></div>
                        <div>LUN-VIER: 20:00 - 00:30</div>
                        <div>SAB-DOM: 20:00 - 01:30</div>
                      </div>
                </div>
                <button className="c2" aria-label="Ver promociones disponibles">
                  <a href="/menu/demo-promociones">VER PROMOCIONES</a>

                </button>
                
                
              </div> 
            </div>
        </header>    
    </div>

    
  );
}