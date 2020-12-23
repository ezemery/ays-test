import {useState} from 'react'
import {Grid, Content} from './styles'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Popup} from '../Modal';

export const Gridify = ({items}) => {
    const [selectedPost, setSelectedPost] = useState([]);
    const [modalIsOpen,setIsOpen] = useState(false);

    function openModal(id) {
        const item = items.length > 0 && id ? items.filter((item) => item.id === id) : [];
        setSelectedPost(item)
        setIsOpen(true);
      }

    function closeModal(){
        setIsOpen(false);
      }

    return (
        <div>
        <Grid>
            {items.map((item,indx)=> 
            <Content key={indx} onClick={()=> openModal(item.id)}>
                <LazyLoadImage src={item.urls.raw}/>
                <div className="overlay"></div>
                <div className="bio">
                    <p>{item.user.name}</p>
                    <span>@{item.user.instagram_username}</span>
                </div>
            </Content>)}
           
        </Grid>
            {selectedPost.length > 0 && <Popup modalIsOpen={modalIsOpen} closeModal={closeModal} item={selectedPost}/>} 
        </div>
    )
}
