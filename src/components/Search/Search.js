
import {useEffect,useContext} from 'react'
import {Header,Container} from './styles'
import {Gridify} from '../Grid'
import {useParams} from 'react-router-dom';
import {SearchStore} from '../../Context/store';
import {Loading} from '../Loading'

export const Search = ({searchData}) => {
    const {query} = useParams();
    const { photos, loading } = useContext(SearchStore);
    useEffect(() => {
        searchData(query)
          return () => {}
      }, [query])

    return (
        <div>
            <Header>
                <Container>
                    <h1 style={{color: "rgba(107, 114, 128, 1)" }}>{`Search Results for "${query}"`} </h1>
                </Container>
            </Header>
            { loading ? <Loading/>: <Gridify items={photos}/>}
        </div>
    )
}
