import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    context: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(context)
    return initialProps
  }

  render(): JSX.Element {
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
}

export default MyDocument
