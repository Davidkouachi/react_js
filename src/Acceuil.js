import React from 'react'
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';


function Acceuil(){
    return(
      <div>
  <Button
    color="primary"
    onClick={function noRefCheck(){}}
  >
    Open
  </Button>
  <Offcanvas
    backdrop={false}
    fade={false}
    toggle={function noRefCheck(){}}
  >
    <OffcanvasHeader toggle={function noRefCheck(){}}>
      Offcanvas
    </OffcanvasHeader>
    <OffcanvasBody>
      <strong>
        This is the Offcanvas body.
      </strong>
    </OffcanvasBody>
  </Offcanvas>
</div>
    );
}

export default Acceuil;