import tw, {styled} from 'twin.macro';

export const Grid = styled.div`
   ${tw`max-w-3xl mx-auto grid sm:grid-cols-3 grid-cols-2 sm:gap-7 gap-2 -mt-5`}
    grid-gap: 2em; /* [1] Add some gap between rows and columns */
    grid-auto-rows: 250px;
    &:nth-child(2n) {
        grid-row-end: span 2;
      }
`;


