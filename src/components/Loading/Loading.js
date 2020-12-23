import Skeleton from 'react-loading-skeleton';
import {Grid} from './styles'

export const Loading = () => {
    return (
        <div>
            <Grid>
                <Skeleton height={250}/>
                <Skeleton height={250}/>
                <Skeleton height={250}/>
            </Grid>  
        </div>
    )
}
