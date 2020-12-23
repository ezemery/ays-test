import tw, {styled} from 'twin.macro';

export const Header = styled.div`
${tw`flex items-center justify-center h-48 bg-gray-300`}
`

export const Input = styled.input`
${tw`text-gray-400 border-0 p-5 focus:outline-none rounded-md rounded-tl-none rounded-bl-none w-full`}
`

export const Container = styled.div`
${tw`sm:w-full  max-w-xl mx-auto sm:flex relative`}
`

export const Button = styled.button`
${tw`absolute inset-y-0 -left-7 flex items-center rounded-tl-md rounded-bl-md bg-white border-none p-4`}
`

export const Icon = styled.svg`
${tw`text-gray-600 h-4 w-4 fill-current`}
`