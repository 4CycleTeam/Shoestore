import React, { Fragment } from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn as MDBtn
} from 'mdb-react-ui-kit';


export const Footer = () => {
  return (
    <Fragment>
        <div className='mt-10 fixed-bottom' >
      <MDBFooter className='bg-dark text-center text-white container-fluid '>
      
        <MDBContainer className='p-1 pb-0'>
          <section className='mb-0 '>
            <MDBtn floating className='m-1' style={{ backgroundColor: '#3b5998' }}href='#!' role='button' >
              <MDBIcon fab icon='facebook-f' />
            </MDBtn>

            <MDBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#55acee' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='twitter' />
            </MDBtn>

            <MDBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#dd4b39' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='google' />
            </MDBtn>
            <MDBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#ac2bac' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='instagram' />
            </MDBtn>

            <MDBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#0082ca' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='linkedin-in' />
            </MDBtn>

            <MDBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#333333' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='github' />
            </MDBtn>
          </section>
        </MDBContainer>

        <div className='text-center' style={{ backgroundColor: '#212529' }}>
       © 2020 Copyright: 4Cycle Shoestore
        </div>
      
      </MDBFooter>
      </div>
    </Fragment>
  )
}