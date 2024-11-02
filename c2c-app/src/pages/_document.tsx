import { init } from "next/dist/compiled/webpack/webpack";
import { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitalProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => 
        originalRenderPage({
          enhanceApp: (App) => (props) => 
            sheet.collectStyles(<App {...props} />),
        })
    const intialProps = await Document.
      
   return {
    ...init
    styles: [

    ],
  } finally{
    sheet.seal()
  }
}}
}
