import {useContext, useState,useEffect} from 'react'
import {Gridify} from '../Grid'
import {Loading} from '../Loading'
import {FetchStore} from '../../Context/store';
import {useHistory} from 'react-router-dom';

import {Header,Input,Container,Button, Icon} from './styles'

export const Home = ({fetchData}) => {
    const { photos, loading } = useContext(FetchStore);
    const history = useHistory();
    const [search, setSearch] = useState("")
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        fetchData();
          return () => {}
      }, [])

    const handleKeyEvent = (e)=> {
        if(e.code === "Enter"){
           history.push(`/search/${search}`);
        }
    }
    return (
        <div>
            <Header>
                <Container>
                    <Input placeholder="Search for photo" value={search} onChange={handleChange} onKeyPress={handleKeyEvent}/>
                    <Button type="submit">
                        <Icon version="1.1" id="Capa_1" x="0px" y="0px"
                            viewBox="0 0 56.966 56.966"
                            width="512px" height="512px">
                            <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </Icon>
                    </Button>
                </Container>
            </Header>
           { loading ?<Loading/>: <Gridify items={photos}/>}

       
        </div>
    )
}
