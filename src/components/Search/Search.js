
import {useEffect,useContext} from 'react'
import {Header,Input,Container,Button, Icon} from './styles'
import {Gridify} from '../Grid'
import {useParams} from 'react-router-dom';
import {useFetch} from "../../Hooks/fetch.hook";
import {FetchStore} from '../../Context/store';
import {Loading} from '../Loading'

export const Search = () => {
    const {query} = useParams();
    const fetchContext = useFetch();
    const { photos, loading } = useContext(FetchStore);
    useEffect(() => {
        fetchContext.searchDataAsync(query)
          return () => {}
      }, [])

    console.log(query, photos)
    return (
        <div>
            <Header>
                <Container>
                    <h1 style={{color: "rgba(107, 114, 128, 1)" }}>{`Search Results for "${query}"`} </h1>
                </Container>
            </Header>
            { loading ?<Loading/>: <Gridify items={photos}/>}
        </div>
    )
}
