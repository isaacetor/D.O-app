import react from "react"
import styled from "styled-components"

const Stations=()=>{
    return(
        <Cont>
            <Wrap>
                <MainHead>
                    <h1>Stations</h1>
                </MainHead>
                <Main>
                    <Details>
                        <p>Create Stations</p>
                    </Details>
                    <Details>
                        <span>All Stations</span>
                    </Details>
                </Main>
                <Info>
                   <Infos>
                   <Hold>
                        <small>Name of station</small>
                        <input type="text" placeholder="Stations" />
                    </Hold>
                    <Hold>
                        <small>Phone Number</small>
                        <input type="text" placeholder="Phone-Number" />
                    </Hold>
                    <Hold>
                        <small>Address</small>
                        <input type="text" placeholder="Address" />
                    </Hold>
                   </Infos>
                   <ButHold>
                      <button>Create</button>
                   </ButHold>
                </Info>
            </Wrap>
        </Cont>
    )
}
export default Stations
const Cont=styled.div`
width: calc(100% - 270px);
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const Wrap=styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
margin-left: 20px;
/* justify-content: center;
align-items: center; */
`
const MainHead=styled.div`
margin-bottom: 50px;
`
const Main=styled.div`
display: flex;
width: 50%;
justify-content: space-between;
margin-bottom: 20px;
p{
    color: blue;
    font-size: 20px;
    border-bottom: 3px blue solid;
    padding-bottom: 15px;
}
span{
    color: black;
    font-size: 20px;
    // border-bottom: 3px blue solid;
    padding-bottom: 15px;
}

`
const Details=styled.div``
const Info=styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
`
const Infos=styled.div`
display: flex;
flex-wrap: wrap;
/* justify-content: space-between; */
`
const Hold=styled.div`
display:flex;
flex-direction:column;
margin-right: 50px;
margin-bottom: 30px;
input{
    width: 500px;
    height: 45px;
    outline-color: lightgreen;
    padding-left: 8px;
    border-radius:5px;
    margin-top: 2px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
   border: none;
}
`
const ButHold=styled.div`
button{
    padding: 15px 20px;
    color: white;
    background-color: blue;
    border-radius: 3px;
    border: none;
    font-size:20px;
}
`
