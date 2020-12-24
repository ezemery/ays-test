import tw, {styled} from 'twin.macro';
import StackGrid from "react-stack-grid";

export const Container = styled.div`
${tw`max-w-3xl mx-auto -mt-10`}
`;
export const Grid = styled.div`
${tw`max-w-3xl mx-auto grid sm:grid-cols-3 grid-cols-2 sm:gap-7 gap-2`}
grid-gap: 2em; /* [1] Add some gap between rows and columns */
grid-auto-rows: 250px;
&:nth-child(2n) {
    grid-row-end: span 2;
  }
`;

export const Content = styled.div`
    ${tw`rounded-md bg-black sm:w-56 w-40 overflow-hidden mx-auto relative`}
    
    img{
        ${tw`absolute top-0 bottom-0 h-full w-full object-cover`} 
    }
    .overlay{
        ${tw`absolute top-0 bottom-0 h-full w-full`} 
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(9,9,121,0.024247198879551846) 46%, rgba(0,212,255,0) 100%);
    }
    .bio{
        ${tw`flex flex-col text-white text-sm absolute bottom-0 p-5 left-0 right-0 object-cover`} 
     p{
        ${tw`font-semibold`}  
     }
    }
`

