import { Html, Head, Main, NextScript } from 'next/document'

const Document: React.FC = () => {
  return (
    <Html>
      <Head />
      <body className='bg-white dark:bg-black text-black dark:text-white font-headline'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
