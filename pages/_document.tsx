import { Html, Head, Main, NextScript } from 'next/document'

const Document: React.FC = () => {
  return (
    <Html>
      <Head />
      <body className='bg-white font-headline text-black dark:bg-black dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
