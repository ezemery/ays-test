import Modal from 'react-modal';
import {BrowseModal, Button,StyledIcon, Close, Content} from './styles'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import userEvent from '@testing-library/user-event';


export const Popup = ({modalIsOpen,closeModal,item}) => {
    const {urls, user} = item[0]
    const closeButtonMarkup = (
        <Button type="button" onClick={closeModal}>
          <StyledIcon fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </StyledIcon>
        </Button>
      );
    return (
        <BrowseModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        appElement={document.body}
        style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 99999,
            },
          }}
        >
            <Content>
                <LazyLoadImage src={urls.raw}/>
                <p>{user.name}</p>
            </Content>
            <Close>{closeButtonMarkup}</Close>
        </BrowseModal>
    )
}
