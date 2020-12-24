import {useState, useEffect} from 'react'
import {Grid, Content, Container} from './styles'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Popup} from '../Modal';
import { transitions, easings} from "react-stack-grid";

const transition = transitions.scaleDown;

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
        <Container>
       { items.length  > 0 ? 
       <Grid 
       monitorImagesLoaded
       columnWidth={200}
       duration={600}
       gutterWidth={15}
       gutterHeight={15}
       easing={easings.cubicOut}
       appearDelay={60}
       appear={transition.appear}
       appeared={transition.appeared}
       enter={transition.enter}
       entered={transition.entered}
       leaved={transition.leaved}
       >
            {items.map((item,indx)=> 
            <Content key={indx} onClick={()=> openModal(item.id)} className="grid-item">
                <LazyLoadImage src={item.urls.raw}/>
                <div className="overlay"></div>
                <div className="bio">
                    <p>{item.user.name}</p>
                    <span>{item.user.location}</span>
                </div>
            </Content>)}
           
        </Grid>:<h1 style={{display:"flex", justifyContent:"center",color: "rgba(107, 114, 128, 1)" }}>No Results</h1>}
            {selectedPost.length > 0 && <Popup modalIsOpen={modalIsOpen} closeModal={closeModal} item={selectedPost}/>} 
        </Container>
    )
}
