import tw, {styled} from 'twin.macro';
import ReactModal from 'react-modal';

export const BrowseModal = styled(ReactModal)`
${tw`sm:flex bg-white shadow-xl transform transition-all rounded-lg outline-none mx-14 my-14`}
z-index: 999999;
width: 650px;
height:350px;
`;

export const Close = styled.div`
  ${tw`absolute -top-10 -right-16`}
`;

export const Button = styled.button`
  ${tw`inline-flex items-center justify-center p-1 border border-transparent text-base leading-6 rounded-full text-white focus:outline-none transition ease-in-out duration-150 outline-none z-50`}
  background-color: transparent;

  &:hover {
    background-color: transparent;
  }

  &:focus {
    border-color: transparent;
  }
`;

export const StyledIcon = styled.svg`
  ${tw`w-6 h-6`}
`;

export const Content = styled.div`
${tw`flex flex-col`}
    img{
        ${tw`w-full h-72 object-cover rounded-t-md`}
    }
    p{
        ${tw`pl-8 font-bold`}   
    }
`